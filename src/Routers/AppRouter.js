import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Footer } from '../components/ui/Footer';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};
