import React, { useState } from "react";
import "./AIAdvisor.css";

const AIAdvisor = () => {
  const [showSparkle, setShowSparkle] = useState(false);

  const handleClick = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  return (
    <div className="ai-advisor-container">
      <button className="trezo-button" onClick={handleClick}>
        Trezo
        {showSparkle && (
          <span className="sparkle">Your friend is coming soon!</span>
        )}
      </button>
    </div>
  );
};

export default AIAdvisor;
