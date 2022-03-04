import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Benefits from "./Benefits";
import CovidTesting from "./CovidTesting";
import Dashboard from "./Dashboard";
import FaceMask from "./FaceMask";
import MothersDay from "./MothersDay";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // width: '300px',
  },
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    height: '90vh',
  },
  media:{
    height: '100px',
  }
}));
const App = () => {
  const classes = useStyles();
  return  (
  <Paper className={classes.paper} elevation={3}>
      <CssBaseline />
      <Container className={classes.container}>
        <h1>Hackathon Analitics!</h1>
        <Grid container spacing={3} direction="row" xs="4" justifyContent="center" aligneItems="center">
          <Grid item>
            <Card sx={{ minWidth: 275 }}>
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
          <Grid item >
            <Card sx={{ minWidth: 275 }}>
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
          <Grid item>
          <Card sx={{ minWidth: 275 }}>
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
        
        <Routes>
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/mothersday" element={<MothersDay />} />
          <Route path="/covidtesting" element={<CovidTesting />} />
          <Route path="/facemask" element={<FaceMask />} />
          <Route path="/facemask" element={<Dashboard />} />
        </Routes>
      </Container>
  </Paper>
  )};

export default App;