import { AppBar, Button, Container, CssBaseline, IconButton, Paper, Toolbar } from "@mui/material";
import React from "react";
import getEvent from "../utils/getEvents";
import postEvent from "../utils/postEvents";
import { Route, Routes, useNavigate } from "react-router-dom";
import OnlineClinic from "./OnlineClinic";
import CovidTesting from "./CovidTesting";
import Dashboard from "./Dashboard";
import FaceMask from "./FaceMask";
import MothersDay from "./MothersDay";
import ShowCharts from "./ShowCharts";

import { makeStyles } from '@material-ui/core/styles';
import Start from "./Start";
import { Typography } from "@material-ui/core";

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
  space:{
    width:"75%",
  },
  toolbar:{
    border: '1px solid black',
  },
  backButton:{
    alignItems:"right",
  }
  
}));
const App = () => {
  const classes = useStyles();
  const navigate  = useNavigate();

  return  (
<div>
      <CssBaseline />
      <Container className={classes.container}>
        <AppBar position="static">
         <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hackathon Analitics
          </Typography>
          <div className={classes.space}></div>
          <Button className={classes.backButton}  onClick={(event) => {navigate("/");}} color="inherit">Back</Button>
          </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="/onlineClinic" element={<OnlineClinic />} />
            <Route path="/mothersday" element={<MothersDay />} />
            <Route path="/covidtesting" element={<CovidTesting />} />
            <Route path="/facemask" element={<FaceMask />} />
            <Route path="/facemask" element={<Dashboard />} />
            <Route path="/charts" element={<ShowCharts />} />

        </Routes>
      </Container>
  </div>
  )};

export default App;