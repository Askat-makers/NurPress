import React from 'react';
import { Link } from 'react-router-dom';
import Section3 from './HomePageComponents/Section3';

const PopulationAndEconomics = ({ newsArr }) => {
  console.log(newsArr)
  
  return (
    <>
      <div class="hidden-print">
        <div class="row">
          <div class="col-xs-12">
            <div class="lineTitle"> Популярные новости
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row blockNews">
          <div class="row">
            {newsArr.map(item => (
              <div key={item.id} class="col-sm-3 col-xs-6 ">
                <Link to={`/news-detail${item.id}`} class="title">
                  <img src={item.post_image} alt="PHOTO" />
                  <span>{item.title_post}</span></Link>
              </div>
            ))}
            <div class="col-xs-12 visible-xs"></div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-xs-12">
            <div class="lineTitle">Бизнес<div class="line"></div>
            </div>
          </div>
        </div> */}
        <Section3 />
        {/* <div class="row blockNews">
          <div class="row">
            <div class="col-sm-3 col-xs-6 ">
              <a href="https://24.kg/biznes_info/180467_kak_vkriminalnom_filme_90-h_vladelets_seti_spekulyant_zayavlyaet_oreyderstve/" class="title"> <img src="./Учителя школы Каракола просят министра образования вернуть уволенного директора » Общество » www.24.kg - КЫРГЫЗСТАН_files/194992_w263_h198.jpg" alt="PHOTO"/><span>Как в&nbsp;криминальном фильме 90-х. Владелец сети «Спекулянт» заявляет о&nbsp;рейдерстве
              </span> </a>
            </div>
            <div class="col-xs-12 visible-xs"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PopulationAndEconomics;