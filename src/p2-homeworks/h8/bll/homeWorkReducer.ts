import {UserType} from "../HW8";

type ActionType = SortAT | CheckAT

type SortAT = {
    type: "sort"
    payload: "up" | "down"
};
type CheckAT = {
    type: "check"
    payload: 18
};

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => {
    let res = state.map(e => e);
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "up": {
                    res.sort((a, b) => (a.name.localeCompare(b.name)))
                    return res
                }
                case "down": {
                    res.sort((a, b) => (b.name.localeCompare(a.name)))
                    return res
                }
            }
            return res
        }
        case 'check': {
            return res.filter(e => e.age > 18)
        }
        default:
            return res
    }
}