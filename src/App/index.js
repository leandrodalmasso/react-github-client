// Dependencies
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import HeaderNavbar from '../components/HeaderNavbar';
import Footer from '../components/Footer';
import Home from './Home';
import Users from './Users';
import Popular from './Popular';
import Search from './Search';
import ErrorPage from './ErrorPage';

// Styles
import './styles.scss';

function App() {
  return (
    <div className="app">
      <HeaderNavbar />
      <main className="app-main">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route component={Home} path="/home" />
          <Route component={Users} path="/users" />
          <Route component={Popular} path="/popular" />
          <Route component={Search} path="/search" />
          <Route component={ErrorPage} path="*" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;