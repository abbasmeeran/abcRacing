import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import availableThemes from '../themes/themes';
import { withTranslation } from 'react-i18next';
import DriversPage from './drivers/DriversPage';
import Header from './header/header';
import RacesPage from './races/RacesPage';
import { PrivateRoute } from './common/PrivateRoute';
import LoginPage from './login/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import BookmarksPage from './bookmarks/BookmarksPage';

let theme;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateTheme();
  }

  getTheme() {
    return localStorage.getItem('i18nextLng') || 'en';
  }

  updateTheme() {
    theme = createMuiTheme(availableThemes[this.getTheme()]);
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline >
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Header />
              <main>
                <Switch>
                  <PrivateRoute exact path="/" component={DriversPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <PrivateRoute path="/drivers" component={DriversPage} />
                  <PrivateRoute path="/races" component={RacesPage} />
                  <PrivateRoute path="/bookmarks" component={BookmarksPage} />
                  <Redirect to="/" />
                </Switch>
              </main>
            </div>
            <ToastContainer autoClose={1000} hideProgressBar />
          </MuiThemeProvider>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default withTranslation()(App);
