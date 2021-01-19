import React, { useContext, useEffect } from 'react';
import HomePageBody from '../components/HomePageComponents/HomePageBody';
import { newsContext } from '../contexts/NewsContext';

const HomePage = () => {
  const {getNews} = useContext(newsContext)
  useEffect(() => {
    getNews()
  }, [])
  return (
    <div>
      <HomePageBody />
    </div>
  );
};

export default HomePage;