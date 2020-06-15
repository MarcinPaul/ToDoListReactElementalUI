import React, { useState } from 'react'
import { TodoListWithSet } from './Interfaces/Interfaces'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FormControlLabel, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './Styles/CustomStyles';

export const ToDoList: React.FC<TodoListWithSet> = (props) => {

    const classes = useStyles();
    const [elementsStyle, setElementStyle] = useState(props.todoList.map((e) => false) as Array<boolean>);


    const changeStyle = (i: number) => {
        let newArr = [...elementsStyle];
        newArr[i] = !newArr[i];
        setElementStyle(newArr);
    }
    const handleDelete = (i: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let newArr = [...props.todoList];
        newArr.splice(i, 1);
        props.setToDoList(newArr);
    }
    const ToDoListRender = props.todoList.map((elem, i) => {
        let DueDateSaved = null
        if (elem.dueTo !== undefined) {
            DueDateSaved = <Typography className={classes.secondaryHeading}><b>Due date: </b>{elem.dueTo.toDateString()}
            </Typography>
        }
        return (
            <div key = {i} className={classes.column}>
                <ExpansionPanel className={classes.panel} key={i} >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id={"additional-actions1-header" + i.toString()}
                    >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => { event.stopPropagation(); changeStyle(i) }}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox />}
                            label=""
                        />
                        <Typography className={elementsStyle[i] ? classes.headingDashed : classes.heading}>{elem.title}</Typography>
                        <Typography className={classes.secondaryHeading} >{elem.priority}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {elem.description}
                        </Typography>
                        {DueDateSaved}

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton aria-label="delete" color="secondary" onClick={(e) => handleDelete(i, e)} style={{ height: 'fit-content' }} >
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>

        )
    })

    return (
        <div className={classes.root}>
            {ToDoListRender}
        </div>
    );
}










