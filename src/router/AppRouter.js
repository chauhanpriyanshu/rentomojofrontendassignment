import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from '../components/TopNav';
import PageNotFound from '../components/PageNotFound';
import ShowUsers from '../components/ShowUsers';
import UserPosts from '../components/UserPosts';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <TopNav />
        <Switch>
          <Route path="/" component={ShowUsers} exact={true} />
          <Route path="/posts" component={UserPosts} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;