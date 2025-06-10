import React from 'react'
import {Box, Button, Typography, useMediaQuery, useTheme} from '@mui/material'
import { Facultydata } from './Fuculty-data'
import { Link } from 'react-router-dom'

export default function Fculty() {

return (
<>
<center><h4 id='heading'>Our Faculties </h4></center>
 <Box width={'100%'} height={''} flexWrap={{xs:'wrap',md:'wrap'}} display={{xs:'flex',md:'flex'}} 
justifyContent={{xs:'center' ,md:"center"}}
alignItems={{xs:'center' ,md:"center"}}
 flexDirection={  {xs:'column' ,md:'row'}} >


{ 
  Facultydata.map((item,index)=><Box height={'400px'} position={'relative'} minWidth={''}width={'400px'} padding={2} display={'flex'}  flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 

 <img  style={{borderRadius:'15px' , objectFit:'cover', position:'relative' ,scale:'.9', padding:'1px',boxShadow:'2px 1px 15px blue', overflow:'hidden'}} src={item.photo} alt="d" />
<Typography variant='h4'>{item.teacher}</Typography>

<Typography varient='caption' fontSize={'clamp(.2rem , 3vw, 1.5rem)'}>{item.description}</Typography>
<Typography varient='h4' fontWeight={'600'} fontSize={{xs:'20px-' , md:''}}>{item.role}</Typography>
<Link to={item.portfolio}><Button  variant='contained' size='small' color='inherit' >Portfolio</Button></Link>
</Box>

)
  
}

  
   </Box>

   </>
  )
}
