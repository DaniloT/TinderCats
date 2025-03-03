import { voteCatImage as voteCatImageService } from '../../services/CatService'; // Import the API call
import { SET_STACKS, NEXT_IMAGE, SWAP_STACKS, SET_LOADING, SET_SWIPE_TEXT, RESET_SWIPE, VOTE_CAT_IMAGE, SET_VOTE_STATUS } from './types';

// Set initial stacks
export const setStacks = (stackA: any[], stackB: any[]) => ({
    type: SET_STACKS,
    payload: { stackA, stackB },
});

// Move to the next image
export const nextImage = () => ({
    type: NEXT_IMAGE,
});

// Swap stacks (when one stack is depleted)
export const swapStacks = () => ({
    type: SWAP_STACKS,
});

// Set loading state
export const setLoading = (isLoading: boolean) => ({
    type: SET_LOADING,
    payload: isLoading,
});

// Set swipe text (LIKE/NOPE)
export const setSwipeText = (text: string) => ({
    type: SET_SWIPE_TEXT,
    payload: text,
});

// Reset swipe animation
export const resetSwipe = () => ({
    type: RESET_SWIPE,
});

// Vote action (like or dislike)
export const voteCatImage = (catId: string, voteType: 1 | -1) => async (dispatch: any) => {
    dispatch(setLoading(true)); // Set loading before the API call

    try {
        // Call the API service to send the vote
        const voteResponse = await voteCatImageService(catId, voteType);

        // Dispatch success action
        dispatch({
            type: VOTE_CAT_IMAGE,
            payload: { catId, voteType, voteStatus: 'success' },
        });

        // Set the swipe text to 'LIKE' or 'NOPE'
        dispatch(setSwipeText(voteType === 1 ? 'LIKE' : 'NOPE'));
    } catch (error) {
        // Dispatch failure action
        dispatch({
            type: VOTE_CAT_IMAGE,
            payload: { catId, voteType, voteStatus: 'failed' },
        });

        console.error('Error voting for cat image:', error);
    } finally {
        dispatch(setLoading(false)); // Set loading to false after the API call is finished
    }
};

// Set vote status (success or failed)
export const setVoteStatus = (status: string) => ({
    type: SET_VOTE_STATUS,
    payload: status,
});
