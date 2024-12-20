import {
    SET_SHOW_MENU,
    SET_SHOW_LOCAL,
    SET_LOCAL,
    SET_SEARCH_RESULT,
    SET_SEARCH_SUGGEST,
    SET_SEARCH_VALUE,
    SET_SHOW_MODAL_LOGIN,
    SET_SHOW_NOTI,
} from './constants';

export const setShowMenu = (payload) => ({
    type: SET_SHOW_MENU,
    payload,
});
export const setShowLocal = (payload) => ({
    type: SET_SHOW_LOCAL,
    payload,
});
export const setLocal = (payload) => ({
    type: SET_LOCAL,
    payload,
});
export const setSearchResult = (payload) => ({
    type: SET_SEARCH_RESULT,
    payload,
});
export const setSearchSuggest = (payload) => ({
    type: SET_SEARCH_SUGGEST,
    payload,
});
export const setSearchValue = (payload) => ({
    type: SET_SEARCH_VALUE,
    payload,
});
export const setShowModalLogin = (payload) => ({
    type: SET_SHOW_MODAL_LOGIN,
    payload,
});
export const setShowNoti = (payload) => ({
    type: SET_SHOW_NOTI,
    payload,
});
