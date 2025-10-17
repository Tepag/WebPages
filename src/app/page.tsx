"use client";
import { useEffect } from "react";
import { useI18n } from "./components/I18nProvider";
import { getClientAssetPath, getClientRoutePath } from "./utils/paths";

function HomeInner() {
  const { strings, links } = useI18n();
  useEffect(() => {
    // Add noscroll class to body for home page
    document.body.classList.add('noscroll');
    
    const script = document.createElement('script');
    script.src = getClientAssetPath('/js/vendor/introgridsection.js');
    script.async = true;
    document.body.appendChild(script);
    
    return () => { 
      document.body.removeChild(script);
      // Remove noscroll class when leaving home page
      document.body.classList.remove('noscroll');
    };
  }, []);
  return (
    <div id="homePage" className="intro-section">
    <main>
      <section className="intro">
        <div className="grid">
          <div className="row">
            {['6-min.jpg','7-min.jpg','8-min.jpg'].map((img) => (
              <div className="row__item" key={img}>
                <div className="row__item-inner">
                  <div className="row__item-img" style={{ backgroundImage: `url(${getClientAssetPath(`/assets/images/${img}`)})` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['10.jpg.webp','11-min.jpg','12-min.jpg','13-min.jpg','14.avif','15-min.jpg'].map((img) => (
              <div className="row__item" key={img}>
                <div className="row__item-inner">
                  <div className="row__item-img" style={{ backgroundImage: `url(${getClientAssetPath(`/assets/images/${img}`)})` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['16-min.jpg','17-min.jpg','18-min.jpg','1.jpg','19-min.jpg','20-min.jpg'].map((img) => (
              <div className="row__item" key={img}>
                <div className="row__item-inner">
                  <div className="row__item-img" style={{ backgroundImage: `url(${getClientAssetPath(`/assets/images/${img}`)})` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['22-min.jpg','23-min.jpg','24-min.jpg','25-min.jpg','26-min.jpg','27-min.jpg','28-min.jpg'].map((img) => (
              <div className="row__item" key={img}>
                <div className="row__item-inner">
                  <div className="row__item-img" style={{ backgroundImage: `url(${getClientAssetPath(`/assets/images/${img}`)})` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['29-min.jpg','30.webp','2-min.jpg'].map((img) => (
              <div className="row__item" key={img}>
                <div className="row__item-inner">
                  <div className="row__item-img" style={{ backgroundImage: `url(${getClientAssetPath(`/assets/images/${img}`)})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fullview" />
        <div className="enter glassEffect has-text-centered">
          <span className="container">
            <figure className="image is-128x128 centerImage">
              <img className="is-rounded is-1by1" src={getClientAssetPath('/assets/images/logo.png')} />
            </figure>
            <p className="title centerImage" style={{ marginTop: '5%', marginBottom: '3%', color: 'aliceblue' }}>Passion Lab Polimi</p>
            <p className="subtitle centerImage lxgw-wenkai-tc-regular" style={{ color: 'rgb(221, 221, 221)' }}>where passion sprout</p>
            <button id="homeMainButton" className="button is-primary is-large lxgw-wenkai-tc-regular">{strings?.home?.mainButton || 'About Us'}</button>
          </span>
        </div>
      </section>
      <section className="content">
        <div className="content__header" >
          <h2 id="homeCard1Title">{strings?.home?.card1?.title || 'About Us'}</h2>
        </div>
        <div className="content__text lxgw-wenkai-tc-regular">
          <p className="buttons level-item has-text-centered">
            <a className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect" href={getClientRoutePath('/wechatgroups/')}>{strings?.home?.card1?.button1 || 'Groups'}</a>
            <a className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect" href="#">{strings?.home?.card1?.button2 || 'Telegram'}</a>
            <a className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect" href={links?.instagram || '#'}>{strings?.home?.card1?.button3 || 'Instagram'}</a>
            <a className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect" href={getClientRoutePath('/work/')}>{strings?.home?.card1?.button4 || 'WIP'}</a>
          </p>
          <p className="right" id="homeCard1Text1" dangerouslySetInnerHTML={{ __html: strings?.home?.card1?.text1 || '' }} />
          <p className="highlight">What matters most is how the journey allows your passions to bloom, transforming you into your own firework 🎆</p>
          <p id="homeMoreComing">More are coming!!</p>
        </div>
      </section>
    </main>
    </div>
  );
}

export default function Home() {
  return <HomeInner />;
}
