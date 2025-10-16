/* global window */
const { useEffect, useMemo, useState, createContext, useContext } = window.React;
const RRD = window.ReactRouterDOM || null;

// i18n context using existing JSON files
const I18nContext = createContext({ language: 'zh', strings: {}, links: {}, setLang: () => {} });

function useFetchJSON(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let active = true;
    fetch(url)
      .then(r => r.json())
      .then(j => { if (active) setData(j); })
      .catch(() => {});
    return () => { active = false; };
  }, [url]);
  return data;
}

function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'zh');
  const strings = useFetchJSON(`../content/${lang}.json`) || {};
  const links = useFetchJSON(`../content/links.json`) || {};
  const value = useMemo(() => ({ language: lang, strings, links, setLang: (l) => { localStorage.setItem('language', l); setLang(l); } }), [lang, strings, links]);
  return React.createElement(I18nContext.Provider, { value }, children);
}

function useI18n() {
  return useContext(I18nContext);
}

// Shared Navbar
function LinkC(props) {
  if (RRD && RRD.Link) {
    return React.createElement(RRD.Link, props, props.children);
  }
  const href = typeof props.to === 'string' ? ('#' + props.to) : '#/home';
  const { to, ...rest } = props;
  return React.createElement('a', { href, ...rest }, props.children);
}

function Navbar() {
  const { strings, links, setLang } = useI18n();
  const s = strings?.navbar || {};
  return (
    React.createElement('nav', { className: 'navbar is-transparent', role: 'navigation', 'aria-label': 'main navigation' },
      React.createElement('div', { className: 'navbar-brand' },
        React.createElement(LinkC, { className: 'navbar-item', to: '/home' },
          React.createElement('figure', { className: 'image', style: { maxWidth: '20px' } },
            React.createElement('img', { className: 'is-rounded is-square', src: '../assets/images/logo.png', alt: 'icon' })
          ),
          React.createElement('b', null, 'PLP')
        ),
        React.createElement('a', { role: 'button', className: 'navbar-burger', 'data-target': 'navMenu', 'aria-label': 'menu', 'aria-expanded': 'false', onClick: () => {
          const burger = document.querySelector('.navbar-burger');
          const menu = document.getElementById('navMenu');
          burger?.classList.toggle('is-active');
          menu?.classList.toggle('is-active');
        } },
          React.createElement('span', { 'aria-hidden': 'true' }),
          React.createElement('span', { 'aria-hidden': 'true' }),
          React.createElement('span', { 'aria-hidden': 'true' }),
          React.createElement('span', { 'aria-hidden': 'true' }),
        )
      ),
      React.createElement('div', { className: 'navbar-menu', id: 'navMenu' },
        React.createElement('div', { className: 'navbar-start' },
          React.createElement(LinkC, { className: 'navbar-item', to: '/home' }, s.home || ''),
          React.createElement(LinkC, { className: 'navbar-item', to: '/wechatgroups' }, s.groups || ''),
          React.createElement(LinkC, { className: 'navbar-item', to: '/events' }, s.events || ''),
          React.createElement('div', { className: 'navbar-item has-dropdown is-hoverable' },
            React.createElement(LinkC, { className: 'navbar-link', to: '/work' }, s.more || ''),
            React.createElement('div', { className: 'navbar-dropdown' },
              React.createElement('a', { className: 'navbar-item', href: links.instagram || '#' }, s.instagram || ''),
              React.createElement('a', { className: 'navbar-item', href: links.rednote || '#' }, s.rednote || ''),
              React.createElement(LinkC, { className: 'navbar-item', to: '/work' }, s.sponsor || ''),
              React.createElement(LinkC, { className: 'navbar-item', to: '/work' }, s.ourTeam || ''),
              React.createElement('hr', { className: 'navbar-divider' }),
              React.createElement(LinkC, { className: 'navbar-item', to: '/work' }, s.contactUs || s.contactUS || '')
            )
          )
        ),
        React.createElement('div', { className: 'navbar-end' },
          React.createElement('div', { className: 'navbar-item' },
            React.createElement('div', { className: 'buttons' },
              React.createElement('a', { className: 'button is-dark', href: '#', onClick: (e) => { e.preventDefault(); setLang('en'); } }, 'EN'),
              React.createElement('a', { className: 'button is-dark', href: '#', onClick: (e) => { e.preventDefault(); setLang('zh'); } }, '中'),
              React.createElement(LinkC, { className: 'button is-primary', to: '/home' }, s.aboutUs || ''),
              React.createElement(LinkC, { className: 'button is-light', to: '/joinUs' }, s.joinUs || '')
            )
          )
        )
      )
    )
  );
}

function Layout({ children }) {
  return (
    React.createElement('div', null,
      React.createElement(Navbar, null),
      React.createElement('main', null, children)
    )
  );
}

// Home Page
function Home() {
  const { strings } = useI18n();
  const s = strings?.home || {};
  useEffect(() => {
    // Dynamically load intro grid animation script for parity
    const script = document.createElement('script');
    script.src = '../js/vendor/introgridsection.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return (
    React.createElement('div', null,
      React.createElement('section', { className: 'intro' },
        React.createElement('div', { className: 'grid' },
          // Rows reproduced from original home.html
          React.createElement('div', { className: 'row' },
            ['6-min.jpg','7-min.jpg','8-min.jpg'].map((img, i) => (
              React.createElement('div', { className: 'row__item', key: 'r1_'+i },
                React.createElement('div', { className: 'row__item-inner' },
                  React.createElement('div', { className: 'row__item-img', style: { backgroundImage: `url(../assets/images/${img})` } })
                )
              )
            ))
          ),
          React.createElement('div', { className: 'row' },
            ['10.jpg.webp','11-min.jpg','12-min.jpg','13-min.jpg','14.avif','15-min.jpg'].map((img, i) => (
              React.createElement('div', { className: 'row__item', key: 'r2_'+i },
                React.createElement('div', { className: 'row__item-inner' },
                  React.createElement('div', { className: 'row__item-img', style: { backgroundImage: `url(../assets/images/${img})` } })
                )
              )
            ))
          ),
          React.createElement('div', { className: 'row' },
            ['16-min.jpg','17-min.jpg','18-min.jpg','1.jpg','19-min.jpg','20-min.jpg'].map((img, i) => (
              React.createElement('div', { className: 'row__item', key: 'r3_'+i },
                React.createElement('div', { className: 'row__item-inner' },
                  React.createElement('div', { className: 'row__item-img', style: { backgroundImage: `url(../assets/images/${img})` } })
                )
              )
            ))
          ),
          React.createElement('div', { className: 'row' },
            ['22-min.jpg','23-min.jpg','24-min.jpg','25-min.jpg','26-min.jpg','27-min.jpg','28-min.jpg'].map((img, i) => (
              React.createElement('div', { className: 'row__item', key: 'r4_'+i },
                React.createElement('div', { className: 'row__item-inner' },
                  React.createElement('div', { className: 'row__item-img', style: { backgroundImage: `url(../assets/images/${img})` } })
                )
              )
            ))
          ),
          React.createElement('div', { className: 'row' },
            ['29-min.jpg','30.webp','2-min.jpg'].map((img, i) => (
              React.createElement('div', { className: 'row__item', key: 'r5_'+i },
                React.createElement('div', { className: 'row__item-inner' },
                  React.createElement('div', { className: 'row__item-img', style: { backgroundImage: `url(../assets/images/${img})` } })
                )
              )
            ))
          )
        ),
        React.createElement('div', { className: 'fullview' }),
        React.createElement('div', { className: 'enter glassEffect has-text-centered' },
          React.createElement('span', { className: 'container' },
            React.createElement('figure', { className: 'image is-128x128 centerImage' },
              React.createElement('img', { className: 'is-rounded is-1by1', src: '../assets/images/logo.png' })
            ),
            React.createElement('p', { className: 'title centerImage', style: { marginTop: '5%', marginBottom: '3%', color: 'aliceblue' } }, 'Passion Lab Polimi'),
            React.createElement('p', { className: 'subtitle centerImage lxgw-wenkai-tc-regular', style: { color: 'rgb(221,221,221)' } }, 'where passion sprout'),
            React.createElement(LinkC, { id: 'homeMainButton', className: 'button is-primary is-large lxgw-wenkai-tc-regular', to: '/work' }, s.mainButton || '')
          )
        )
      ),
      React.createElement('section', { className: 'content' },
        React.createElement('div', { className: 'content__header' },
          React.createElement('h2', { id: 'homeCard1Title' }, s.card1?.title || '')
        ),
        React.createElement('div', { className: 'content__text lxgw-wenkai-tc-regular' },
          React.createElement('p', { className: 'buttons level-item has-text-centered' },
            React.createElement(LinkC, { id: 'homeCard1Button1', className: 'button is-success is-medium lxgw-wenkai-tc-regular glassEffect', to: '/wechatgroups' }, s.card1?.button1 || ''),
            React.createElement('a', { id: 'homeCard1Button2', className: 'button is-success is-medium lxgw-wenkai-tc-regular glassEffect', href: '#' }, s.card1?.button2 || ''),
            React.createElement('a', { id: 'homeCard1Button3', className: 'button is-success is-medium lxgw-wenkai-tc-regular glassEffect', href: '#' }, s.card1?.button3 || ''),
            React.createElement(LinkC, { id: 'homeCard1Button4', className: 'button is-success is-medium lxgw-wenkai-tc-regular glassEffect', to: '/work' }, s.card1?.button4 || '')
          ),
          React.createElement('p', { className: 'right', id: 'homeCard1Text1', dangerouslySetInnerHTML: { __html: s.card1?.text1 || '' } }),
          React.createElement('p', { className: 'highlight' }, 'What matters most is how the journey allows your passions to bloom, transforming you into your own firework 🎆'),
          React.createElement('p', null, 'More are coming!!')
        )
      )
    )
  );
}

// Events Page
function Events() {
  const { strings } = useI18n();
  const s = strings?.events || {};
  const cardsCount = parseInt(s?.cards?.count || '0', 10) || 0;
  const newsCount = parseInt(s?.news?.count || '0', 10) || 0;
  const cards = Array.from({ length: cardsCount }, (_, i) => s.cards[`c${i+1}`]);
  const news = Array.from({ length: newsCount }, (_, i) => s.news[`n${i+1}`]);
  return (
    React.createElement('div', { className: 'wrapper', id: 'eventsMainPart' },
      React.createElement('h2', null, React.createElement('strong', null, 'All Events', React.createElement('span', null, ` ( ${cardsCount} )`))),
      React.createElement('div', { className: 'cards', id: 'eventsCards' },
        cards.map((c, idx) => (
          React.createElement('a', { className: 'card', id: `eventsC${idx+1}Link`, target: '_blank', href: c?.link || '#' , key: idx },
            React.createElement('img', { id: `eventsC${idx+1}Image`, src: c?.image || '' }),
            React.createElement('figcaption', { className: 'glassEffect', id: `eventsC${idx+1}Title`, style: { color: 'black' } }, c?.title || '')
          )
        ))
      ),
      React.createElement('h2', null, React.createElement('strong', null, "What's new?")),
      React.createElement('div', { className: 'news', id: 'eventsNews' },
        news.map((n, idx) => (
          React.createElement('figure', { className: 'article', key: idx },
            React.createElement('img', { id: `eventsN${idx+1}Image`, src: n?.image || '' }),
            React.createElement('figcaption', null,
              React.createElement('h3', { id: `eventsN${idx+1}Title` }, n?.title || ''),
              React.createElement('p', { id: `eventsN${idx+1}Text` }, n?.text || '')
            )
          )
        ))
      )
    )
  );
}

// Join Us Page (static interaction handled by vendor CSS/JS visuals kept minimal)
function JoinUs() {
  const { strings, links } = useI18n();
  const s = strings?.joinUs || {};
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../js/vendor/joinUs.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return (
    React.createElement('div', null,
      React.createElement('section', { className: 'hero is-small', style: { marginTop: '2%', marginBottom: '2%' } },
        React.createElement('div', { className: 'hero-body', style: { color: 'white' } },
          React.createElement('div', { className: 'container has-text-centered' },
            React.createElement('h1', { id: 'joinUsTitle', className: 'title bold is-2', style: { fontWeight: 900, color: 'white' } }, s.title || '')
          )
        )
      ),
      React.createElement('div', { className: 'container glassEffect is-max-widescreen p-5' },
        React.createElement('section', { className: 'recruitment-process' },
          React.createElement('div', { className: 'cgrid' }),
          React.createElement('div', { className: 'cgrid' },
            React.createElement('div', { className: 'recruitment-wrap', 'data-points': 7 },
              React.createElement('div', { className: 'plane' }, React.createElement('div', { className: 'plane-wrap' }, React.createElement('img', { src: '../assets/svg/star-shine.svg', alt: '' }))),
              React.createElement('div', { className: 'center' },
                React.createElement('div', { className: 'center-wipe' }),
                React.createElement('div', { className: 'center-imgs' },
                  Array.from({ length: 7 }).map((_, i) => React.createElement('div', { className: 'center-img' + (i === 0 ? ' active' : '') , key: i }))
                )
              ),
              React.createElement('div', { className: 'ring' }, React.createElement('svg', null, React.createElement('circle', { className: 'ring-bg', cx: '50%', cy: '50%', r: '200' }), React.createElement('circle', { className: 'dash', cx: '50%', cy: '50%', r: '200' }))),
              React.createElement('div', { className: 'point-wrap' })
            ),
            React.createElement('div', { className: 'recruitment-text' },
              React.createElement('div', { className: 'recruitment-copy' },
                Array.from({ length: 7 }).map((_, i) => (
                  React.createElement('div', { className: 'step', key: i },
                    React.createElement('h3', { id: `joinUsCard${i+1}Title` }, s[`card${i+1}`]?.title || ''),
                    React.createElement('p', { id: `joinUsCard${i+1}Text`, dangerouslySetInnerHTML: { __html: s[`card${i+1}`]?.text || '' } })
                  )
                ))
              ),
              React.createElement('div', { className: 'recruitment-controls' }, React.createElement('div', { className: 'arrow prev', 'data-direction': -1 }), React.createElement('div', { className: 'dots' }), React.createElement('div', { className: 'arrow next', 'data-direction': 1 }))
            )
          )
        )
      ),
      React.createElement('section', { className: 'hero is-small', style: { marginTop: '2%' } },
        React.createElement('div', { className: 'hero-body', style: { color: 'white' } },
          React.createElement('div', { className: 'container has-text-centered' },
            React.createElement('a', { id: 'joinUsCurriculumLink', href: links.curriculum || '#', target: '_blank' },
              React.createElement('button', { id: 'joinUsCurriculum', className: 'is-info button bold is-medium', style: { color: '#002536' } }, s.curriculum || '')
            )
          )
        )
      )
    )
  );
}

// Groups Page
function Groups() {
  const { strings } = useI18n();
  const s = strings?.groups || {};
  const count = parseInt(s?.count || '0', 10) || 0;
  const items = Array.from({ length: count }, (_, i) => s[`c${i+1}`]);
  return (
    React.createElement('div', { className: 'grid is-col-min-15 is-centered', id: 'groupsMainPart', style: { marginTop: '5%' } },
      items.map((g, idx) => (
        React.createElement('div', { className: 'grid is-centered', key: idx },
          React.createElement('div', { className: 'flip' },
            React.createElement('div', { className: 'front', id: `groupsC${idx+1}Image`, style: { backgroundImage: `url(${g?.image || ''})` } },
              React.createElement('h1', { className: 'text-shadow', id: `groupsC${idx+1}Title` }, g?.title || '')
            ),
            React.createElement('div', { className: 'back' },
              React.createElement('h2', { id: `groupsC${idx+1}Text` }, g?.text || ''),
              React.createElement('div', { className: 'buttons is-centered are-large', style: { marginTop: '30%' } },
                React.createElement('a', { id: `groupsC${idx+1}Telegram`, href: g?.telegram || '#' },
                  React.createElement('button', { className: 'button' }, React.createElement('img', { src: '../assets/svg/telegram.svg', alt: 'wechat', style: { width: '20px', height: '20px' } }))
                ),
                React.createElement('a', { id: `groupsC${idx+1}Whatsapp`, href: g?.whatsapp || '#' },
                  React.createElement('button', { className: 'button' }, React.createElement('img', { src: '../assets/svg/whatsapp.svg', alt: 'wechat', style: { width: '20px', height: '20px' } }))
                )
              )
            )
          )
        )
      ))
    )
  );
}

function WorkInProgress() {
  return React.createElement('section', { className: 'section has-text-centered' }, React.createElement('h1', { className: 'title' }, 'Work In Progress'));
}

function ScrollToTop() {
  useEffect(() => {
    const onChange = () => window.scrollTo(0, 0);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return null;
}

function App() {
  if (RRD && RRD.HashRouter && RRD.Routes) {
    return (
      React.createElement(RRD.HashRouter, null,
        React.createElement(I18nProvider, null,
          React.createElement(ScrollToTop, null),
          React.createElement(Layout, null,
            React.createElement(RRD.Routes, null,
              React.createElement(RRD.Route, { path: '/', element: React.createElement(RRD.Navigate, { to: '/home', replace: true }) }),
              React.createElement(RRD.Route, { path: '/home', element: React.createElement(Home, null) }),
              React.createElement(RRD.Route, { path: '/events', element: React.createElement(Events, null) }),
              React.createElement(RRD.Route, { path: '/joinUs', element: React.createElement(JoinUs, null) }),
              React.createElement(RRD.Route, { path: '/wechatgroups', element: React.createElement(Groups, null) }),
              React.createElement(RRD.Route, { path: '/work', element: React.createElement(WorkInProgress, null) })
            )
          )
        )
      )
    );
  }
  // Fallback: render Home without routing if router not loaded yet
  return React.createElement(I18nProvider, null, React.createElement(Layout, null, React.createElement(Home, null)));
}

const rootEl = document.getElementById('root');
if (window.ReactDOM && typeof window.ReactDOM.createRoot === 'function') {
  window.ReactDOM.createRoot(rootEl).render(React.createElement(App, null));
} else if (window.ReactDOM && typeof window.ReactDOM.render === 'function') {
  window.ReactDOM.render(React.createElement(App, null), rootEl);
}


