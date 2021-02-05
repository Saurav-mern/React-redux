import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './App.css';
import { increment, decrement, login, incrementby3, fetchData, deletePost } from './actions'

function App() {
const counter = useSelector(state => state.potato)
const signin = useSelector(state => state.tomato)
const posts = useSelector(state => state.mango.posts)
const pending = useSelector(state => state.mango.pending)

const postsView = posts.map((post) => {
  return (
    <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
    </div>
  )
})

const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchData())
    
  }, []
);




  return (
    <div className="App">
      <h1 style={{color: "#006400"}}>Hello from App.js</h1>
      <h3>Count: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementby3(3))}>+3</button>
      <button onClick={() => dispatch(decrement())}>-1</button><br/>
      <button onClick={() => dispatch(login())}>Toggle Login</button>

      { signin ? 
        <div> <p>Okay you are logged in</p>
          <img style={{width:'600px', height:'432px'}} src="https://d3aux7tjp119y2.cloudfront.net/images/Akerstrom_Norrsken_Lappland2-IBSweb_8wOhJBJ.width-800.jpg"/>
        </div> 
        : 
        <div>I am afraid you will have to login to see this.</div> 
      }
      <br/>
      <br/>
      <h1 style={{color: "#006400"}}>Posts from JSONplaceholder</h1>

      { 
        pending ? 
        <h3 style={{color: "blue"}}>Wait, fetching the data</h3> :      
        postsView
      }

      {/* {postsView} */}
      


    </div>
  );
}

export default App;
