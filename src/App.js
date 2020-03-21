import React, { Component } from 'react';

import { SearchBar, Player, Info, Recomendations } from './components';

class App extends Component {
    render() {
        return (
            <>
                <SearchBar />
                <Player />
                <Info />
                <Recomendations />
            </>
        )
    }
}

export default App;
