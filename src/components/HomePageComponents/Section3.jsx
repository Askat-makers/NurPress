import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';

const Section3 = () => {
  const { getEconomicsNews, economicsNews } = useContext(newsContext)

  useEffect(() => {
    getEconomicsNews()
  }, [])

  return (
    <>
      <div className="hidden-print">
        <div className="row">
          <div className="col-xs-12">
            <div className="lineTitle"> Экономика <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row blockNews">
          <div className="row">
            {economicsNews ? (
              economicsNews.results.slice(-4).map(item => (
                <div key={item.id} className="col-sm-3 col-xs-6 ">
                  <Link to={`/news-detail${item.id}`} className="title">
                    <img src={item.post_image[0].image} alt="img" />
                    <span>{item.title_post}</span>
                  </Link>
                </div>
              ))
            ) : (null)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;