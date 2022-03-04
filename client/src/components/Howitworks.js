import { Button, makeStyles, Typography } from "@material-ui/core";
import { Paper } from "@mui/material";
import React from "react";
const useStyles = makeStyles(theme => ({
  container:{
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img:{
    width: "30%",
  },
  button:{
    margin: theme.spacing(1),
  }
}));

const Howitworks = () => {
  const classes = useStyles();
  return ( 
    <Paper className={classes.container}>
      <Typography variant="h3">
         How the online clinic works
      </Typography>
      
<p></p>
      <Typography variant="h4">
       1 Step one
      </Typography>
      <img className={classes.img} 
      src="https://www.kyleads.com/wp-content/uploads/2019/09/Questionnaire--1200x720.png" />
      <Typography variant="body2">
        Complete a quick questionnaire which will be reviewed by a clinician
      </Typography>
      <Button className={classes.button} variant="contained" color="primary">Start online consultation</Button>

<p></p>
      <Typography variant="h4">
       2 Step two
      </Typography>
      <img className={classes.img} 
      src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/04/psoriatic-arthritis-treatment--650x428.jpg" />
      <Typography variant="body2">
      If the service is right for you, select one of the treatment options available
      </Typography>
      <Button className={classes.button} variant="contained" color="primary">Select your treatment</Button>

  <p></p>
    <Typography variant="h4">
     3 Step three
    </Typography>
    <img className={classes.img} 
    src="https://media.edgeprop.my/s3fs-public/styles/newsthumbnails/public/field/image/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160_0.jpg" />
    <Typography variant="body2">
     Have it delivered to your home or collect from store
    </Typography>
    <Button className={classes.button} variant="contained" color="primary">Get started</Button>
  </Paper>
  );
} 
export default Howitworks;