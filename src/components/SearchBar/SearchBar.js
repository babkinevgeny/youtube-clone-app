//import React from 'react';
import React, { useState } from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';


const SearchBar = ({ getVideosHandler }) => {
    const [ searchValue, setSearchValue ] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        getVideosHandler(searchValue);
    }

    const searchHandler = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper style={{padding: '10px', marginBottom: '20px'}}>
                    <form onSubmit={(event) => submitHandler(event)}>
                        <TextField 
                            placeholder="Type what you want to look for" 
                            onChange={(event) => searchHandler(event)} 
                            label="Search" 
                            style={{width: '100%'}}/>
                    </form> 
                </Paper>
            </Grid>
        </Grid>
    )
};

export default SearchBar;


