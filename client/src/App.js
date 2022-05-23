<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, formatMs } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
const App = () => {
    AppBar, Typography, Grow, Grid from '@material-ui/core';
    const classes = useStyles();
    const dispatch = useDispatch();
=======
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
>>>>>>> 95d5cb28359b47a1d158347c7201a2faa47daa19

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;