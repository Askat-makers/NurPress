import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';

const Section1 = () => {
  const { news } = useContext(newsContext)
  // const [state, setState] = useState(news)
  // useEffect(() => {
  //   setState(news)
  // }, [news])

  // ___________________________________________

  // let one = document.getElementsByTagName("p")


  console.log(news)

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div id="3b_w14" className="mgb20 hidden-print"
            data-ox-phs="{37:{min:1200},54:{min:992,max:1199},55:{min:768,max:991},56:{max:767}}">
            <div style={{ width: "100%", height: 51, backgroundColor: "gray", textAlign: "center" }}>Здесь может быть ваша реклама</div>
            {/* <iframe src="afr_2.php" width="100%" height="51" frameBorder="0" scrolling="no"></iframe> */}
          </div>
          <div id="3b_w15" className="mgb20 hidden-print"
            data-ox-phs="{112:{min:1200},113:{min:992,max:1199},114:{min:768,max:991},115:{max:767}}"
            style={{ display: "none" }}></div>
        </div>
      </div>
      <div className="row mgb40 hidden-print">
        <div className="col-sm-9 col-xs-12">
          <div className="mainNews">
            <div className="mainNewsOne">
              {news ? (
                news.results.map((item) => (
                  <div key={item.id} className="one active">
                    <Link to={`/news-detail${item.id}`} className="one-image">
                      <img src={item.post_image[0].image} alt="img"/>
                    </Link>
                    <div className="h2">
                      <Link to={`/news-detail${item.id}`}><span>{item.title_post}</span></Link>
                    </div>
                  </div>
                ))
              ) : (null)
              }
            </div>
            <div className="mainNewsList">
              {news ? (
                news.results.map((item) => (
                  <div key={item.id} className="hidden-xs">
                    <Link to={`/news-detail${item.id}`} className="active"><span>{item.title_post}</span></Link>
                  </div>
                ))
              ) : (null)
              }
            </div>
          </div>
        </div>
        <div className="col-sm-3 hidden-xs">
          <div id="3b_w5" className="banFixHeight"
            data-ox-phs="{38:{min:1200},57:{min:992,max:1199},58:{min:768,max:991},59:{max:767}}">
            <div style={{ width: "100%", height: 285 }}> <img src="https://ox.24.kg/www/images/45c854e87683ff1de86228631e2599fc.png" alt="img"/> </div>
            {/* <iframe src="afr_3.php" width="100%" height="285" frameBorder="0" scrolling="no"></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;