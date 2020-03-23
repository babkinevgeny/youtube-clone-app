import React from 'react';
import { Grid, Typography } from '@material-ui/core';


const Info = ( {video} ) => {
    return (
        <Grid spacing={2}>
            <Typography variant="h6">{video.snippet.title}</Typography>
            <Typography variant="subtitle2" style={{margin: '10px 0', color: 'gray', fontWeight: 'light'}}>{video.snippet.description}</Typography>
            <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        </Grid>
    )
}

export default Info;
