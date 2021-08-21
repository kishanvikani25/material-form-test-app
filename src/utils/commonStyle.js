import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4),
        border: '2px solid black',
        borderTop: 'none',
    },
    listBorder: {
        border: '2px solid black',
        borderTop: 'none',
    },
    listBorderAll: {
        border: '2px solid black',
    }
}));