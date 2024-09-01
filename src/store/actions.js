import { SET_SHOW_MENU, SET_SHOW_LOCAL, SET_LOCAL } from './constants';

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
