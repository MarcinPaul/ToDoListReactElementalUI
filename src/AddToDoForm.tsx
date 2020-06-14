
import { TodoListWithSet, TodoListEntryI } from './App'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
export const AddToDoForm: React.FC<TodoListWithSet> = (props) => {
    const classes = useStyles();
    return (

        <form className={classes.root} noValidate autoComplete="off" >

            <Grid container justify="space-around">
                <TextField id="outlined-basic" label="Title" variant="outlined" />
                <TextField id="outlined-basic" label="Description" variant="outlined" />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>


                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={() => { }}
                        onChange={() => { }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>


        </form>

    )
}