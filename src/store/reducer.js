import {
    SET_LOCAL,
    SET_SHOW_LOCAL,
    SET_SHOW_MENU,
    SET_SEARCH_RESULT,
    SET_SEARCH_SUGGEST,
    SET_SEARCH_VALUE,
} from './constants';

const initState = {
    check: {
        menu: false,
        local: false,
        search: {
            result: false,
            suggest: false,
        },
    },
    local: {
        id: 1,
        name: 'Hồ Chí Minh',
    },
    search: '',
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
        case SET_SEARCH_RESULT:
            return {
                ...state,
                check: {
                    ...state.check,
                    search: {
                        result: action.payload,
                        suggest: false,
                    },
                },
            };

        case SET_SEARCH_SUGGEST:
            return {
                ...state,
                check: {
                    ...state.check,
                    search: {
                        result: false,
                        suggest: action.payload,
                    },
                },
            };
        case SET_SEARCH_VALUE:
            return {
                ...state,
                search: action.payload,
            };
        default:
            break;
    }
}

export { initState };
export default reduce;
