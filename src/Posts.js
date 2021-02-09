import React from 'react'
import IndividualPost from './IndividualPost'
import { connect } from 'react-redux'
import { BarLoader } from 'react-spinners'
import { css } from '@emotion/react'

const loaderCSS = css`
    margin-left: 33vw;
    width: 200px;
    
`


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
                // <h3 style={{color: "#006400", position:'relative', left: '370px',}} >Wait, fetching the data... </h3> 
                <BarLoader color="#006400" css={loaderCSS} loading/>
                
                :      
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


