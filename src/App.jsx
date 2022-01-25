import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './assets/theme';
import { routes } from './core';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './screens/Home';
import './App.css';


function App() {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <div className={classes.root}>
          <Switch>
            <Route exact path={routes.index}>
              <Home/>
            </Route>
            <Redirect to={routes.index} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 99,
    [theme.breakpoints.down('sm')]:{
      paddingTop: 80
    }
  },
}))

export default App;
