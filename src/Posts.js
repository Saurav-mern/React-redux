import React from 'react'
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux'


function Posts(props) {
    

    const postView = props.posts.map((post) => {
        return(
            <div key={post.id}>
                < IndividualPost title ={post.title} body = {post.body} id = {post.id} />
            </div>
        )
    })

    return (
        <div className='gridContainer'>
            { 
                props.pending ? 
                <h3 style={{color: "blue"}} >Wait, fetching the data</h3> :      
                postView
            }
            
        </div>
    )
}

const mapDispatchToProps = () => {
    return {

    }
}
const mapStateToProps = state => {
    return {
        posts: state.mango.posts,
        pending: state.mango.pending
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Posts);


