import React, { useEffect } from 'react'
import { TodoListWithSet, TodoListEntryI } from './App'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export const ToDoList: React.FC<TodoListWithSet> = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // const handleChange = (panel:String) => (event:React.ChangeEvent<{}> , isExpanded:boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    // };



    const set = props.setToDoList;
    useEffect(() => {
        set([{
            priority: 1,
            dateAdded: new Date(),
            title: "title1"
        }, {
            priority: 5,
            dateAdded: new Date(),
            title: "title2",
            description: "desc2",
            dueTo: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        }
        ] as TodoListEntryI[])
    }, [set])

    props.todoList[0].title = "titleChanged";

    const ToDoListRender = props.todoList.map((elem, i) => {
        return (
            <ExpansionPanel >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{elem.title}</Typography>
                    <Typography className={classes.secondaryHeading}>{elem.priority}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {elem.description}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    })



    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                {ToDoListRender}
            </div>
        </Container>

    );
}










