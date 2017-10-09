import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import { Helmet } from "react-helmet";

class Home extends Component {
  componentDidMount() {
    document.title = "雜學起義 Zashare Revolution - 台灣非典型教育革命";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Preload Image */
    var images  = [];

	loadImage(images)
	.then(function (allImgs) {
	  setTimeout(function(){
	  	document.getElementById('loading').classList.add('fade');
	  	document.body.classList.remove('ds');
	  }, 400);
	  console.log(allImgs.length, 'images loaded!', allImgs);
	})
	.catch(function (err) {
	  console.error('One or more images have failed to load :(');
	  console.error(err.errored);
	  console.info('But these loaded fine:');
	  console.info(err.loaded);
	});
  }
  render() {
    return (
      <div>
        <header className="min-vh-100 pv5 df">
        	<div className="center w-100 mw8 ph5-l ph3">
            <h1 className="tc mb5">2017</h1>
            <figure className="center w-100 mw7 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h1 className="f-headline lh-solid tc tracked fw9">雜學起義</h1>
            <h1 className="mt2 f1 lh-title tc">Zashare Revolution!</h1>
            <h2 className="mt3 tc tracked-mega">台灣非典型教育革命</h2>
          </div>
        </header>
      {/* Banner */}
        <section className="bg-dark-gray">
          <div className="center w-100 mw6 ph3 pv5 tc hideme hidediv">
            <h3 className="white">給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
        <section className="bg-near-white pv5">
        	<div className="center w-100 mw8 ph5-l ph3 tc mb5-l mb0">
            <h1 className="fw5">影人一指然</h1>
            <h4 className="mt3">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/respect-life'>
                    <div className="bg-white pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">尊重生命</h3>
                      <p className="black center mt2 ph4 mw6">尊重生命的簡短介紹，尊重生命的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/gender-equality'>
                    <div className="bg-white pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">性別平等</h3>
                      <p className="black center mt2 ph4 mw6">性別平等的簡短介紹，性別平等的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/aesthetic-education'>
                    <div className="bg-white pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">美感教育</h3>
                      <p className="black center mt2 ph4 mw6">美感教育的簡短介紹，美感教育的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/self-realization'>
                    <div className="bg-white pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">追求夢想</h3>
                      <p className="black center mt2 ph4 mw6">追求夢想的簡短介紹，追求夢想的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/critical-thinking'>
                    <div className="bg-white pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">思辨能力</h3>
                      <p className="black center mt2 ph4 mw6">思辨能力的簡短介紹，思辨能力的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/'>
                    <div className="bg-silver pa4 df dfc dfjc br4 topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3">????</h3>
                      <p className="black center mt2 ph4 mw6">????簡短介紹，????簡短介紹．</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
