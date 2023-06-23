import React,{useState } from 'react'
import {FaSearch} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
import "./SearchBar.css"



export const SearchBar = () => {


  const [val,setVal]=useState('Hello there Default')

  const change=event=>{
    const newValue = event.target.value
    setVal(newValue)
  }
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'></FaSearch>
      <input placeholder='Type to search ...' value={val} onChange={change}></input>
      <div>
        
      <FaLocationArrow id='FaLocationArrow'></FaLocationArrow>
        <button id='input-button' startIcon={<FaLocationArrow id='FaLocationArrow'></FaLocationArrow>} >Click</button></div>
    </div>
  )
}
