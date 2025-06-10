import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import imge1 from '../../../../assets/p1.jpg'
import React from 'react'
import './Gallery.css'
import { PhotoData } from './PhotoData'

export default function Gallery() {
  return (
 <Box height={'auto'}paddingBottom={'2px'} width={'100%'} justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>

<center><h4 id='heading'>Our Gallery </h4></center>
<ImageList variant="masonry"  cols={2} rowHeight={'auto'} sx={{ width:'96%'}} >

{PhotoData.map((item,index)=> <ImageListItem key={item.photoname}>
  <img src={item.photoname}    loading="lazy" alt="" style={{ objectFit:''}} />
   </ImageListItem> )}
</ImageList>


 </Box>
  )
}
