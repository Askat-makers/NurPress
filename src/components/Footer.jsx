import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="nav hidden-print">
          <li><a href="/vlast/">Власть</a></li>
          <li><a href="/obschestvo/">Общество</a></li>
          <li><a href="/ekonomika/">Экономика</a></li>
          <li><a href="/proisshestvija/">Происшествия</a></li>
          <li><a href="/sport/">Спорт</a></li>
          <li><a href="/whatsapp/">Агент 024</a></li>
          <li><a href="/tehnoblog/">Техноблог</a></li>
          <li><a href="/kyrgyzcha/">Кыргызча</a></li>
          <li><a href="/english/">English</a></li>
          <li><a href="/biznes_info/">Бизнес</a></li>
          <li><a href="/video/">Видео</a></li>
        </ul>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <div className="contact">
              <div><i className="fa fa-phone" aria-hidden="true"></i><span>Телефон <a href="callto://+996312660188">+996 (312)
                  66-01-88</a></span></div>
              <div><i className="fa fa-phone" aria-hidden="true"></i><span>Рекламный отдел <a
                href="callto://+996312680851">+996 (312) 68-08-51</a></span> </div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span>Почта <a
                href="mailto:info@24.kg">info@24.kg</a></span> </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 hidden-xs hidden-print text-right"> <a
            href="https://yandex.ru/cy?base=0&amp;host=24.kg"><img src="cycounter" width="88" height="31"
              alt="Индекс цитирования" border="0" /></a>.
          <a href="https://metrika.yandex.ru/stat/?id=22715299&amp;from=informer"
              target="_blank" rel="nofollow"><img src="3_0_FFFFFFFF_FFFFFFFF_0_pageviews"
                style={{width: 88, height: 31, border: 0}} alt="Яндекс.Метрика"
                title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" /></a>
            {/* <!-- /Yandex.Metrika informer -->
          <!-- Yandex.Metrika counter --> <noscript> */}
            <div><img src="1" style={{position: "absolute", left: -9999}} alt /> </div>
          </div>
        </div>
        <div className="row copy">
          <div className="col-xs-12"> © ИА «24.kg» - Новости Кыргызстана. Все права защищены. Вся информация, размещенная на
          данном веб-сайте, предназначена только для персонального использования и не подлежит распространению без
          письменного разрешения ИА «24.kg». Редакция не несет ответственности за содержимое перепечатанных материалов и
          высказывания отдельных лиц. <br /><br /> Кыргызстан, 720001, г. Бишкек, ул.Шопокова, 121/1 +996&nbsp;312 660188
        </div>
        </div>
      </div>
      <div className="visible-xs"></div>
    </footer>
  );
};

export default Footer;