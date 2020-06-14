
import { TodoListWithSet, TodoListEntryI } from './App'
import React, { useEffect, useState, ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({

}));
//const [elementsStyle, setElementStyle] = useState([] as Array<boolean>);



export const AddToDoForm: React.FC<TodoListWithSet> = (props) => {

    interface Iinput {
        Title: String,
        Description: String,
        Priority: 1 | 2 | 3 | 4 | 5,
        DueTo: Date
    }
    const [inputFields, setInputFields] = useState({
        Title: "",
        Description: "",
        Priority: 1,
        DueTo: new Date()
    } as Iinput);

    const handleChange = (input: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ value: unknown }>) => {
        setInputFields({ ...inputFields, [input]: e.target.value })

    }

    const handleDateChange = (date: Date | null) => {
        setInputFields({ ...inputFields, DueTo: date ? date : new Date() })
    }

    const submitInputs = () => {
        let todo: TodoListEntryI = {
            dateAdded: new Date(),
            priority: inputFields["Priority"],
            dueTo: inputFields["DueTo"],
            description: inputFields["Description"],
            title: inputFields["Title"]
        }
        props.setToDoList([...props.todoList, todo])
    }
    const classes = useStyles();
    const values = { Title: "", Description: "", Priority: 1, DueTo: new Date() }
    return (
        <form noValidate autoComplete="off" >
            <Grid container spacing={3} style={{paddingTop:"10px"}}>
                <Grid item >
                    <TextField onChange={handleChange("Title")} id="outlined-basic" label="Title" variant="outlined" />
                </Grid>
                <Grid item >
                    <TextField onChange={handleChange("Description")} id="outlined-basic" label="Description" variant="outlined" />
                </Grid>
                <Grid item >
                    <FormControl style={{marginTop:"7px"}} >
                        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                        <Select
                            value={inputFields.Priority}
                            onChange={handleChange("Priority")}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{marginTop:"7px"}}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Due to"
                        value={inputFields.DueTo}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
            <div style={{textAlign:"center"}}>
            <Button onClick={submitInputs} variant="contained" color="primary" >
                Add toDo
            </Button>
            </div>

                
        </form >


    )
}