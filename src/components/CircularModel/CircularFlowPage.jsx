import { useState } from "react";
import rc from "../../assets/icons/recycle.png";
import mcf from "../../assets/icons/MCF.png";
import rd from "../../assets/icons/resilientdesign.png";
import "./CircularFlowPage.css";
import cycleImg from "../../assets/Cycle.png";

const CircularFlowPage = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const cards = [
    {
      title: "Zero Waste Value Cycling",
      icon: rc,
      shortDesc:
        "Built for Mars, not disposal. Every part is designed for repair, reuse, and reinvention.",
      longDesc:
        "Every component of the antenna is designed for full lifecycle use within the Martian environment. By applying Design for Disassembly, Repair, and Reuse (DFADR) principles, each element can be maintained, reconfigured, or repurposed using locally available materials and astronaut-assisted repairs. This zero-waste approach minimizes reliance on Earth resupply.",
    },
    {
      title: "Material Cascade Fidelity",
      icon: mcf,
      shortDesc:
        "We preserve what’s already been perfected. Each component is reused or upcycled.",
      longDesc:
        "Rather than degrading materials through destructive recycling, the design retains the embodied value of refined components. Structural and electronic parts are reused or upcycled into new, high-value configurations, thus maintaining their integrity across multiple lifecycles. This strategy ensures energy invested in manufacturing continues to yield benefits.",
    },
    {
      title: "Resilient Design Philosophy",
      icon: rd,
      shortDesc:
        "Performance that endures. Designed to thrive through dust, cold, and radiation.",
      longDesc:
        "On Mars, with dust storms, near-vacuum, and extreme temperature swings, resilience outweighs raw performance. The antenna’s solid-state design and modular repairability ensure operation under stress. By prioritizing reliability, maintainability, and adaptability, it sustains performance over short-term optimization.",
    },
  ];

  const handleCardFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const moreInfo = {
    title: "Circular Economy in Space",
    content: `Our antenna design embodies circular economy principles for sustainable space exploration:

    1. Resource Optimization: 100% resource efficiency through careful material selection and innovative design.
    
    2. Longevity: 6-month maintenance intervals showcase robust construction and reliability.
    
    3. Efficient Assembly: 7-hour assembly time balances quick deployment with precision.
    
    4. Sustainable Materials: Using space-grade materials that can be recycled or repurposed.
    
    5. Modular Design: Easy to repair, upgrade, and maintain in Mars' challenging environment.
    
    This approach ensures long-term sustainability and resource conservation in Mars missions.`,
  };

  return (
    <div className="cf-container">
      <div className="page-heading">
        <h1>Sustainable Antenna Design</h1>
      </div>
      <div className="cycle-image-container">
        <img
          src={cycleImg}
          alt="Circular Economy Cycle"
          className="cycle-image"
        />
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
            onClick={() => handleCardFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  className="feature-img"
                />
                <h3>{card.title}</h3>
                <p>{card.shortDesc}</p>
              </div>
              <div className="flip-card-back">
                <p>{card.longDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularFlowPage;
