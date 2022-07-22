import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/icons/icons8-gym-100.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#ABD5FFFF'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
        <Stack direction='row' alignItems='center' gap='15px' fontSize="21px">
          <img src={Logo} alt='logo' width='50px' height='50px'/>
          <Typography variant='h5' mt='10px'>
              Fitness For You
          </Typography>
        </Stack>
        <Typography variant='h5' pb='40px' mt='20px' >
         <a href='https://github.com/sorrybabyxxwh/fitness-app' target='_blank' style={{ textDecoration: 'none', color: 'black'}} className='openSource'>Open-source</a> code by Alisa Velyka
        </Typography>

      </Stack>
    </Box>
  )
}

export default Footer
