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

const Howitworks = () => {
  const classes = useStyles();
  return ( 
    <Paper className={classes.container}>
      <Typography variant="h4">
         How the online clinic works
      </Typography>
    </Paper>
  );
} 
export default Howitworks;