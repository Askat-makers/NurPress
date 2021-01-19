import React from 'react';
import Section1 from './Section1';
import Section2Left from './Section2Left';
import Section2Right from './Section2Right';
import Section3 from './Section3';
import Navbar from '../Navbar';
import Footer from '../Footer'

const HomePageBody = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Section1 />
        <div className="row">
          <div className="col-lg-12">
            <div id="3b_w6" className="mgb40 hidden-print"
              data-ox-phs="{&quot;39&quot;:{&quot;min&quot;:1200},&quot;72&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;73&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;74&quot;:{&quot;max&quot;:767}}">
              {/* <iframe src="afr.php" width="100%" height="51" frameBorder="0" scrolling="no"></iframe> */}
              <div style={{width: "100%", height: 51, backgroundColor: "gray", textAlign: "center"}}>Здесь может быть ваша реклама</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div id="3b_w7" className="mgb40 hidden-print"
              data-ox-phs="{&quot;125&quot;:{&quot;min&quot;:1200},&quot;126&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;127&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;128&quot;:{&quot;max&quot;:767}}"
              style={{ display: "none" }}></div>
          </div>
        </div>
        <div className="row mgb40">
          <Section2Left />
          <Section2Right />
          <Section3 />
          <div className="row hidden-print">
            <div id="adfox_155366296440753541"></div>
          </div>
        </div>
        <div id="scroller" className="hidden-print"> <i className="fa fa-caret-up"></i> </div>
        <div id="3b_w16" className="flscrn"
          data-ox-phs="{&quot;145&quot;:{&quot;min&quot;:1200},&quot;146&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;147&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;148&quot;:{&quot;max&quot;:767}}"
          style={{ display: "none" }}></div>
        <div style={{ display: 'none' }}>
          <script language="javascript"
            type="text/javascript"> java = "1.0"; java1 = "" + "refer=" + escape(document.referrer) + "&amp;page=" + escape(window.location.href); document.cookie = "astratop=1; path=/"; java1 += "&amp;c=" + (document.cookie ? "yes" : "now"); </script>
          <script language="javascript1.1"
            type="text/javascript"> java = "1.1"; java1 += "&amp;java=" + (navigator.javaEnabled() ? "yes" : "now"); </script>
          <script language="javascript1.2"
            type="text/javascript"> java = "1.2"; java1 += "&amp;razresh=" + screen.width + 'x' + screen.height + "&amp;cvet=" + (((navigator.appName.substring(0, 3) == "Mic")) ? screen.colorDepth : screen.pixelDepth); </script>
          <script language="javascript1.3" type="text/javascript">java = "1.3"</script>
          <script language="javascript"
            type="text/javascript"> java1 += "&amp;jscript=" + java + "&amp;rand=" + Math.random(); document.write("<a href='//www.net.kg/stat.php?id=1839&amp;fromsite=1839' target='_blank'>" + "<img src='//www.net.kg/img.php?id=1839&amp;" + java1 + "' border='0' alt='WWW.NET.KG' width='0' height='0' /></a>"); </script>
          <a href="//www.net.kg/stat.php?id=1839&amp;fromsite=1839" target="_blank"><img src="img.php" border="0"
            alt="WWW.NET.KG" width="0" height="0" /></a> <noscript> <a href="//www.net.kg/stat.php?id=1839&amp;fromsite=1839"
              target="_blank"><img src="img_1.php" border="0" alt="WWW.NET.KG" width="0" height="0" /></a> </noscript>
        </div>
        <div id="css-loaded"></div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePageBody;