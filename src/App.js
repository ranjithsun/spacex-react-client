import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import LaunchPadDetails from './components/LaunchPadDetailComponents/LaunchPadDetails';
import UserDetail from './components/UserDetailComponent/UserDetail';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Setup Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container maxWidth="md" className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>SpaceX Assignment</Typography>
              <Button to="/user_details" component={RouterLink} color="inherit">Users</Button>
              <Button to="/launchpad_details" component={RouterLink} color="inherit">Launchpads</Button>
            </Toolbar>
          </AppBar>
          <section>
            <div>
              <div className="main">
                <Switch>
                  <Route path="/user_details">
                    <UserDetail />
                  </Route>
                  <Route path="/launchpad_details">
                    <LaunchPadDetails/>
                  </Route>
                  <Route path="/">
                    <UserDetail/>
                  </Route>
                </Switch>
              </div>
            </div>
          </section>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
