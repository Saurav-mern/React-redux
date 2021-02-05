import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditPost from './EditPost'
import { deletePost, editPost } from './actions'


function IndividualPost(props) {
    const [viewForm, setViewForm] = useState(false)
    const id = props.id
    const handleForm = () => {
        setViewForm(!viewForm)
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button onClick={() => props.deletePost(id)}>Delete</button>
            <button onClick={handleForm}>Edit</button>
            {
                viewForm ?
                <EditPost id={id} handleForm={handleForm} /> :
                null
            }
            <br/>
            
        </div>
    )
}

const mapDispatchToProps = () => {
    return {
        deletePost,
        editPost
    }
}
const mapStateToProps = state => {
    return {
        posts:state.mango.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(IndividualPost)
