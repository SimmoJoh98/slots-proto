import React from 'react';
import './home-styles.scss';
import { Button } from '@mui/material';

function Home() {
  return (
    <div className='home-container'>
      <Button variant='contained'>
        SPIN
      </Button>
    </div>
  )
}

export default Home;