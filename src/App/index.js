// Dependencies
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Users from './Users';
import Popular from './Popular';
import TopTen from './TopTen';
import ErrorPage from './ErrorPage';

// Styles
import './index.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route component={Home} path="/home" />
          <Route component={Users} path="/users" />
          <Route component={Popular} path="/popular" />
          <Route component={TopTen} path="/top-ten" />
          <Route component={ErrorPage} path="*" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;