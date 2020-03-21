//import React from 'react';
import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

export class SearchBar extends Component {
    state = {
        searchValue: ''
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { submitHandler } = this.props;
        const { searchValue } = this.state;
        submitHandler(searchValue);
    }

    searchHandler = (event) => {
        this.setState({searchValue: event.target.value})
    }

    render() {
        return (
            <Paper>
            <form onSubmit={(event) => this.submitHandler(event)}>
                <TextField placeholder="Type what you want to look for" onChange={(event) => this.searchHandler(event)}/>
            </form> 
        </Paper>
        )
    }
}

export default SearchBar


