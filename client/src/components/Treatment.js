import { makeStyles, Typography } from "@material-ui/core";
import { Paper } from "@mui/material";
import React from "react";
const useStyles = makeStyles(theme => ({
  container:{
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const Treatment = () => {
  const classes = useStyles();
  return ( 
    <Paper className={classes.container}>
      <Typography variant="h4">
         Treatment
      </Typography>
    </Paper>
  );
} 
export default Treatment;