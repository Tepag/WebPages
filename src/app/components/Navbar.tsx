"use client";
import { useI18n } from "./I18nProvider";
import { getAssetPath, getRoutePath } from "../utils/paths";

export default function Navbar() {
  const { strings, links, setLang } = useI18n();
  const s = strings?.navbar || {};
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <figure className="image" style={{ maxWidth: '20px' }}>
            <img className="is-rounded is-square" src={getAssetPath("/assets/images/logo.png")} alt="icon" />
          </figure>
          <b>PLP</b>
        </a>
        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"
          onClick={() => {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.getElementById('navMenu');
            burger?.classList.toggle('is-active');
            menu?.classList.toggle('is-active');
          }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
        <a className="navbar-item" href={getRoutePath("/")} onClick={(e) => { e.preventDefault(); window.location.href = getRoutePath('/'); }}>{s.home || ''}</a>
        <a className="navbar-item" href={getRoutePath("/wechatgroups/")}>{s.groups || ''}</a>
        <a className="navbar-item" href={getRoutePath("/events/")}>{s.events || ''}</a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href={getRoutePath("/work/")}>{s.more || ''}</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href={links?.instagram || '#'}>{s.instagram || ''}</a>
              <a className="navbar-item" href={links?.rednote || '#'}>{s.rednote || ''}</a>
              <a className="navbar-item" href={getRoutePath("/work/")}>{s.sponsor || ''}</a>
              <a className="navbar-item" href={getRoutePath("/work/")}>{s.ourTeam || ''}</a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href={getRoutePath("/work/")}>{s.contactUs || s.contactUS || ''}</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href="#" onClick={(e) => { e.preventDefault(); setLang('en'); }}>EN</a>
              <a className="button is-dark" href="#" onClick={(e) => { e.preventDefault(); setLang('zh'); }}>中</a>
              <a className="button is-primary" href={getRoutePath("/")} onClick={(e) => { e.preventDefault(); window.location.href = getRoutePath('/'); }}><strong>{s.aboutUs || ''}</strong></a>
              <a className="button is-light" href={getRoutePath("/join-us/")}>{s.joinUs || ''}</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


