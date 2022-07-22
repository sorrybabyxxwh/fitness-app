import React from 'react';
import { Stack, CircularProgress  } from '@mui/material';

const Loader = () => {
    return(
        <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
            <CircularProgress color="inherit" />
        </Stack>
    )
}
export default Loader
