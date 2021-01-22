import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import PopulationAndEconomics from '../PopulationAndEconomics';

const DetailsSection1 = () => {

  const { newsDetails, getNewsByCategory, newsByCategory, getNews, news } = useContext(newsContext)
  const history = useHistory()
  // console.log(newsDetails)
  useEffect(() => {
    getNews()
  }, [])

  return (
    <>
      {newsDetails ? (
        <>
          <div class="container">
            <div class="row" id="content-wrapper">
              <div class="col-sm-8 col-xs-12">
                <div itemscope="" itemtype="http://schema.org/NewsArticle" itemid="https://24.kg/obschestvo/180523_uchitelya_shkolyi_karakola_prosyat_ministra_obrazovaniya_vernut_uvolennogo_direktora/">
                  <div class="row">
                    <div itemprop="articleSection" class="col-xs-4 newsCat"> <a href="https://24.kg/obschestvo/"> {newsDetails.category.map(item => item.title_category)} </a>
                    </div>
                    <div class="col-xs-8 text-right newsDate hidden-xs"><span itemprop="datePublished" content="2021-01-20\">10:14, 20 января 2021</span>, Бишкек - <span itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization"><span itemprop="name">24.kg</span>
                      <span itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                      </span>
                    </span>, <span itemprop="author" itemscope="" itemtype="http://schema.org/Person"><span itemprop="name"
                      class="text-nowrap">Руслан ХАРИЗОВ</span></span>
                    </div>
                  </div>
                  <h1 itemprop="name" class="newsTitle">{newsDetails.title_post}</h1>
                  <div class="row">
                    <div class="col-xs-12 newsDate hidden-sm hidden-md hidden-lg"><span itemprop="datePublished" content="2021-01-20\">10:14, 20 января 2021</span>, Бишкек - <span itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization"><span itemprop="name">24.kg</span>
                      <span itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                      </span>
                    </span>, <span itemprop="author" itemscope="" itemtype="http://schema.org/Person"><span itemprop="name"
                      class="text-nowrap">Руслан ХАРИЗОВ</span></span>
                    </div>
                  </div> <span itemprop="image" itemscope="" itemtype="http://schema.org/ImageObject">
                  </span>
                  <noindex>
                    <div class="row hidden-print">
                      <div class="col-xs-12 social social-links"> <a rel="nofollow" target="_blank" href="https://vk.com/share.php?url=https://24.kg/obschestvo/180523/"><i class="fa fa-vk"
                        aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://twitter.com/intent/tweet?text=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0&amp;url=https://24.kg/obschestvo/180523/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://www.facebook.com/dialog/feed?app_id=942470665830749&amp;redirect_uri=https://24.kg/obschestvo/180523/&amp;link=https://24.kg/obschestvo/180523/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st.comments=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0&amp;st._surl=https://24.kg/obschestvo/180523/"><i class="fa fa-odnoklassniki" aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://telegram.me/share/url?url=https://24.kg/obschestvo/180523/&amp;text=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0"><i class="fa fa-telegram" aria-hidden="true"></i></a> <a rel="nofollow" target="_blank" href="https://wa.me/?text=https://24.kg/obschestvo/180523/"><i class="fa fa-whatsapp"
                          aria-hidden="true"></i></a> </div>
                    </div>
                  </noindex>
                  <div class="cont" itemprop="articleBody">
                    <div class="poTeme">
                      <div class="title">Читайте по&nbsp;теме</div>
                      <div class="one"><a href="https://24.kg/obschestvo/180255_vozvraschenie_vnbspshkolu_nadolgonbspli/">Возвращение
                  в&nbsp;школу. Надолго&nbsp;ли? </a></div>
                    </div>
                    <p>{newsDetails.description}</p>
                  </div>
                  <noindex>
                    <div class="row hidden-print">
                      <div class="col-xs-12 social social-links"> <a rel="nofollow" target="_blank" href="https://vk.com/share.php?url=https://24.kg/obschestvo/180523/"><i class="fa fa-vk"
                        aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://twitter.com/intent/tweet?text=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0&amp;url=https://24.kg/obschestvo/180523/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://www.facebook.com/dialog/feed?app_id=942470665830749&amp;redirect_uri=https://24.kg/obschestvo/180523/&amp;link=https://24.kg/obschestvo/180523/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st.comments=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0&amp;st._surl=https://24.kg/obschestvo/180523/"><i class="fa fa-odnoklassniki" aria-hidden="true"></i></a>
                        <a rel="nofollow" target="_blank" href="https://telegram.me/share/url?url=https://24.kg/obschestvo/180523/&amp;text=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D1%8B%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D1%8F%D1%82%20%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%83%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0"><i class="fa fa-telegram" aria-hidden="true"></i></a> <a rel="nofollow" target="_blank" href="https://wa.me/?text=https://24.kg/obschestvo/180523/"><i class="fa fa-whatsapp"
                          aria-hidden="true"></i></a> </div>
                    </div>
                  </noindex>
                  <div class="row mgb30 hidden-print">
                    <div class="col-xs-12 col-sm-8 newsLink">Ссылка: <span id="article-link">https://localhost:3000{history.location.pathname}</span> <a href="javascript:;" class="clipboard" data-clipboard-target="#article-link" data-title="Ссылка скопирована" style={{ fontSize: 13 }} data-original-title=""
                      title=""><i class="fa fa-clipboard"></i></a> <br /> просмотров: 410 </div>
                    <div class="col-xs-12 col-sm-4 text-right newsPrintLink"> <a href="javascript:window.print();"><i
                      class="fa fa-print" aria-hidden="true"></i> Версия для печати </a> </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div id="19_w0" class="mgb40 hidden-print" data-ox-phs="{&quot;50&quot;:{&quot;min&quot;:1200},&quot;93&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;94&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;95&quot;:{&quot;max&quot;:767}}" style={{ display: "none" }}></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div id="19_w1" class="mgb40 hidden-print" data-ox-phs="{&quot;141&quot;:{&quot;min&quot;:1200},&quot;142&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;143&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;144&quot;:{&quot;max&quot;:767}}"
                      style={{ display: "none" }}></div>
                  </div>
                </div>
                <div class="row lineNews mgb40 hidden-print">
                  <div class="col-xs-12">
                    <div class="lineTitle"> Материалы по теме
                            <div class="line" style={{ marginBottom: 10 }}></div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="one">
                      <div class="title"> <a data-pjax="0" href="/">
                        <span>САЛАМ</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <div id="19_w2" class="mgb20 hidden-print" data-ox-phs="{&quot;96&quot;:{&quot;min&quot;:1200},&quot;97&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;98&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;99&quot;:{&quot;max&quot;:767}}" style={{ display: "none" }}></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <div id="19_w3" class="mgb20 hidden-print" data-ox-phs="{&quot;100&quot;:{&quot;min&quot;:1200},&quot;101&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;102&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;103&quot;:{&quot;max&quot;:767}}"
                      style={{ display: "none" }}></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 hidden-xs hidden-print">
                <div id="19_w4" class="mgb40 hidden-print" data-ox-phs="{&quot;47&quot;:{&quot;min&quot;:1200},&quot;84&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;85&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;86&quot;:{&quot;max&quot;:767}}"><iframe src="./Учителя школы Каракола просят министра образования вернуть уволенного директора » Общество » www.24.kg - КЫРГЫЗСТАН_files/afr(1).html" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
                </div>
                <div id="19_w5" class="mgb40 hidden-print" data-ox-phs="{&quot;48&quot;:{&quot;min&quot;:1200},&quot;87&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;88&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;89&quot;:{&quot;max&quot;:767}}" style={{ display: "none" }}></div>
                <div class="centerra">
                  <div class="row mgb20">
                    <div class="col-md-7"> Стоимость акций Центерры на бирже в Торонто (TSX)<br /> на 20.01.2021 </div>
                    <div class="col-md-5 centerra-value">
                      <div class="usd">USD 11,22 <img src="./Учителя школы Каракола просят министра образования вернуть уволенного директора » Общество » www.24.kg - КЫРГЫЗСТАН_files/down.gif" alt="" title="" /> </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-7">
                      <div class="reserv">Золотой резерв КР</div>
                      <div class="price_text">Стоимость акций КР в "Центерре"</div>
                    </div>
                    <div class="col-md-5 centerra-value">
                      <div class="price">$868&nbsp;528&nbsp;650</div>
                    </div>
                  </div>
                </div>
                <div id="scrollable-banners-sticky-wrapper" class="sticky-wrapper" style={{ height: 0 }}>
                  <div id="scrollable-banners" style={{ bottom: 0, width: 360 }}>
                    <div id="19_w6" class="mgb40 hidden-print" data-ox-phs="{&quot;49&quot;:{&quot;min&quot;:1200},&quot;90&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;91&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;92&quot;:{&quot;max&quot;:767}}" style={{ display: "none" }}></div>
                    <div id="19_w7" class="mgb40 hidden-print" data-ox-phs="{&quot;137&quot;:{&quot;min&quot;:1200},&quot;138&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;139&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;140&quot;:{&quot;max&quot;:767}}"
                      style={{ display: "none" }}></div>
                  </div>
                </div>
              </div>
            </div>
            {news ? (
              <PopulationAndEconomics newsArr={news.results.slice(-4)} />
            ) : (null)}
          </div>
          <div id="css-loaded"></div>
        </>
      ) : (null)}
      {/* </div> */}
    </>
  );
};

export default DetailsSection1;