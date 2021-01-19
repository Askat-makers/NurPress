import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './container/HomePage';
import NewsDetailsPage from './container/NewsDetailsPage';
import NewsContextProvider from './contexts/NewsContext';

const Routes = () => {
  return (
    <BrowserRouter>
      <NewsContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news-detail/:id" component={NewsDetailsPage} />
        </Switch>
      </NewsContextProvider>
    </BrowserRouter>
  );
};

export default Routes;