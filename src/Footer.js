import React from 'react'
import { PlayCircleOutline, PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { SkipPrevious } from '@mui/icons-material';
import { SkipNext } from '@mui/icons-material';
import { Shuffle } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import './footer.css'
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className='footer__albumLogo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
        <div className='footer__songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer__center'>
        <Shuffle className='footer__green'/>
        <SkipPrevious className='footer__icon' />
        <PlayCircleOutline fontSize='large' className='footer__icon' />
        <SkipNext className="footer__icon"/>
        <Repeat className='footer__green' />
        
      </div>
      <div className='footer__right'>
        <Grid container spacing={2} >
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
