import React from 'react';
import { Grid } from '@material-ui/core';

const Player = ( {video} ) => {
    if ( !video ) {
        return <div>Loading...</div>
    }

    const videoURL =  `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Grid spasing={2} xs={8} style={{marginBottom: '20px'}}>
            <iframe 
                width="100%" 
                height="100%" 
                src={videoURL}
                frameBorder="0" 
                allowFullScreen
                title="video from youtube"
                style={{minHeight: '450px'}}></iframe>
        </Grid>
    )
    
}

export default Player
