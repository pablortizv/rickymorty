import {ADD_CHARACTER, ADD_CHARACTERS, DELETE_CHARACTER} from "./types";

export const addCharactersAction  = charact => (
    {
    type: ADD_CHARACTERS,
    payload: charact
});
export const addCharacterAction  = charact => (
    {
    type: ADD_CHARACTER,
    payload: charact
});

export const editCharacterAction  = charact => (
    {
    type: 'EDIT_CHARACTER',
    payload: charact
});

// ADD_CHARACTERS

export const deleteCharactAction = charactID => ({
    type: DELETE_CHARACTER,
    payload: charactID
});