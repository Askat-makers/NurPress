import React, { useContext, useEffect, useState } from 'react';
import { newsContext } from '../contexts/NewsContext';
import nurpressLogo from '../img/nurpress-logo.png'

const Navbar = () => {

  const { getCurrency, currencies, getCategories, categories } = useContext(newsContext)
  const [date, setDate] = useState({})

  setInterval(() => {
    let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.getMonth()
    if (month == 0) {
      month = '01'
    }
    else if (month < 10) {
      month = `0${month}`
    }
    let seconds = newDate.getSeconds()
    let min = newDate.getMinutes()
    let hours = newDate.getHours()
    let year = newDate.getFullYear()
    let obj = {
      day,
      month,
      min,
      hours,
      year,
      seconds
    }
    setDate(obj)
  }, 1000);

  useEffect(() => {
    getCategories()
    getCurrency()
  }, [])

  return (
    <>
      <div className="topBanner hidden-print">
        <div className="container">
          <div id="3b_w8"
            data-ox-phs="{&quot;36&quot;:{&quot;min&quot;:1200},&quot;51&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;52&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;53&quot;:{&quot;max&quot;:767}}"
            style={{ display: 'none' }}></div>
        </div>
      </div>
      <div className="bottomBanner hidden-print" style={{ display: 'none' }}>
        <div className="container"> <a href="#" className="close-banner"><i className="fa fa-times-circle-o"></i></a>
          <div id="3b_w9"
            data-ox-phs="{&quot;133&quot;:{&quot;min&quot;:1200},&quot;134&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;135&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;136&quot;:{&quot;max&quot;:767}}"
            style={{ display: 'none' }}></div>
        </div>
      </div>
      <div className="side-banners hidden-print">
        <div className="side-banners-item side-banners-left" style={{ width: 40 }}>
          <div id="3b_w10"
            data-ox-phs="{&quot;129&quot;:{&quot;min&quot;:1200},&quot;130&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;131&quot;:{&quot;min&quot;:768,&quot;max&quot;:991}}"
            style={{ display: 'none' }}></div>
        </div>
        <div className="side-banners-item side-banners-right" style={{ width: 40 }}>
          <div id="3b_w11"
            data-ox-phs="{&quot;132&quot;:{&quot;min&quot;:1200},&quot;130&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;131&quot;:{&quot;min&quot;:768,&quot;max&quot;:991}}"
            style={{ display: 'none' }}></div>
        </div>
      </div>
      <header className="row hidden-print">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-5 logo"> <a href="/"> <img className="visible-lg visible-xs"
          src={nurpressLogo} alt="www.24.kg - КЫРГЫЗСТАН" /><img className="visible-md" src="img/logo-md.png"
            alt="www.24.kg - КЫРГЫЗСТАН" /><img className="visible-sm" src="img/logo-sm.png" alt="www.24.kg - КЫРГЫЗСТАН" />
        </a> </div>
        <div className="col-lg-2 col-md-2 col-sm-2 lang hidden-xs">
          <div> <a href="/kyrgyzcha/">Кыр</a> <a href="/english/">Eng</a> <a href="/archive/ru/" rel="nofollow">Архив</a>
          </div>
          <div><a href="/about/services.html">Наши услуги</a></div>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-4 hidden-xs socCont">
          <div className="social"> <a target="_blank" href="https://www.facebook.com/www.24.kg/" rel="nofollow"><i
            className="fa fa-facebook" aria-hidden="true"></i></a> <a target="_blank" href="https://twitter.com/_24_kg"
              rel="nofollow"><i className="fa fa-twitter" aria-hidden="true"></i></a> <a target="_blank"
                href="https://www.youtube.com/channel/UCkKzgNm1_pyPPHKigI75MoQ" rel="nofollow"><i className="fa fa-youtube-play"
                  aria-hidden="true"></i></a> <a target="_blank" href="https://ok.ru/ia24.kgkyr/topics"><i
                    className="fa fa-odnoklassniki" aria-hidden="true"></i></a> <a target="_blank"
                      href="https://www.instagram.com/24_kg/"><i className="fa fa-instagram" aria-hidden="true"></i></a> <a
                        target="_blank" href="https://t.me/news24kg/"><i className="fa fa-telegram" aria-hidden="true"></i></a> <a
                          target="_blank" href="https://wa.me/996555312024"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
          </div>
          <div className="search">
            <form id="w12" action="/poisk_po_sajtu/" method="get">
              <div className="input-group"> <span className="input-group-btn"> <button className="btn btn-default" type="submit"> <i
                className="fa fa-search" aria-hidden="true"></i> </button> </span>
                <input type="text" id="searchform-text" className="form-control" name="SearchForm[text]" placeholder="Поиск" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-7">
          <div className="lang hidden-lg hidden-md hidden-sm">
            <div> <a href="/kyrgyzcha/">Кыр</a> <a href="/english/">Eng</a> <a href="/archive/ru/"
              rel="nofollow">Архив</a> </div>
            <div><a href="/about/services.html">Наши услуги</a></div>
          </div>
          <div className="row">
            <div className="col-xs-7 col-sm-7 col-md-8 pdr-0">
              <div className="weather"> <span className="hidden-xs"> {date.year}.{date.month}.{date.day}  <span style={{ textTransform: "capitalize" }}>
              </span> </span> <span className="hidden-sm hidden-md hidden-lg"><span
                style={{ textTransform: "capitalize" }}> пн. </span> </span><br /> <span
                  className="hidden-sm hidden-xs">Бишкекское время</span> <span className="hidden-md hidden-lg">Время</span> {date.hours}.{date.min}.{date.seconds}
              </div>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-4 pdl-0 text-right">
              <div className="currency " id="currencies" data-original-title >
                {currencies.map(item => (
                  <div key={item.id}>
                    <b>{item.attributes.ISOCode} </b>
                    <span> {item.elements[1].elements[0].text} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar hidden-print" id="menu">
        <div className="navbar-header"> <button type="button" className="navbar-toggle menuMenuButton"> <i
          className="fa fa-align-justify" aria-hidden="true"></i> Рубрикатор </button>
          <button className="navbar-toggle pull-right searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
          <div id="searchForm">
            <div className="title"><i className="fa fa-search" aria-hidden="true"></i> Поиск по сайту <span
              className="close closeSearchForm"><i className="fa fa-times" aria-hidden="true"></i></span> </div>
            <form id="w13" action="/poisk_po_sajtu/" method="get">
              <input type="text" id="searchform-text" className="form-control" name="SearchForm[text]" placeholder="Поиск" />
              <button type="submit" className="btn btn-default">Найти</button>
            </form>
          </div>
        </div>
        <div id="mainMenu">
          <div className="title hidden-sm hidden-md hidden-lg"><i className="fa fa-bars" aria-hidden="true"></i> Рубрикатор <span
            className="close closeMainMenu"><i className="fa fa-times" aria-hidden="true"></i></span> </div>
          <ul className="nav navbar-nav">
            {categories.map(item => (
              <li key={item.id}><a href="/vlast/"><span>{item.title_category}</span></a></li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;