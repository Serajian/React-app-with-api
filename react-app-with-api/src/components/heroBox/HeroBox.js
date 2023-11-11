// packages
import CountUp from "react-countup";

// style
import "./HeroBox.css";

function HeroBox({ title, count, children }) {
  return (
    <div className="heroBoxContainer">
      <div className="heroBoxHeader">
        {children}
        <b className="heroBoxTitle">{title}</b>
      </div>
      <p className="heroBoxCount">
        <CountUp start={0} end={count} duration={2} delay={0.5} />
      </p>
    </div>
  );
}

export default HeroBox;
