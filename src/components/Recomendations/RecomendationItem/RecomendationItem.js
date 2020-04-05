import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const RecomendationItem = ( {video, clicked} ) => {
    return (
        <Paper style={{marginBottom: '20px', padding: '10px', cursor: 'pointer'}} onClick={() => clicked(video)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={video.snippet.thumbnails.medium.url} style={{width: '100%'}} alt={video.snippet.title}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">{video.snippet.title}</Typography>
                    <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                </Grid>
            </Grid>
        </Paper>        
    )
}

export default RecomendationItem;
