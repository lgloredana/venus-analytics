import {  Card, CardActionArea, CardMedia, Container, CssBaseline, Grid, Paper, CardHeader } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    height: '90vh',
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: '90vh',
    width: '100%',
  },
  card:{
    display: 'flex',
  },
  media:{
    height: '100px',
  }
}));
const Start = () => {
  const classes = useStyles();
  const navigate  = useNavigate();
  return (
    <div>
       <Grid className={classes.grid} container direction="row" spacing={3} xs="12" justifyContent="center" aligneItems="center">
          <Grid  item  xs={12} sm={6} md={3} >
            <Card className={classes.card} sx={{ minWidth: 275 }}>
                <CardActionArea onClick={(event) => {navigate("/onlineClinic");}}>
                  <CardHeader
                    title="Acne Online Clinic"
                    subheader="Get convenient access to prescription-only medicines to help treat mild or moderate acne without having to visit your doctor*"
                  />
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi-6qNnFnxmIzT2nSYTnn4XNo7O2ApmCDQdxQbNhZQNYUEnI5_0nHKLlHFx285BPABqQ&usqp=CAU"
                    alt="online clinic"
                  />
                </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}  >
            <Card className={classes.card}  sx={{ minWidth: 275 }}>
              <CardActionArea>
                <CardHeader
                  title="Acne Online Clinic"
                  subheader="Get convenient access to prescription-only medicines to help treat mild or moderate acne without having to visit your doctor*"
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi-6qNnFnxmIzT2nSYTnn4XNo7O2ApmCDQdxQbNhZQNYUEnI5_0nHKLlHFx285BPABqQ&usqp=CAU"
                  alt="online clinic"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
          <Card className={classes.card}  sx={{ minWidth: 275 }}>
              <CardActionArea>
                <CardHeader
                  title="Acne Online Clinic"
                  subheader="Get convenient access to prescription-only medicines to help treat mild or moderate acne without having to visit your doctor*"
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi-6qNnFnxmIzT2nSYTnn4XNo7O2ApmCDQdxQbNhZQNYUEnI5_0nHKLlHFx285BPABqQ&usqp=CAU"
                  alt="online clinic"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
    </div>
  );
}
export default Start;