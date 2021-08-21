import React from 'react'
import { Box, FormControl, Select, MenuItem, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import alert from '../assets/images/alert.png';
import MultiCheckboxSelect from './MultiCheckboxSelect';
import { selectDesignType } from '../utils/constants'
import SingleCheckboxSelect from './SingleCheckboxSelect';

export const Form = () => {
    const classes = useStyles();

    return (
        <div>
            <Box display="flex" justifyContent="space-around" className={classes.formContainer}>
                <Box className={classes.image}>
                    <img src={alert} alt="alert" />
                </Box>
                <Box display="flex" flexDirection='column' className={classes.fieldsCol1}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select labelId="design" id="design-123" className={classes.inputField} defaultValue='RED'>
                            {selectDesignType.map(({ label, value }) => (
                                <MenuItem key={label} value={value}>{label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="text-area-box"
                            multiline
                            rows={4}
                            defaultValue="Text Area Box"
                            variant="outlined"
                            className={classes.inputField}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField className={classes.inputField} id="text-field" defaultValue="Text Field" variant="outlined" size="small" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField className={classes.inputField} id="expiration" defaultValue="Expiration - 1hr, 3hr" variant="outlined" size="small" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField className={classes.inputField} id="name" defaultValue="Name Alert" variant="outlined" size="small" />
                    </FormControl>
                </Box>
                <Box display="flex" flexDirection='column' className={classes.fieldsCol2}>
                    <FormControl>
                        <SingleCheckboxSelect />
                    </FormControl>
                    <FormControl>
                        <MultiCheckboxSelect />
                    </FormControl>
                </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Button className={classes.buttonStyle}>
                    Save
                </Button>
            </Box>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    image: {
        flexGrow: 2,
    },
    fieldsCol1: {
        flexGrow: 3,
    },
    fieldsCol2: {
        flexGrow: 3,
    },
    buttonStyle: {
        width: 772,
        background: '#e38120',
        height: 50,
        marginTop: 10,
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 20,
        border: '1px solid black',
        borderRadius: 7,
        '&:hover': {
            background: "#e38120",
        }
    },
    inputField: {
        border: '2px solid black',
        borderRadius: 7,
    },
}));