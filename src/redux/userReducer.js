import axios from 'axios'

const initialState = {
    favorites: []
    
}

const HANDLE_UPDATE_FAVORITES = 'HANDLE_UPDATE_FAVORITES'

export const handleUpdateFavorites = (favorites) => {
    return {
        type: HANDLE_UPDATE_FAVORITES,
        payload: favorites
    }
}

export default function reducer(state=initialState, action) {
    const {type, payload } = action

    switch(type) {
        case HANDLE_UPDATE_FAVORITES: 
            return { ...state, favorites: payload}
        default: return state
    }
}