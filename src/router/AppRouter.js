import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from '../components/TopNav';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <TopNav />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;