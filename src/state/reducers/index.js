import {ADD_CHARACTER, ADD_CHARACTERS, DELETE_CHARACTER} from '../actions/types'
const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_CHARACTERS:
            return {
                ...state,
                characters: [...state.characters, ...action.payload]
            }
        case ADD_CHARACTER:
        return {
            ...state,
            characters: [...state.characters, action.payload]
        }
        
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter((charact) => charact.id !== action.payload)
            }    
        case 'EDIT_CHARACTER':
            return {
                ...state,
                characters: {
                    ...state.characters,
                    // I'm sending the arguments like this: changeInfo({ id: e.target.id, value: e.target.value }) and use them as below in reducer!
                    [action.payload.id-1]: action.payload,
                },
            };
        default:
            return state;
    }
}

export default todoReducer;