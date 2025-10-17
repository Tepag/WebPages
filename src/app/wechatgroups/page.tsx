"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { I18nProvider, useI18n } from "../components/I18nProvider";

function WeChatGroupsInner() {
  const { strings } = useI18n();
  const [groups, setGroups] = useState<any[]>([]);

  useEffect(() => {
    // Set page title
    document.title = "PLP | Groups";
    
    if (strings?.groups) {
      const count = parseInt(strings.groups.count);
      const groupsArray = [];
      
      for (let i = 1; i <= count; i++) {
        const groupKey = `c${i}`;
        if (strings.groups[groupKey]) {
          groupsArray.push({
            id: i,
            ...strings.groups[groupKey]
          });
        }
      }
      
      setGroups(groupsArray);
    }
  }, [strings]);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '2rem', paddingBottom: '2rem' }}>
        <div className="columns is-multiline">
          {groups.map((group) => (
            <div key={group.id} className="column is-one-third-desktop is-half-tablet">
              <div className="flip" style={{ height: '300px', width: '100%' }}>
                <div 
                  className="front" 
                  id={`groupsC${group.id}Image`}
                  style={{ 
                    backgroundImage: `url(${group.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px'
                  }}
                >
                  <h1 className="text-shadow" id={`groupsC${group.id}Title`} style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
                    {group.title}
                  </h1>
                </div>
                <div className="back" style={{ height: '100%', width: '100%', borderRadius: '8px', backgroundColor: '#313131', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <h2 id={`groupsC${group.id}Text`} style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center', color: 'white' }}>
                    {group.text}
                  </h2>
                  <div className="buttons is-centered" style={{ marginTop: '1rem' }}>
                    <a 
                      id={`groupsC${group.id}Telegram`} 
                      href={group.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">
                        <img 
                          src="/assets/svg/telegram.svg" 
                          alt="telegram" 
                          style={{ width: '20px', height: '20px' }}
                        />
                      </button>
                    </a>
                    <a 
                      id={`groupsC${group.id}Whatsapp`} 
                      href={group.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">
                        <img 
                          src="/assets/svg/whatsapp.svg" 
                          alt="whatsapp" 
                          style={{ width: '20px', height: '20px' }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function WeChatGroups() {
  return (
    <I18nProvider>
      <WeChatGroupsInner />
    </I18nProvider>
  );
}
