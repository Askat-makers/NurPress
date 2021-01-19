import React, { useContext, useEffect } from 'react';
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
            <div className="lineTitle"> Бизнес <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row blockNews">
          <div className="row">
            {economicsNews.map(item => (
              <div key={item.id} className="col-sm-3 col-xs-6 "> <a
                href="/biznes_info/180332_vyigodnyie_pokupki_onlayn_MegaCom_zapuskaet_sobstvennyiy_marketpleys_MegaShop/"
                className="title"> <img src={item.post_image} alt="Выгодные покупки онлайн: MegaCom запускает собственный маркетплейс MegaShop" /> <span>{item.title_post}</span> </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;