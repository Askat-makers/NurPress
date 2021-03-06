import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomePageBody from '../components/HomePageComponents/HomePageBody';
import { newsContext } from '../contexts/NewsContext';

const HomePage = (props) => {
  // для скрола вверх
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const { getNews } = useContext(newsContext)
  useEffect(() => {
    getNews(props.history.location.search)
  }, [props.history.location.search])
  return (
    <div>
      <HomePageBody />
    </div>
  );
};

export default HomePage;