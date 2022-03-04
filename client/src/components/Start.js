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
          <Grid  item   >
            <Card className={classes.card} sx={{ minWidth: 275 }}>
                <CardActionArea onClick={(event) => {navigate("/onlineClinic");}}>
                  <CardHeader
                    title="Boots Acne Online Clinic "
                  />
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image="https://www.thedermatologyclinic.london/wp-content/uploads/2018/07/patient-hub-02-large.jpg"
                    alt="online clinic"
                  />
                </CardActionArea>
              </Card>
          </Grid>
          <Grid item   >
            <Card className={classes.card}  sx={{ minWidth: 275 }}>
              <CardActionArea onClick={(event) => {navigate("/howitworks");}}>
                <CardHeader
                  title="How the online clinic works"
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-online-doctor-consultation-image_2248276.jpg"
                  alt="online clinic"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item  >
          <Card className={classes.card}  sx={{ minWidth: 275 }}>
              <CardActionArea onClick={(event) => {navigate("/treatment");}}>
                <CardHeader
                  title="Acne treatment options"
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://images.everydayhealth.com/images/reasons-you-may-need-to-change-your-psoriatic-arthritis-treatment-1440x810.jpg"
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