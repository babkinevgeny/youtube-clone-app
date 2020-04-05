import React from 'react';
import { Grid } from '@material-ui/core';

const Player = ( {videoURL} ) => {
    
    return (
        <Grid item xs={12}>
            <iframe 
                width="100%" 
                height="100%" 
                src={videoURL}
                frameBorder="0" 
                allowFullScreen
                title="video from youtube"
                style={{minHeight: '430px'}}></iframe>
        </Grid>
    )
    
}

export default Player
