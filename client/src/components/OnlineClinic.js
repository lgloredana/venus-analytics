import { Button, makeStyles } from "@material-ui/core";
import { Paper, Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles(theme => ({
  container:{
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const OnlineClinic = () => {
  const classes = useStyles();
  return ( 
  <Paper className={classes.container}>
    <Typography variant="h4">
      Acne Online Clinic 
    </Typography>
    <p></p>
    <Typography variant="h6">
      Get convenient access to prescription-only medicines to help treat mild or moderate acne without having to visit your doctor*.
    </Typography>
    <p></p>
    <Typography variant="h6"> <b>Benefits of using the Acne Online Clinic</b></Typography>
    <ul>
      <li>
        Simple: access acne treatment without having to visit your doctor*
      </li>
      <li>
        Convenient: complete the online questionnaire at a time and place to suit you
      </li>
      <li>
        Delivered your way: choose from a range of home delivery options, including next day** or collect from store
      </li>
    </ul>
    <Button variant="contained" color="primary">Discover acne treatments</Button>
    <p></p>

    <Typography variant="h6"> <b> Who can use this clinic?</b></Typography>
    <Typography variant="body2">
          Our online clinic may be able to help those aged between 16 and 65 who have mild or moderate acne.
    </Typography>
    <Button variant="contained" color="primary">Get your acne under control </Button> 
    <p></p>

    <Typography variant="h6"> <b> Prices start from just £16</b></Typography>
    <Button variant="contained" color="primary">Sign up</Button> 
    <p></p>
  </Paper>
  );
} 
export default OnlineClinic;