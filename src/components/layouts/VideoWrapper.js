import React from 'react';
import { Player, Info } from '../../components';
import { Typography } from '@material-ui/core';


const VideoWrapper = ( {video} ) => {
    if ( !video ) {
        return <Typography style={{color: 'gray'}}>There is nothing to show. Let's search something...</Typography>
    }

    const videoURL =  `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <>
            <Player videoURL={videoURL}/>
            <Info video={video}/>
        </>
    )
}

export default VideoWrapper;
