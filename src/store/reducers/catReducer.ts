import { SET_STACKS, NEXT_IMAGE, SWAP_STACKS, SET_LOADING, SET_SWIPE_TEXT, RESET_SWIPE, VOTE_CAT_IMAGE, SET_VOTE_STATUS } from '../actions/types';

const initialState = {
    stackA: [], // Array of objects with image URL and breed information
    stackB: [],
    activeStack: 'A', // Current active stack ('A' or 'B')
    currentIndex: 0, // Index of the current image in the active stack
    loading: false, // Loading state
    swipeText: '', // The current swipe text (LIKE/NOPE)
    voteStatus: '', // Vote status (success or failed)
};

const catReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_STACKS:
            return {
                ...state,
                stackA: action.payload.stackA, // Updated stack A with image and breed data
                stackB: action.payload.stackB, // Updated stack B with image and breed data
                loading: false,
            };

        case NEXT_IMAGE:
            return {
                ...state,
                currentIndex: state.currentIndex + 1, // Move to the next image in the active stack
            };

        case SWAP_STACKS:
            return {
                ...state,
                activeStack: state.activeStack === 'A' ? 'B' : 'A', // Switch between stack A and B
                stackA: state.activeStack === 'A' ? [] : state.stackA, // Empty stack A if it's not active
                stackB: state.activeStack === 'B' ? [] : state.stackB, // Empty stack B if it's not active
                currentIndex: 0, // Reset the index when swapping stacks
            };

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload, // Set loading state
            };

        case SET_SWIPE_TEXT:
            return {
                ...state,
                swipeText: action.payload, // Set the swipe text (LIKE/NOPE)
            };

        case RESET_SWIPE:
            return {
                ...state,
                swipeText: '', // Reset swipe text
            };

        case VOTE_CAT_IMAGE:
            // You can store voting data for each image (for example: success or failure status)
            return {
                ...state,
                voteStatus: action.payload.voteStatus, // Update the vote status (success or failed)
            };

        case SET_VOTE_STATUS:
            return {
                ...state,
                voteStatus: action.payload, // Set the vote status (for showing a success/failure message)
            };

        default:
            return state;
    }
};

export default catReducer;
