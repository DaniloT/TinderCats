import { SET_STACKS, NEXT_IMAGE, SWAP_STACKS, SET_LOADING, SET_SWIPE_TEXT, RESET_SWIPE, VOTE_CAT_IMAGE, SET_VOTE_STATUS } from '../actions/types';

const initialState = {
    stackA: [],
    stackB: [],
    activeStack: 'A',
    currentIndex: 0,
    loading: false,
    swipeText: '',
    voteStatus: '',
};

const catReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_STACKS:
            return {
                ...state,
                stackA: action.payload.stackA,
                stackB: action.payload.stackB,
                loading: false,
            };

        case NEXT_IMAGE:
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
            };

        case SWAP_STACKS:
            return {
                ...state,
                activeStack: state.activeStack === 'A' ? 'B' : 'A',
                stackA: state.activeStack === 'A' ? [] : state.stackA,
                stackB: state.activeStack === 'B' ? [] : state.stackB,
                currentIndex: 0,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case SET_SWIPE_TEXT:
            return {
                ...state,
                swipeText: action.payload,
            };

        case RESET_SWIPE:
            return {
                ...state,
                swipeText: '',
            };

        case VOTE_CAT_IMAGE:
            return {
                ...state,
                voteStatus: action.payload.voteStatus,
            };

        case SET_VOTE_STATUS:
            return {
                ...state,
                voteStatus: action.payload,
            };

        default:
            return state;
    }
};

export default catReducer;
