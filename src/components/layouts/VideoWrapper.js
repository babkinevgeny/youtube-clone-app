import React from 'react';
import { Grid } from '@material-ui/core';
import { Player, Info } from '../../components';

const VideoWrapper = ( {video} ) => {
    if ( !video ) {
        return <div>Loading...</div>
    }

    const videoURL =  `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Grid container xs={8}>
            <Player videoURL={videoURL}/>
            <Info video={video}/>
        </Grid>
    )
}

export default VideoWrapper;
