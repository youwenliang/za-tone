import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import $ from 'jquery';

class Home extends Component {
  componentDidMount() {
    document.title = "雜學起義 Zashare Revolution - 台灣非典型教育革命";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    var video = document.getElementById('home-video');
    var video_loop = document.getElementById('home-video-loop');
    video.pause();

    document.getElementById('home-video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      console.log('done');
      $('#home-video-loop').css({'z-index': 1, 'opacity': 1});
      video_loop.play();
    }

    /* Preload Image */
    var images  = [];
    images.push('images/loading.gif');
    images.push('images/1920x1080.png');
    images.push('images/400x400.png');
    images.push('images/move_400x400.png');
    images.push('images/home_video_poster.png');

  	loadImage(images)
  	.then(function (allImgs) {
  	  setTimeout(function(){
  	  	document.getElementById('loading').classList.add('fade');
  	  	document.body.classList.remove('ds');
        setTimeout(function(){
          $('#home .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
              $(this).removeClass('hideme-left');
              $(this).removeClass('hideme-right');
            }  
          });
          setTimeout(function(){
            video.play();
            $('#home-video').attr('poster', 'images/home_video_poster.png');
          },400);
        }, 400);
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
      <div id="home">
        <header className="min-vh-100 pv5 df">
        	<div className="center w-100 mw8 ph5-l ph3 tc">
            <h2 className="tc mb4 hideme hidediv">2017</h2>
            <div className="relative w-100 mw6 center hideme hidediv">
              <video id="home-video" className="home-video" width="100%" muted preload="auto">
              <source src="images/home_video.mp4" type="video/mp4" /></video>
              <video id="home-video-loop" className="home-video absolute" width="100%" muted preload="auto" loop>
              <source src="images/home_video_loop.mp4" type="video/mp4" /></video>
            </div>
            <figure className="db center w-100 mw6 ma0 hideme hidediv">
              <img src="images/home-title.png" alt=""/>
            </figure>
            <h3 className="mt0 tc tracked-mega hideme hidediv">台灣非典型教育革命</h3>
          </div>
        </header>
        {/* Banner */}
        <section className="banner">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
        <section className="bg-near-white pv5">
        	<div className="center w-100 mw8 ph5-l ph3 tc mb5-l mb0">
            <h2 className="fw4 hideme hidediv">影人一指然</h2>
            <h4 className="fw4 mt3 hideme hidediv">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/self-realization'>
                    <div className="bg-white ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/self-realization/cover_image.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">追求夢想</h3>
                      <p className="center mt2 ph4 mw6 tl">追求夢想的簡短介紹，追求夢想的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/respect-life'>
                    <div className="bg-white ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">尊重生命</h3>
                      <p className="center mt2 ph4 mw6 tl">尊重生命的簡短介紹，尊重生命的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/gender-equality'>
                    <div className="bg-white ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">性別平等</h3>
                      <p className="center mt2 ph4 mw6 tl">性別平等的簡短介紹，性別平等的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/aesthetic-education'>
                    <div className="bg-white ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">美感教育</h3>
                      <p className="center mt2 ph4 mw6 tl">美感教育的簡短介紹，美感教育的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/critical-thinking'>
                    <div className="bg-white ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">思辨能力</h3>
                      <p className="center mt2 ph4 mw6 tl">思辨能力的簡短介紹，思辨能力的簡短介紹．</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/'>
                    <div className="bg-silver ba b--moon-gray pa4 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <img src="images/400x400.png" alt=""/>
                      </figure>
                      <h3 className="center mt3 fw5">????</h3>
                      <p className="center mt2 ph4 mw6 tl">????簡短介紹，????簡短介紹．</p>
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
