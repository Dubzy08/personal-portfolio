import { useRef } from "react";
import './TiltCard.css';

const MAX_TILT = 30;

export default function TiltCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    const rotateY = dx * MAX_TILT;
    const rotateX = -dy * MAX_TILT;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const rect = card.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const my = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    card.style.setProperty("--mx", `${mx}%`);
    card.style.setProperty("--my", `${my}%`);

    const shadowX = -dx * 20;
    const shadowY = -dy * 20;
    card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 60px rgba(51, 146, 187,0.9),
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "30%");
    card.style.boxShadow = "";
  };

  return (
    <>
      <div
        className="tilt-scene"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={cardRef} className="tilt-card">
          <div className="tilt-titlebar">
            <div className="tilt-dots">
              <div className="tilt-dot" style={{ background: "var(--primary-color)" }} />
              <div className="tilt-dot" style={{ background: "var(--secondary-color)" }} />
              <div className="tilt-dot" style={{ background: "var(--accent-color)" }} />
            </div>
            <div className="tilt-filename">
              <span className="tilt-filename-indicator" />
              Jeremy.js
            </div>
          </div>

          <div className="tilt-code-body">
            <div className="tilt-line">
              <span className="tilt-ln">01</span>
              <span>
                <span className="tilt-kw">const </span>
                <span className="tilt-var">developer</span>
                <span className="tilt-op"> = {"{"}</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">02</span>
              <span>
                &nbsp;&nbsp;<span className="tilt-prop">name</span>
                <span className="tilt-op">: </span>
                <span className="tilt-str">'Jeremy Dubé'</span>
                <span className="tilt-op">,</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">03</span>
              <span>
                &nbsp;&nbsp;<span className="tilt-prop">focus</span>
                <span className="tilt-op">: </span>
                <span className="tilt-str">'Fullstack Mastery'</span>
                <span className="tilt-op">,</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">04</span>
              <span>
                &nbsp;&nbsp;<span className="tilt-prop">skills</span>
                <span className="tilt-op">: [</span>
                <span className="tilt-str2">'NextJS'</span>
                <span className="tilt-op">, </span>
                <span className="tilt-str2">'GSAP'</span>
                <span className="tilt-op">, </span>
                <span className="tilt-str2">'AI'</span>
                <span className="tilt-op">],</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">05</span>
              <span>
                &nbsp;&nbsp;<span className="tilt-prop">passionate</span>
                <span className="tilt-op">: </span>
                <span className="tilt-bool">true</span>
                <span className="tilt-op">,</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">06</span>
              <span>
                &nbsp;&nbsp;<span className="tilt-prop">motto</span>
                <span className="tilt-op">: </span>
                <span className="tilt-str">"Build with Purpose"</span>
              </span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">07</span>
              <span className="tilt-op">{"}"}</span>
            </div>
            <div className="tilt-line">
              <span className="tilt-ln">08</span>
              <span>
                <span className="tilt-var">developer</span>
                <span className="tilt-kw">.portfolio</span>
                <span className="tilt-op">();</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}