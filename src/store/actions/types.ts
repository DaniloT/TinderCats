export const SET_STACKS = 'SET_STACKS';
export const NEXT_IMAGE = 'NEXT_IMAGE';
export const SWAP_STACKS = 'SWAP_STACKS';
export const SET_LOADING = 'SET_LOADING';
export const SET_SWIPE_TEXT = 'SET_SWIPE_TEXT';
export const RESET_SWIPE = 'RESET_SWIPE';
export const VOTE_CAT_IMAGE = 'VOTE_CAT_IMAGE';
export const SET_VOTE_STATUS = 'SET_VOTE_STATUS';


export interface SetStacksAction {
    type: typeof SET_STACKS;
    payload: {
        stackA: any[];
        stackB: any[];
    };
}

export interface NextImageAction {
    type: typeof NEXT_IMAGE;
}

export interface SwapStacksAction {
    type: typeof SWAP_STACKS;
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

export interface SetSwipeTextAction {
    type: typeof SET_SWIPE_TEXT;
    payload: string;
}

export interface ResetSwipeAction {
    type: typeof RESET_SWIPE;
}

export interface VoteCatImageAction {
    type: typeof VOTE_CAT_IMAGE;
    payload: {
        catId: string;
        voteType: 1 | -1;
        voteStatus: 'success' | 'failed';
    };
}

export interface SetVoteStatusAction {
    type: typeof SET_VOTE_STATUS;
    payload: string;
}

export type CatActionTypes =
    | SetStacksAction
    | NextImageAction
    | SwapStacksAction
    | SetLoadingAction
    | SetSwipeTextAction
    | ResetSwipeAction
    | VoteCatImageAction
    | SetVoteStatusAction;
