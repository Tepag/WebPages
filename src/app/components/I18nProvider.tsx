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
  const [strings, setStrings] = useState<any>({});
  const [links, setLinks] = useState<any>({});

  useEffect(() => {
    fetch(`/content/${lang}.json`).then(r => r.json()).then(setStrings).catch(() => setStrings({}));
  }, [lang]);

  useEffect(() => {
    fetch(`/content/links.json`).then(r => r.json()).then(setLinks).catch(() => setLinks({}));
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


