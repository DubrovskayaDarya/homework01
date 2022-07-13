const initState = {
    isLoading: false
}

type ActionType = LoadingActionType

type LoadingActionType = {
    type: "LOADING"
    status: boolean
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.status
            }
        }
        default: return state
    }
}

export const loadingAC = (status: boolean): LoadingActionType => ({type: "LOADING", status})