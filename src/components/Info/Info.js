import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';


const Info = ( {video} ) => {
    return (
        <Grid item spacing={2}>
            <Paper style={{padding: '10px'}}>
                <Typography variant="h6">{video.snippet.title}</Typography>
                <Typography variant="subtitle2" style={{margin: '10px 0', color: 'gray', fontWeight: 'light'}}>{video.snippet.description}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
            </Paper>
        </Grid>
    )
}

export default Info;
