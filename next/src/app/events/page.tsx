"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { I18nProvider, useI18n } from "../components/I18nProvider";

function EventsInner() {
  const { strings } = useI18n();
  const [eventsCards, setEventsCards] = useState<any[]>([]);
  const [eventsNews, setEventsNews] = useState<any[]>([]);

  useEffect(() => {
    if (strings?.events) {
      // Process events cards
      if (strings.events.cards) {
        const cardsCount = parseInt(strings.events.cards.count);
        const cardsArray = [];
        
        for (let i = 1; i <= cardsCount; i++) {
          const cardKey = `c${i}`;
          if (strings.events.cards[cardKey]) {
            cardsArray.push({
              id: i,
              ...strings.events.cards[cardKey]
            });
          }
        }
        
        setEventsCards(cardsArray);
      }

      // Process events news
      if (strings.events.news) {
        const newsCount = parseInt(strings.events.news.count);
        const newsArray = [];
        
        for (let i = 1; i <= newsCount; i++) {
          const newsKey = `n${i}`;
          if (strings.events.news[newsKey]) {
            newsArray.push({
              id: i,
              ...strings.events.news[newsKey]
            });
          }
        }
        
        setEventsNews(newsArray);
      }
    }
  }, [strings]);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#15161a', minHeight: '100vh' }}>
        <div className="wrapper" id="eventsMainPart" style={{ backgroundColor: '#15161a', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}><strong>All Events<span>( {eventsCards.length} )</span></strong></h2>
          <div className="cards" id="eventsCards">
            {eventsCards.map((card) => (
              <a 
                key={card.id} 
                className="card" 
                id={`eventsC${card.id}Link`} 
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id={`eventsC${card.id}Image`} src={card.image} alt={card.title} />
                <figcaption className="glassEffect" id={`eventsC${card.id}Title`} style={{ color: 'black' }}>
                  {card.title}
                </figcaption>
              </a>
            ))}
          </div>
        
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', marginTop: '3rem' }}><strong>History</strong></h2>
          <div className="news" id="eventsNews">
            {eventsNews.map((news) => (
              <figure key={news.id} className="article">
                <img id={`eventsN${news.id}Image`} src={news.image} alt={news.title} />
                <figcaption>
                  <h3 id={`eventsN${news.id}Title`}>{news.title}</h3>
                  <p id={`eventsN${news.id}Text`}>{news.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default function Events() {
  return (
    <I18nProvider>
      <EventsInner />
    </I18nProvider>
  );
}
