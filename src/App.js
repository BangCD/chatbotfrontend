import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useId } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  const [val,setVal]=useState('Hello there Default')

  // const click=()=>{
  //   var JSONresponce={
  //     "message":"worl1d"
  //   }
  //   fetch('http://localhost:5000/flask/hello',{
  //     method:"POST",
  //     //mode:'cors',
  //     body:JSON.stringify(JSONresponce),
  //     headers: { "content-type": "application/json" },
  //   }).then(response => {
  //     console.log("RESPONCE FROM POST ",response)
  //     //setPostContent(response.data.message)
  //   })


  //   // setPostContent(val)
  // }


  const click=()=>{
    console.log(val)
    var JSONresponce={
      "question":val
    }
      axios.post('http://127.0.0.1:5000/chatBot/ask',JSONresponce).then(responce1=>{
        console.log("post responce",responce1)
        setPostContent(responce1.data.message)
      })
    

    // setPostContent(val)
  }

  const change=event=>{
    const newValue = event.target.value
    setVal(newValue)
  }
  const postTextAreaId = useId();

  const [postContent,setPostContent]=useState('')


  // useEffect(()=>{
  //   axios.get('http://localhost:5000/flask/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     console.log(response.data.message)
  //     setPostContent(response.data.message)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  // }, [])
  return (
  <div className='App'>
    <input onChange={change}
    
    value={val}></input>
    <button onClick={click}>Click</button>
    <div> 
    <label>
      Write your post:
      <textarea 
        value={postContent}
        readOnly={true}
        //onChange={e=>setPostContent(e.target.value)}
        id={postTextAreaId}
        name="postContent" rows={4} cols={40} />
    </label>  
    </div>

  </div>
  )
}
//ReactDOM.render(<App />, document.getElementById('input-container'));
export default App;