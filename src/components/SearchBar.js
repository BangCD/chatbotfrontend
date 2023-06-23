import React,{useState } from 'react'
import {FaSearch} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
import "./SearchBar.css"
import axios from 'axios';
import {SendIconButton} from './SendIconButton';



export const SearchBar = (props) => {
  const [val,setVal]=useState('Ask your question ...')

  // const handleChildToProp=()=>{
  //   props.dataChildToParent(val)
  // }


  const change=event=>{
    const newValue = event.target.value
    setVal(newValue)
  }

  const click=()=>{
    console.log(val)
    // props.dataChildToParent(val)
    console.log("Button clicked")
    var JSONresponce={
      "question":val
    }
      axios.post('http://127.0.0.1:8000/chatBot/ask',JSONresponce).then(responce1=>{
        console.log("post responce",responce1)
        props.dataChildToParent(responce1.data.message)
        // setPostContent(responce1.data.message)
      })
    

    // setPostContent(val)
  }


  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'></FaSearch>
      <input placeholder='Type to search ...' value={val} onChange={change}></input>
      <div className="send-button-wrapper" onClick={click}>
        <SendIconButton></SendIconButton>
        {/* <FaLocationArrow id='FaLocationArrow'></FaLocationArrow>
        <button id='input-button' startIcon={<FaLocationArrow id='FaLocationArrow'></FaLocationArrow>} >Click</button>
         */}
        </div>
    </div>
  )
}
