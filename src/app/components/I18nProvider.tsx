"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type I18nValue = {
  language: string;
  strings: any;
  links: any;
  setLang: (l: string) => void;
};

const I18nContext = createContext<I18nValue>({ language: "zh", strings: {}, links: {}, setLang: () => {} });

// Preload content for better static export
const preloadContent = async (lang: string) => {
  try {
    const [stringsRes, linksRes] = await Promise.all([
      fetch(`/content/${lang}.json`),
      fetch(`/content/links.json`)
    ]);
    
    const [strings, links] = await Promise.all([
      stringsRes.json(),
      linksRes.json()
    ]);
    
    return { strings, links };
  } catch (error) {
    console.error('Failed to load content:', error);
    return { strings: {}, links: {} };
  }
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>(typeof window !== 'undefined' ? (localStorage.getItem('language') || 'zh') : 'zh');
  const [strings, setStrings] = useState<any>({});
  const [links, setLinks] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    preloadContent(lang).then(({ strings: newStrings, links: newLinks }) => {
      setStrings(newStrings);
      setLinks(newLinks);
      setIsLoading(false);
    });
  }, [lang]);

  const value = useMemo<I18nValue>(() => ({
    language: lang,
    strings,
    links,
    setLang: (l: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', l);
      }
      setLang(l);
    }
  }), [lang, strings, links]);

  // Show loading state or fallback content during static generation
  if (isLoading && Object.keys(strings).length === 0) {
    return (
      <I18nContext.Provider value={{
        language: lang,
        strings: {
          navbar: {
            home: "HOME",
            groups: "CLUBS", 
            more: "MORE",
            instagram: "📸 Instagram",
            rednote: "📕 Rednote",
            sponsor: "sponsor",
            joinUs: "join us",
            ourTeam: "our team",
            contactUs: "contact us",
            aboutUs: "About Us",
            events: "EVENTS"
          },
          home: {
            mainButton: "About Us",
            card1: {
              title: "About Us",
              text1: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.<br>Creating, learning, and setting goals are the cornerstones of personal and professional growth. Continuous creation can inspire innovation, keep the mind active, and allow people to explore new ideas and express unique perspectives. Learning expands our knowledge and equips us to navigate a rapidly changing world. We are committed to connecting people to grow together, making university life more colorful, filled with warmth and love.",
              button1: "👉Clubs👈",
              button2: "Telegram",
              button3: "📸 Instagram",
              button4: "Work In Progress"
            }
          }
        },
        links: {},
        setLang: (l: string) => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('language', l);
          }
          setLang(l);
        }
      }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}


