import { AppBar, Badge, Button, Container, CssBaseline, IconButton, Paper, Toolbar } from "@mui/material";
import React from "react";
import getEvent from "../utils/getEvents";
import postEvent from "../utils/postEvents";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import OnlineClinic from "./OnlineClinic";
import Dashboard from "./Dashboard";
import { makeStyles } from '@material-ui/core/styles';
import Start from "./Start";
import { Typography } from "@material-ui/core";
import Howitworks from "./Howitworks";
import Treatment from "./Treatment";

import ShowCharts from "./ShowCharts";

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
  },
  backButton:{
    alignItems:"right",
  }
  
}));
const App = () => {
  const classes = useStyles();
  const navigate  = useNavigate();
  const location = useLocation();
  return  (
<div>
      <CssBaseline />
      <Container className={classes.container}>
        <AppBar position="static">
         <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hackathon Analytics
          </Typography>
          <div className={classes.space}></div>
          <Button className={classes.backButton}  onClick={(event) => {navigate("/dashboard");}} color="inherit"> Analytics Dashboard</Button>
          <Button className={classes.backButton}  onClick={(event) => {navigate("/");}} color="inherit"> {location.pathname === '/' ? "": 'Back' }</Button>
          </Toolbar>
        </AppBar>
        <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/onlineClinic" element={<OnlineClinic />} />
         <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/charts" element={<ShowCharts />} />


        </Routes>
      </Container>
  </div>
  )};

export default App;