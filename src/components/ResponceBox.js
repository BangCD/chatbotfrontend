import React,{useState} from 'react'
import "./ResponceBox.css"

export const ResponceBox = (props) => {
    const [postContent,setPostContent]=useState('Answer..')
    
    // setPostContent(props.SearchReturn)
    
  return (
    <div className='Responce-box-wrapper'>
        {/* <h2>{props.dataParentToChild}</h2> */}
        <textarea 
        id='text-area'
        value={props.dataParentToChild} 
        readOnly={true} 
        rows={4} 
        cols={40}>

        </textarea>


    </div>
  )
}


