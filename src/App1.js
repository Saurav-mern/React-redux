import './App.css';
import Posts from './Posts'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { increment, decrement, login, incrementby3, fetchData, deletePost } from './actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function App1(props) {

// const postsView = props.posts.map((post) => {
//   return (
//     <div>
//     <h3>{post.title}</h3>
//     <p>{post.body}</p>
//     <button onClick={() => props.deletePost(post.id)}>Delete</button>
//     </div>
//   )
// })


const dispatch = useDispatch()

useEffect(() => {
    props.fetchData()
  }, []
);




  return (
    <div className="App">
      {/* <h1 style={{color: "#006400"}}>Hello from App1.js</h1>
      <h3>Count: {props.counter}</h3>

      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.incrementby3(3)}>+3</button>
      <button onClick={() => props.decrement()}>-1</button><br/>
      <button onClick={() => props.login()}>Toggle Login</button>

      { props.signin ? 
        <div> <p>Okay you are logged in</p>
          <img style={{width:'600px', height:'432px'}} src="https://d3aux7tjp119y2.cloudfront.net/images/Akerstrom_Norrsken_Lappland2-IBSweb_8wOhJBJ.width-800.jpg"/>
        </div> 
        : 
        <div>I am afraid you will have to login to see this.</div> 
      }
      <br/>
      <br/> */}
      <h1 style={{color: "#006400"}}>Posts from JSONPlaceholder</h1>
      
      <Posts />
    
    </div>
  );
}

const mapStateToProps = (state) => {
     return { 
         counter: state.potato,
         signin: state.tomato,
         posts: state.mango.posts,
         pending: state.mango.pending
         }
};

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({
//         increment: increment,
//         incrementby3,
//         decrement,
//         login,
//         fetchData:fetchData,
//         deletePost,
//     }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App1);


const mapDispatchToProps = () => {
    return {
        increment: increment,
        incrementby3,
        decrement,
        login,
        fetchData:fetchData,
        deletePost,
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(App1);
