import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useId } from 'react';
import axios from 'axios'
import { SearchBar } from './components/SearchBar';
// import { SendIconButton } from './components/SendIconButton';
import { ResponceBox } from './components/ResponceBox';
import logo2 from './in5-logo.png'



function App() {
  const [getMessage, setGetMessage] = useState({})

  const [val,setVal]=useState('Hello there Default')

  const SendButtonClick=()=>{
    console.log(SearchBar.val)
  }

  const click=()=>{
    console.log(val)
    // var JSONresponce={
    //   "question":val
    // }
    //   axios.post('http://127.0.0.1:5000/chatBot/ask',JSONresponce).then(responce1=>{
    //     console.log("post responce",responce1)
    //     setPostContent(responce1.data.message)
    //   })
    

    // setPostContent(val)
  }

  const change=event=>{
    const newValue = event.target.value
    setVal(newValue)
  }
  

  // const [postContent,setPostContent]=useState('')

  const[fromChild,setFromChild]=useState('')

  const handleChildToParent=(fromChild)=>setFromChild(fromChild);

  const [parentToChild,setParentToChild]=useState('')

  const handleParentToChild=(val)=>{
    setParentToChild(val)
  }

  return (
  <div className='App'>
      <h2>{fromChild}</h2>
      {/* <button onClick={handleParentToChild}>Data Parent To Child</button> */}
      <img className='in5logo' src={logo2} />
      <div className='chat-wrapper'>
      <div className='responce-box-container'> 
        <ResponceBox dataParentToChild={parentToChild}></ResponceBox>
      {/* <label>
        Responce:
        <textarea 
          value={postContent}
          readOnly={true}
          //onChange={e=>setPostContent(e.target.value)}
          id={postTextAreaId}
          name="postContent" rows={4} cols={40} />
      </label>   */}
      </div>

      <div className='search-bar-container'>
      <SearchBar dataChildToParent={handleParentToChild}>
        
      </SearchBar>
        
        {/* <SendIconButton></SendIconButton> */}
        {/* <div className='InputBar'>
          <input id="inputSearch" onChange={change} value={val}></input>
            <div className='inputSearchIcon'>
              <button onClick={click}>Click</button>
            </div>
        </div> */}
      </div>
      </div>
  </div>
  )
}
//ReactDOM.render(<App />, document.getElementById('input-container'));
export default App;