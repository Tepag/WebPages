"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type I18nValue = {
  language: string;
  strings: any;
  links: any;
  setLang: (l: string) => void;
};

const I18nContext = createContext<I18nValue>({ language: "zh", strings: {}, links: {}, setLang: () => {} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>(typeof window !== 'undefined' ? (localStorage.getItem('language') || 'zh') : 'zh');
  const [strings, setStrings] = useState<any>({
    navbar: {
      home: 'Home',
      groups: 'Clubs',
      events: 'Events',
      more: 'More',
      instagram: 'Instagram',
      rednote: 'RedNote',
      sponsor: 'Sponsor',
      ourTeam: 'Our Team',
      contactUs: 'Contact Us',
      aboutUs: 'About Us',
      joinUs: 'Join Us'
    },
    home: {
      mainButton: 'About Us',
      card1: {
        title: 'About Us',
        button1: 'Clubs',
        button2: 'Telegram',
        button3: 'Instagram',
        button4: 'WIP',
        text1: 'Welcome to PLP!'
      }
    }
  });
  const [links, setLinks] = useState<any>({
    instagram: '#',
    rednote: '#'
  });

  useEffect(() => {
    const basePath = typeof window !== 'undefined' && window.location.hostname.includes('github.io') ? '/WebPagesRefactor' : '';
    fetch(`${basePath}/content/${lang}.json`).then(r => r.json()).then(data => setStrings(prev => ({ ...prev, ...data }))).catch(() => {});
  }, [lang]);

  useEffect(() => {
    const basePath = typeof window !== 'undefined' && window.location.hostname.includes('github.io') ? '/WebPagesRefactor' : '';
    fetch(`${basePath}/content/links.json`).then(r => r.json()).then(data => setLinks(prev => ({ ...prev, ...data }))).catch(() => {});
  }, []);

  const value = useMemo<I18nValue>(() => ({
    language: lang,
    strings,
    links,
    setLang: (l: string) => {
      localStorage.setItem('language', l);
      setLang(l);
    }
  }), [lang, strings, links]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}


