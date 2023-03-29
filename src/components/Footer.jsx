import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          DONE BY <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/imran-tech12/web-app">IMRAN</a>
        </Typography>
      </Box>
  )
}

export default Footer