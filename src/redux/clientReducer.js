// import axios from 'axios'

// const initialState = {
//     loading: false,
//     client: []
// };

// const GET_CLIENT = "GET_CLIENT";

// export function getClient() {
//     return {
//         type: GET_CLIENT,
//         payload: axios.get('/auth/user').catch((error) => error)
//     }
// }

// export default function reducer(state = initialState, action) {
//     console.log(state)
//     switch (action.type) {
//         case `${GET_CLIENT}_PENDING`:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case `${GET_CLIENT}_FULFILLED`:
//             return {
//                 ...state,
//                 loading: false,
//                 user: action.payload.data
//             }
//         default: 
//             return state;
//     }
// }