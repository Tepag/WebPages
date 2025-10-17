export default function RecruitmentVisualization() {
  return (
    <div className="recruitment-wrap" data-points="7">
      <div className="plane">
        <div className="plane-wrap">
          <img src="/assets/svg/star-shine.svg" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="center-wipe"></div>
        <div className="center-imgs">
          <div className="center-img active"></div>
          <div className="center-img"></div>
          <div className="center-img"></div>
          <div className="center-img"></div>
          <div className="center-img"></div>
          <div className="center-img"></div>
          <div className="center-img"></div>
        </div>
      </div>
      <div className="ring">
        <svg>
          <circle className="ring-bg" cx="50%" cy="50%" r="200"/>
          <circle className="dash" cx="50%" cy="50%" r="200"/>
        </svg>
      </div>
      <div className="point-wrap">
      </div>
    </div>
  );
}
