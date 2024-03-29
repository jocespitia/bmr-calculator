import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import RadioButtonField from './radiobuttonfield';
import WeightEntry from './weightentry';
import {CONSTANTS} from '../../constants/constants';


const styles = (theme) => ({
  control: {
    padding: '1em',
    minHeight: '5em',
  },
  root: {
    //background: '#A2A392',
    paddingTop: '1em',
    display: 'flex',
    margin: '0 auto',
    flexWrap: 'wrap',
    maxWidth: '400px',
    marginBottom: '1em'
  },
  group: {
    margin: 'auto',
  },
  button: {
    marginTop: '.75em',
  },
  logo: {
    marginTop: '2.5em',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '.5em',
    width: '75px'
  },
  width: {
    width: '100%',
  },
  sideMargin: {
    marginLeft: '1.5em',
    marginRight: '1.5em',
  },
  ico: {
    transform: 'scale(1.75)',
  }
});

class HomePage extends React.Component {
  /*
  this can be defaulted to have the radio button 'lit'
  */
  constructor (props) {
    super(props);
    this.state = { 
      gender: '',
      level: '',
      bodyWeight: '',
      height: '',
      units: '',
      totalCalories: '0'
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
    console.log(typeof value);

  };

  calculateScore = () => {

    if (this.state.weight === '') return;

    var weight = Number(this.state.bodyWeight);
    var height = Number(this.state.height);
    var age = Number(this.state.age);

    /* Check inputs to make sure they are valid */
    if (isNaN(weight)) return;

    /* Both calculations need to be done in kg, so we convert*/
    if (this.state.units === 'pounds') {
      weight = this.state.bodyWeight * 0.453592;
    };

    /**
     * BMR Calories
     */
    var constants = CONSTANTS[this.state.gender][this.state.level];
    var bmr = constants[0] + (constants[1] * weight) + (constants[2] * height) - (constants[3] * age);

    bmr = Math.round(bmr*100)/100;
    let stringScore;
    if (bmr > 3900){
        stringScore = "u sure?";
      }
      else if (isNaN(bmr) || bmr < 0){
        stringScore = "0.05";
      } else {
        stringScore = bmr.toString();
      }


    this.setState({
      totalCalories: stringScore
    })
};

  render() {

    const { classes } = this.props;

    return (
      //here we control the displaying of our calculations

      <div className={classes.root}>

      
        <Paper
        className={classNames(classes.control, classes.sideMargin, classes.width)}>
         <Grid container spacing={24}>
        
          <Grid item xs={12}>
            <Typography align="center" variant="h6" color="secondary">
              {"Total Calories:"}
            </Typography>
            <Typography align="center" variant="h4" color="primary">
              {this.state.totalCalories}
            </Typography>
          </Grid>

          </Grid>
      
        </Paper>

        <RadioButtonField
        handleChange={this.handleChange}
        gender={this.state.gender}
        level={this.state.level}
        units={this.state.units} />

        <WeightEntry
        handleChange={this.handleChange}
        bodyWeight={this.state.bodyWeight}
        height={this.state.height}
        age={this.state.age} />

        <Button variant="contained"
        size="large"
        color="primary"
        className={classNames(classes.button, classes.sideMargin, classes.width)}
        onClick={()=>{
          this.calculateScore();
          }} >
          Calculate
        </Button>

      </div>
    )
  }
}

HomePage.propTypes = {
  handleChange: PropTypes.func,
  calculateScore: PropTypes.func,
};

export default withStyles(styles)(HomePage);