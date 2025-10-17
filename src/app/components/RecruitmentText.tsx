"use client";
import { useI18n } from "./I18nProvider";

export default function RecruitmentText() {
  const { strings } = useI18n();

  return (
    <div className="recruitment-text">
      <div className="recruitment-copy">
        <div className="step">
          <h3 id="joinUsCard1Title">{strings?.joinUs?.card1?.title || ''}</h3>
          <p id="joinUsCard1Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card1?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard2Title">{strings?.joinUs?.card2?.title || ''}</h3>
          <p id="joinUsCard2Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card2?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard3Title">{strings?.joinUs?.card3?.title || ''}</h3>
          <p id="joinUsCard3Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card3?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard4Title">{strings?.joinUs?.card4?.title || ''}</h3>
          <p id="joinUsCard4Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card4?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard5Title">{strings?.joinUs?.card5?.title || ''}</h3>
          <p id="joinUsCard5Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card5?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard6Title">{strings?.joinUs?.card6?.title || ''}</h3>
          <p id="joinUsCard6Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card6?.text || '' }}></p>
        </div>
        <div className="step">
          <h3 id="joinUsCard7Title">{strings?.joinUs?.card7?.title || ''}</h3>
          <p id="joinUsCard7Text" dangerouslySetInnerHTML={{ __html: strings?.joinUs?.card7?.text || '' }}></p>
        </div>
      </div>
      <div className="recruitment-controls">
        <div className="arrow prev" data-direction="-1"></div>
        <div className="dots"></div>
        <div className="arrow next" data-direction="1"></div>
      </div>
    </div>
  );
}
