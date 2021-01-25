import React, { useContext, useEffect, useState } from 'react';
import { newsContext } from '../../contexts/NewsContext';

const Section1 = () => {
  const { news } = useContext(newsContext)
  const [state, setState] = useState(news)
  useEffect(() => {
    setState(news)
  }, [news])

  // ___________________________________________
  
  // let one = document.getElementsByTagName("p")


  console.log(news)

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div id="3b_w14" className="mgb20 hidden-print"
            data-ox-phs="{&quot;37&quot;:{&quot;min&quot;:1200},&quot;54&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;55&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;56&quot;:{&quot;max&quot;:767}}">
            <div style={{ width: "100%", height: 51, backgroundColor: "gray", textAlign: "center" }}>Здесь может быть ваша реклама</div>
            {/* <iframe src="afr_2.php" width="100%" height="51" frameBorder="0" scrolling="no"></iframe> */}
          </div>
          <div id="3b_w15" className="mgb20 hidden-print"
            data-ox-phs="{&quot;112&quot;:{&quot;min&quot;:1200},&quot;113&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;114&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;115&quot;:{&quot;max&quot;:767}}"
            style={{ display: "none" }}></div>
        </div>
      </div>
      <div className="row mgb40 hidden-print">
        <div className="col-sm-9 col-xs-12">
          <div className="mainNews">
            <div className="mainNewsOne">
              {/* {state ? (
                <div key={state.results[state.results.length - 1].id} className="one active"> <a
                  href="/vlast/180326_vproekte_novoy_redaktsii_konstitutsii_tsenzuryi_nebudet_ona_zapreschena_/"
                  className="one-image"> <img src={state.results[state.results.length - 1].post_image} /> </a>
                  <div className="h2"> <a
                    href="#"><span>{state.results[state.results.length - 1].title_post}</span></a> </div>
                </div>
              ) : (
                null
              )} */}
              {news ? (
                news.results.map((item) => (
                  <div key={item.id} className="one active"> <a href="#askat"
                    className="one-image"> <img src={item.post_image[0].image} /> </a>
                    <div className="h2"> <a href="#"><span>{item.title_post}</span></a> </div>
                  </div>
                ))
              ) : (null)
              }
            </div>
            <div className="mainNewsList">
              {news ? (
                news.results.map((item) => (
                  <div key={item.id} className="hidden-xs"> <a
                    href="#"
                    className="active"><span>{item.title_post}</span></a>
                  </div>
                ))
              ) : (null)
              }
            </div>
          </div>
        </div>
        <div className="col-sm-3 hidden-xs">
          <div id="3b_w5" className="banFixHeight"
            data-ox-phs="{&quot;38&quot;:{&quot;min&quot;:1200},&quot;57&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;58&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;59&quot;:{&quot;max&quot;:767}}">
            <div style={{ width: "100%", height: 285 }}> <img src="https://ox.24.kg/www/images/45c854e87683ff1de86228631e2599fc.png" alt="" /> </div>
            {/* <iframe src="afr_3.php" width="100%" height="285" frameBorder="0" scrolling="no"></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;