import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    "#root": {
      height: '100vh',
      display: 'flex'
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center"
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(5, 5, 5, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoBig: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    height: "100px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));
