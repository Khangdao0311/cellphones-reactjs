import { SET_LOCAL, SET_SHOW_LOCAL, SET_SHOW_MENU } from './constants';

const initState = {
    check: {
        menu: false,
        local: false,
    },
    local: {
        id: 1,
        name: 'Hồ Chí Minh',
    },
};

function reduce(state, action) {
    switch (action.type) {
        case SET_SHOW_MENU:
            return {
                ...state,
                check: {
                    ...state.check,
                    menu: state.check.menu ? false : true,
                },
            };
        case SET_SHOW_LOCAL:
            return {
                ...state,
                check: {
                    ...state.check,
                    local: state.check.local ? false : true,
                },
            };
        case SET_LOCAL:
            return {
                ...state,
                local: action.payload,
            };
        default:
            break;
    }
}

export { initState };
export default reduce;
