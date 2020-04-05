//import React from 'react';
import React, { Component } from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';

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
            <Grid container>
                <Grid item xs={12}>
                    <Paper style={{padding: '10px', marginBottom: '20px'}}>
                        <form onSubmit={(event) => this.submitHandler(event)}>
                            <TextField placeholder="Type what you want to look for" onChange={(event) => this.searchHandler(event)} label="Search" style={{width: '100%'}}/>
                        </form> 
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default SearchBar


