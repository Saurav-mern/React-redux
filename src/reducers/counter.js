const counter = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'INCREMENT_BY_3':
            return state + action.payload
        case 'DECREMENT':
            return state - 1 
        default:
            return state
    }
}

export default counter