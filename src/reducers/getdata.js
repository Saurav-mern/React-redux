const initialState = {
    pending: true,
    posts: [],
    error: null
}


const getdata = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_POST':
            console.log(action.payload)
            return {
                ...state,
                pending:false,
                posts: action.payload
            }
        case 'DELETE_POST':
            const newPosts = state.posts.filter((post) => post.id != action.payload )
            return {
                ...state,
                posts: newPosts
            }
        case 'EDIT_POST':
            console.log('we are in reducer now', action.payload)
            const editedPost = state.posts.map((post) => {
                if(post.id == action.payload.id){
                    return {
                        ...post, 
                        title: action.payload.title,
                        body: action.payload.body 
                    }
                }
                return post
            })
            return{
                ...state,
                posts: editedPost
            }
        default:
            return state
    }
}

export default getdata