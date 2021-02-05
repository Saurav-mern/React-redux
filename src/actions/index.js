

export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}
export const incrementby3 = (nr) => {
    return {
        type: 'INCREMENT_BY_3',
        payload: nr
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}
export const login = () => {
    return {
        type: 'LOGIN',
    }
}
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        payload: id
    }
}
export const editPost = (id, title, body) => {
    console.log('from action', id, title, body)
    return {
        type: 'EDIT_POST',
        payload: {
            id,
            title,
            body
        }
    }
}

export const fetchData = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: 'FETCH_POST',
                payload: posts
            })
        )
}