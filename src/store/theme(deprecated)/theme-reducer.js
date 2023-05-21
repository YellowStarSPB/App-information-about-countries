import { TOOGLE_THEME } from "./theme-actions";


export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case TOOGLE_THEME:
            return action.payload
        default:
            return state
    }
}