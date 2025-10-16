"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { I18nProvider, useI18n } from "../components/I18nProvider";
import RecruitmentProcess from "../components/RecruitmentProcess";
import RecruitmentVisualization from "../components/RecruitmentVisualization";
import RecruitmentText from "../components/RecruitmentText";
import "./join-us-fixes.css";

function JoinUsInner() {
  const { strings, links } = useI18n();

  useEffect(() => {
    // Set page title
    document.title = "PLP | Join Us";
  }, []);

  return (
    <>
      <Navbar />
      <RecruitmentProcess />
      
      <section className="hero is-small" style={{ marginTop: '2%', marginBottom: '2%' }}>
        <div className="hero-body" style={{ color: 'white' }}>
          <div className="container has-text-centered">
            <h1 id="joinUsTitle" className="title bold is-2" style={{ fontWeight: 900, color: 'white' }}>{strings?.joinUs?.title || ''}</h1>
          </div>
        </div>
      </section>

      <div className="container glassEffect is-max-widescreen p-5">
        <section className="recruitment-process">
          <div className="cgrid"></div>
          <div className="cgrid">
            <RecruitmentVisualization />
            <RecruitmentText />
          </div>
        </section>
      </div>

      <section className="hero is-small" style={{ marginTop: '2%' }}>
        <div className="hero-body" style={{ color: 'white' }}>
          <div className="container has-text-centered">
            <a id="joinUsCurriculumLink" href={links?.curriculum || '#'} target="_blank">
              <button id="joinUsCurriculum" className="is-info button bold is-medium" style={{ color: '#002536' }}>{strings?.joinUs?.curriculum || ''}</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function JoinUs() {
  return (
    <I18nProvider>
      <JoinUsInner />
    </I18nProvider>
  );
}