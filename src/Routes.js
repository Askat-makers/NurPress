import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './container/HomePage';
import NewsByCategoryPage from './container/NewsByCategoryPage';
import NewsDetailsPage from './container/NewsDetailsPage';
import NewsContextProvider from './contexts/NewsContext';

const Routes = () => {
  return (
    <BrowserRouter>
      <NewsContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news-detail:id" component={NewsDetailsPage} />
          <Route exact path="/news-by-category/:category" component={NewsByCategoryPage} />
        </Switch>
      </NewsContextProvider>
    </BrowserRouter>
  );
};

export default Routes;