import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Sustainability.css";
import antenna from "../../assets/antenna.png";

export default function Sustainability() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Pure resource efficiency: 100%",
      content: (
        <>
          <p className="slide-description">
            Percentage of antenna support structure mass derived from
            post-landing construction waste.
            <br />
            Fully made from waste – 100%
          </p>
          <div className="diagram-box">
            <div className="diagram-row">
              <div className="component-box small top">
                <div className="box-text">Rope to secure boom to mast</div>
              </div>
            </div>
            <div className="diagram-row main-row">
              <div className="component-box medium">
                <div className="box-content">Boom</div>
              </div>
              <div className="component-box medium">
                <div className="box-content">Mast</div>
              </div>
              <div className="component-box medium">
                <div className="box-content">3 way elements</div>
              </div>
              <div className="component-box medium">
                <div className="box-content">Tripod legs</div>
              </div>
            </div>
            <div className="diagram-row">
              <div className="component-box small bottom">
                <div className="box-text">Anchor rope</div>
              </div>
              <div className="component-box small bottom">
                <div className="box-text">Thin foam gaskets</div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Antenna confidence level: R(t)",
      content: (
        <div className="text-content">
          <p>7 parts of antenna body,</p>
          <p>Assume Mean Time to Failure (MTTF)</p>
          <ul className="bullet-list">
            <li>
              MTTF for <u>aluminum</u> and boom structure = 2 years = 730 days
            </li>
            <li>MTTF for foam and nylon = 1 year = 365 days</li>
          </ul>
          <div className="formula-section">
            <p>
              Failure rate λ₁ = <sup>1</sup>⁄<sub>730</sub> = 0.00137, λ₂ ={" "}
              <sup>1</sup>⁄<sub>365</sub> = 0.00274, λ = 0.00319
            </p>
            <p className="reliability-formula">
              Reliability{" "}
              <em>
                R(t) = e<sup>-0.000319t</sup>
              </em>
            </p>
            <p>
              Assume repair is needed when <em>R(t)</em> &lt; 50% therefore{" "}
              <em>t</em> = 217.29 days
            </p>
            <p>
              Conservatively, repair can be carried out every 6 months (180
              days) to ensure normal operation
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Mean time to manufacture & assemble: 7 hours",
      content: (
        <table className="process-table">
          <thead>
            <tr>
              <th>Process</th>
              <th>Time (min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inventory & prep of scrap materials</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Measure & mark element cut lengths + layout on bench</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Manufacturing parts from trash</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Clean & treat surfaces</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Assemble elements</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Electrical connection & insulating</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Final mechanical check & installation prep</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Small field verify</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const cards = [
    {
      title: "Resource Efficiency",
      front: "Pure resource efficiency: 100%",
      back: "Our antenna design achieves maximum resource utilization through innovative materials and sustainable manufacturing processes.",
    },
    {
      title: "Maintenance Confidence",
      front: "Maintenance needed only every 6 months",
      back: "High reliability with minimal maintenance requirements, ensuring consistent performance in Mars' harsh environment.",
    },
    {
      title: "Assembly Time",
      front: "Mean time to manufacture & assemble: 7 hours",
      back: "Efficient assembly process optimized for quick deployment while maintaining quality and precision.",
    },
  ];

  return (
    <div className="sus-background">
      <div className="sus-container">
        <div className="sus-header">
          <h1>Why use this antenna design?</h1>
          <img
            src={antenna}
            alt="Antenna Design Illustration"
            className="header-image"
          />
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="card-wrapper">
              <div
                className={`flip-card ${flipped[index] ? "flipped" : ""}`}
                onClick={() => handleFlip(index)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h2>{card.title}</h2>
                    <p>{card.front}</p>
                  </div>
                  <div className="flip-card-back">
                    <p>{card.back}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="more-info-button" onClick={() => setShowModal(true)}>
          Click to know more
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content slider-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="nav-button prev" onClick={prevSlide}>
              <ArrowLeft size={24} />
            </button>

            <div className="slide">
              <h2>{slides[currentSlide].title}</h2>
              <div className="slide-content">
                {slides[currentSlide].content}
              </div>
            </div>

            <button className="nav-button next" onClick={nextSlide}>
              <ArrowRight size={24} />
            </button>

            <button className="modal-close" onClick={() => setShowModal(false)}>
              Close
            </button>

            <div className="slide-indicators">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}