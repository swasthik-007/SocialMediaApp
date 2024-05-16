import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardlist/PostcardList';
import UserList from '../UserList/UserList'

export default function MainContainer() {
  return (
    <Box container  sx={{mt:'3rem' }}>
      <Grid container alignItems={'start'} justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid>
          {/* {users } */}
         <UserList />
        </Grid>
        <Grid 
        containers
        alignItems={'center'} 
        justifyContent={'center'} 
        direction={'column'}   
        md={8}>
          {/* {Posts} */}
       <PostCardList />
       
        </Grid>
       
      </Grid>
    </Box>
  );
}