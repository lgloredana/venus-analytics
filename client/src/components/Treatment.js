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
}));

const Treatment = () => {
  const classes = useStyles();
  return ( 
    <Paper className={classes.container}>
      <Typography variant="h4">
      Acne treatment options
      </Typography>
  <p></p>
      <Typography variant="h6">
        Differin - Adapalene
      </Typography>
      <img className={classes.img} 
       src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/Differin-Acne-Treatment-Gel.png?w=315&h=840 "/>
      <Typography variant="body1">
          Helps to treat: Blackheads, whiteheads & a few papules & pustules<br/>
          How to use: Apply once a day, in the evening<br/>
          Price: £28.00 <br/>
      </Typography>
      <Button variant="contained" color="primary">View Details</Button>

  <p></p>
      <Typography variant="h6">
      Epiduo
      </Typography>
      <img className={classes.img} 
      src="https://www.simplymedsonline.co.uk/storage/products/3221/images/product-18601608431630615558.png "/>
      <Typography variant="body1">
        Helps to treat: Blackheads & whiteheads. Effectively treats papules & pustules<br/>
        How to use: Apply once a day, in the evening<br/>
        Price: £38.00<br/>
      </Typography>
      <Button variant="contained" color="primary">View Details</Button>

  <p></p>
      <Typography variant="h6">
        Skinoren
      </Typography>
      <img className={classes.img} 
      src="https://cdn.shopify.com/s/files/1/2708/3552/products/Skinoren_Acne_Cream_30g_800x.png?v=1521068625"/>
      <Typography variant="body1">
        Helps to treat: Blackheads, whiteheads & a few papules & pustules. Often used as a second choice
         option after trying Differin or Epiduo<br/>
        How to use: Apply twice a day, once in the morning and once in the evening<br/>
        Price: £16.00<br/>
      </Typography>
      <Button variant="contained" color="primary">View Details</Button>

      <p></p>
      <Button variant="contained" color="secondary">View All Treatment Options</Button>
      <p></p>
      <p></p>
    </Paper>
  );
} 
export default Treatment;