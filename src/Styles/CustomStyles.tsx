import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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