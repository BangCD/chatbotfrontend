import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useId } from 'react';
import axios from 'axios'
import { SearchBar } from './components/SearchBar';




function App() {
  const [getMessage, setGetMessage] = useState({})

  const [val,setVal]=useState('Hello there Default')


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



  return (
  <div className='App'>
    <div> 
    <label>
      Responce:
      <textarea 
        value={postContent}
        readOnly={true}
        //onChange={e=>setPostContent(e.target.value)}
        id={postTextAreaId}
        name="postContent" rows={4} cols={40} />
    </label>  
    </div>

    <div className='search-bar-container'>
      {/* <div>SearchBar</div> */}
      <SearchBar></SearchBar>
      {/* <div className='InputBar'>
        <input id="inputSearch" onChange={change} value={val}></input>
          <div className='inputSearchIcon'>
            <button onClick={click}>Click</button>
          </div>
      </div> */}
    </div>
  </div>
  )
}
//ReactDOM.render(<App />, document.getElementById('input-container'));
export default App;