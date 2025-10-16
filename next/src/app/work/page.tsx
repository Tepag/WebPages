"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { I18nProvider, useI18n } from "../components/I18nProvider";

function WorkInner() {
  const { strings } = useI18n();

  useEffect(() => {
    // Set page title
    document.title = "PLP | Work In Progress";
  }, []);

  return (
    <>
      <Navbar />
      <section className="section has-text-centered" style={{ color: 'white' }}>
        <h1 className="title" style={{ color: 'white' }}>Work In Progress</h1>
      </section>
    </>
  );
}

export default function Work() {
  return (
    <I18nProvider>
      <WorkInner />
    </I18nProvider>
  );
}


