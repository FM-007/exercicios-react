
export const initialState = {
    cart: [],
    products: [],
    user: null,
    // Nosso foco...
    number: 0
}

export function reducer (state, action){
    switch (action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
            break;
        case 'sub2':
            return {...state, number: state.number - 2}
            break;
        case 'mult7':
            return {...state, number: state.number * 7}
            break;
        case 'numberDiv25':
            return {...state, number: state.number / 25}
            break;
        case 'numberInt':
            return {...state, number: parseInt(state.number)}
            break;
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
            break;
        case 'login':
            return {...state, user: {name: action.payload}}
            break;
        default:
            return state
            break;
    }
}