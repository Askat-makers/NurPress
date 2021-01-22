import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsByCategoryPageBody from '../components/NewsByCategoryComponents/NewsByCategoryPageBody';
import { newsContext } from '../contexts/NewsContext';

const NewsByCategoryPage = props => {
  // для скрола вверх
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { getNewsByCategory, newsByCategory, getNews, news } = useContext(newsContext)
  useEffect(() => {
    getNewsByCategory(props.match.params.category)
    getNews()
  }, [props.match.params.category])

  return (
    <>
      <NewsByCategoryPageBody />
    </>
  );
};

export default NewsByCategoryPage;