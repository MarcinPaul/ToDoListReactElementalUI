
import { TodoListWithSet, ITodoListEntry } from './Interfaces/Interfaces'
import React, { useState, ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Iinput} from './Interfaces/Interfaces'



export const AddToDoForm: React.FC<TodoListWithSet> = (props) => {

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
        let todo: ITodoListEntry = {
            dateAdded: new Date(),
            priority: inputFields["Priority"],
            dueTo: inputFields["DueTo"],
            description: inputFields["Description"],
            title: inputFields["Title"]
        }
        props.setToDoList([...props.todoList, todo])
    }
    return (
        <form noValidate autoComplete="off" >
            <Grid container style={{paddingTop:"10px"}}>
                <Grid style={{paddingRight:"10px"}}  item  xs={4}>
                    <TextField onChange={handleChange("Title")}  label="Title" variant="outlined" fullWidth />
                </Grid>
                <Grid   item xs={7}>
                    <TextField onChange={handleChange("Description")}  label="Description" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={3} style={{paddingRight:"10px"}}>
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
                <Grid item   xs={2} >
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

            </Grid>
            <div style={{textAlign:"left", paddingBottom:"10px"}}>
            <Button onClick={submitInputs} variant="contained" color="primary" >
                Add toDo
            </Button>
            </div>             
        </form >
    )
}