import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import {Button, IconButton} from '@mui/material';

export const SendIconButton = () => {
  return (
    <>
        {/* <Button variant='contained' sx={{m:2}} endIcon={<SendIcon></SendIcon>}>Send</Button> */}
        
        <IconButton>
            <SendIcon></SendIcon>
        </IconButton>
    
    </>
  )
}
