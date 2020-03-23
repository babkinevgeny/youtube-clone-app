import React from 'react';
import { Player, Info } from '../../components';

const VideoWrapper = ( {video} ) => {
    if ( !video ) {
        return <div>Loading...</div>
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
