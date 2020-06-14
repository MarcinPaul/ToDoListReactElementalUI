import React, { useEffect, useState } from 'react'
import { TodoListWithSet, TodoListEntryI } from './App'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FormControlLabel, Checkbox, Button, IconButton } from '@material-ui/core';
import { positions } from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        margin: 'auto',

    },
    headingDashed: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        margin: 'auto',
        textDecoration: 'line-through'

    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        margin: 'auto',
        textAlign: 'right',
        width: '100%'
    },
    column:{
        display:'flex',
        justifyContent:'space-between',
        paddingBottom:'5px',
    },
    panel:{
        width:'100%',
    }

}));

export const ToDoList: React.FC<TodoListWithSet> = (props) => {

    const classes = useStyles();

    // const handleChange = (panel:String) => (event:React.ChangeEvent<{}> , isExpanded:boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const [elementsStyle, setElementStyle] = useState([] as Array<boolean>);


    useEffect(() => {
        props.todoList.forEach(() => {
            setElementStyle([...elementsStyle, false])
        })
    }, [])


    const changeStyle = (i: number) => {
        let newArr = [...elementsStyle];
        newArr[i] = !newArr[i];
        setElementStyle(newArr);
    }
    const ToDoListRender = props.todoList.map((elem, i) => {
        // useState
        let DueDateSaved = null
        if (elem.dueTo !== undefined) {
            DueDateSaved = <Typography className={classes.secondaryHeading}><b>Due date: </b>{elem.dueTo.toDateString()}
            </Typography>
        }

    const handleDelete = (i:number,e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        let newArr = [...props.todoList];
        newArr.splice(i,1);
        props.setToDoList(newArr);
    }

        return (
            <div className={classes.column}> 
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
                <div style={{display:'flex', alignItems:'center'}}>
                <IconButton aria-label="delete" color="secondary" onClick={(e) => handleDelete(i,e)} style={{height:'fit-content'}} >
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










