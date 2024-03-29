
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { UNITS, GENDER, LEVEL } from '../../constants/constants'

const styles = (theme) => ({
  control: {
    padding: '1em',
    marginRight: '1.5em',
    marginLeft: '1.5em',
    width: '100%'
  },
  root: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    paddingTop: '0.5em',
    width: '100%'
  },
  formControl: {

  },
  group: {
    margin: 'auto',
  },
});

  

function RadioButtonField (props) {
    /*
    * constants will be dictated by the radio button component
    */

    const { classes, handleChange } = props;

    return (
    <div className={classes.root}>
        <Paper className={classes.control}>
        <Grid container spacing={5}>

            <Grid item xs={6}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Units</FormLabel>
                <RadioGroup
                aria-label="Units"
                name="units"
                value={props.units}
                onChange={handleChange}>
                {UNITS.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={props.gender}
                onChange={handleChange}
                >
                {GENDER.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value} 
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Exercise Level</FormLabel>
                <RadioGroup
                aria-label="Level"
                name="level"
                className={classes.group}
                value={props.level}
                onChange={handleChange}
                >
                {LEVEL.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

        </Grid>
        </Paper>    
    </div>
    );
}

export default withStyles(styles)(RadioButtonField);