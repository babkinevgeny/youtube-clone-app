import React, { useState } from 'react';
import { SearchBar, Recomendations } from './components';
import VideoWrapper from './components/layouts/VideoWrapper';
import { Grid, Container } from '@material-ui/core';
import youtube from './api/youtube';

const App = () => {
    const [ videos, setVideos ] = useState([]);
    const [ currentVideo, setCurrentVideo ] = useState(null);

    const getVideosHandler = async (searchValue) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                q: searchValue,
                maxResults: 5,
                key: 'AIzaSyAYZcOWZNe_Xa9U991MR0NRsdefWmCItC8'
            }
        });

        setVideos(response.data.items);
        setCurrentVideo(response.data.items[0]);
    }

    return (
        <Container fluid>
            <SearchBar getVideosHandler={getVideosHandler}/>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <VideoWrapper video={currentVideo}/>
                </Grid>
                <Grid item xs={4} >
                    <Recomendations videos={videos} recomendationClickHandler={setCurrentVideo}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;
