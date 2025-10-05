import { useEffect, useRef } from "react";
import "./Flipbook.css";
import story1 from "../../assets/story/1.png";
import story2 from "../../assets/story/2.png";
import story3 from "../../assets/story/3.png";
import story4 from "../../assets/story/4.png";
import story5 from "../../assets/story/5.png";
import story6 from "../../assets/story/6.png";

const Flipbook = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && window.$(bookRef.current)?.turn) {
        window.$(bookRef.current).turn({
          width: 1200,
          height: 600,
          autoCenter: true,
        });
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flipbook-container">
      <div className="welcome-text">
        Flip through Rovie's Story ...
      </div>
      <div className="flipbook" ref={bookRef}>
        <div className="hard">Story of Rovie</div>
        <div className="hard"></div>

        <div className="page">
          <small>
            <b>Story of Rovie</b>
          </small>
          <small>Nasa Space Apps Hackathon 2025</small>
        </div>

        {[
          { num: 1, src: story1 },
          { num: 2, src: story2 },
          { num: 3, src: story3 },
          { num: 4, src: story4 },
          { num: 5, src: story5 },
          { num: 6, src: story6 },
        ].map(({ num, src }) => (
          <div className="page" key={num}>
            <img src={src} alt={`Page ${num}`} />
          </div>
        ))}

        <div className="hard"></div>
        <div className="hard">
          <b>The End</b>
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
