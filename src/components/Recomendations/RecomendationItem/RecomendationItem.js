import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const RecomendationItem = ( {video, clicked} ) => {
    return (
        <Grid item spacing={2} style={{cursor: 'pointer', marginBottom: '20px'}} onClick={() => clicked(video)}>
            <img src={video.snippet.thumbnails.medium.url}/>
            <Typography variant="subtitle2">{video.snippet.title}</Typography>
            <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
        </Grid>
    )
}

export default RecomendationItem;
