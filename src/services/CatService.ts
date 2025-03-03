import axios, { AxiosResponse } from 'axios';
import Config from 'react-native-config';

const API_KEY = Config.CAT_API_KEY;
const API_SEARCH_URL = Config.API_SEARCH_URL;
const API_VOTE_URL = Config.API_VOTE_URL;

interface Breed {
    id: string;
    name: string;
    origin: string;
}

interface CatImage {
    url: string;
    id: string;
    breeds: Breed[];
}

export const fetchCatImages = async (): Promise<{ id: string; url: string; breeds: { origin: string; name: string; id: string }[] }[]> => {
    try {
        if (API_SEARCH_URL != null && API_KEY != null) {
            const config: any = {
                headers: {
                    'x-api-key': API_KEY,
                },
                params: {
                    limit: 10,
                    size: 'full',
                    order: 'RAND',
                    has_breeds: 'true',
                },
            };

            const response: AxiosResponse<CatImage[]> = await axios.get(API_SEARCH_URL, config);

            return response.data.map((cat: CatImage) => ({
                id: cat.id,
                url: cat.url,
                breeds: cat.breeds.map((breed) => ({
                    id: breed.id,
                    name: breed.name,
                    origin: breed.origin,
                })),
            }));
        }

        throw new Error('.env File not properly set up');
    } catch (error) {
        console.error('Error fetching cat images:', error);
        return [];
    }
};

export const voteCatImage = async (catId: string, voteType: 1 | -1): Promise<string> => {
    try {
        if (API_VOTE_URL != null && API_KEY != null) {
            if (!catId || (voteType !== 1 && voteType !== -1)) {
                throw new Error('Invalid catId or voteType');
            }

            const config: any = {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'application/json',
                },
            };

            const votePayload = {
                image_id: catId,
                value: voteType,
            };

            const response = await axios.post(API_VOTE_URL, votePayload, config);

            if (response.status === 201) {
                return `Vote for image ${catId} successfully recorded as ${voteType === 1 ? 'like' : 'dislike'}`;
            } else {
                throw new Error(`Failed to vote for image ${catId}`);
            }
        }
    } catch (error) {
        console.error('Error voting for cat image:', error);
        return 'Failed to record vote';
    }
};
