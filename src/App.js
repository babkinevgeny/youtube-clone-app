import React, { Component } from 'react';
import { SearchBar, Player, Info, Recomendations } from './components';
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

    render() {
        return (
            <>
                <SearchBar submitHandler={this.submitHandler}/>
                <Player />
                <Info />
                <Recomendations />
            </>
        )
    }
}

export default App;
