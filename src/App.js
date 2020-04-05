import React, { Component } from 'react';
import { SearchBar, Recomendations } from './components';
import VideoWrapper from './components/layouts/VideoWrapper';
import { Grid, Container } from '@material-ui/core';
import youtube from './api/youtube';

class App extends Component {
    state = {
        videos: [],
        currentVideo: null
    }

    submitHandler = async (searchValue) => {
        const responce = await youtube.get('search', {
            params: {
                part: 'snippet',
                q: searchValue,
                maxResults: 5,
                key: 'AIzaSyAYZcOWZNe_Xa9U991MR0NRsdefWmCItC8'
            }
        });
        this.setState({
            videos: responce.data.items,
            currentVideo: responce.data.items[0]
        });
    }

    recomendationClickHandler = (clickedVideo) => {
        this.setState({currentVideo: clickedVideo});
    }

    render() {
        const { currentVideo, videos } = this.state;
        return (
            <Container fluid>
                <SearchBar submitHandler={this.submitHandler}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <VideoWrapper video={currentVideo}/>
                    </Grid>
                    <Grid item xs={4} >
                        <Recomendations videos={videos} recomendationClickHandler={this.recomendationClickHandler}/>
                    </Grid>
                </Grid>
                
            </Container>
        )
    }
}

export default App;
