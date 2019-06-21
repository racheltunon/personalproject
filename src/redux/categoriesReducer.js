import axios from 'axios'

const initialState = {
    categories: [],
    category: [],
    items: [
 
    ],
    loading: false,

}

const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES'
const DISPLAY_ITEMS = 'DISPLAY_ITEMS'
const DISPLAY_CATEGORY='DISPLAY_CATEGORY'

export default function reducer(state = initialState, action) {
    console.log(action)
    console.log(state)
    switch(action.type) {
        case `${DISPLAY_ITEMS}_PENDING`:
            return {...state, loading: true};
        case `${DISPLAY_ITEMS}_FULFILLED`:
            const items = action.payload
            return {...state, items};
        case `${DISPLAY_CATEGORIES}_PENDING`:
            return {...state, loading: true}
        case `${DISPLAY_CATEGORIES}_FULFILLED`:
            return {...state, categories: action.payload.data}
        case `${DISPLAY_CATEGORY}_PENDING`:
            return {...state, loading: true}
        case `${DISPLAY_CATEGORY}_FULFILLED`:
            return {...state, category: action.payload.data}
        default: return state

    }
}

export function displayItems() {
    let data = axios.get('/api/items').then(res => res.data)
    return {
        type: DISPLAY_ITEMS,
        payload: data
    }
}

export function displayCategories() {
    
    return {
        type: DISPLAY_CATEGORIES,
        payload: axios.get('/api/categories')
    }
}
export function displayCategory(category_id) {
    console.log(category_id)
    return {
        type: DISPLAY_CATEGORY,
        payload: axios.get(`/api/categories/${category_id}`)
    }
}
