import React, { useState } from "react";
import "./CardOptionStyle.css";

function LiquidCard() {
  const [cardInfo, setCardInfo] = useState(true);




  return (
    <div className="cardStyle">
      {cardInfo ? (
        <div className="cardInfo">
          <h2 className="cardTitle">Liquid Card</h2>
          <p>
            Credit Available: <strong>£3000</strong>
          </p>

          <button onClick={() => setCardInfo(false)} className="showMoreButton">
            Show More
          </button>
        </div>
      ) : (
        <div className="cardInfo">
          <h2 className="cardTitle">Liquid Card</h2>
          <p>
            Credit Available: <strong>£3000</strong>
          </p>
          <p>
            Apr: <strong>33.9%</strong>
          </p>
          <p>
            Balance Transfer Offer Duration: <strong>12 Months</strong>
          </p>
          <p>
            Purchase Offer Duration: <strong>6 Months</strong>
          </p>
          <p>
            Credit Available: <strong>£3000</strong>
          </p>
          <button onClick={() => setCardInfo(true)} className="showLessButton">
            Show Less
          </button>
        </div>
      )}

      {/* <div className="showMore"> */}
      {/* <button onClick={() => setCardInfo(true)} className="showMoreButton">
          Show More
        </button> */}
      {/* <button onClick={() => setCardInfo(false)} className="showMoreButton">
          Show Less
        </button>
      </div> */}
      {/* 
      <div className="cardInfo">
        <p>
          Apr: <strong>33.9%</strong>
        </p>
        <p>
          Balance Transfer Offer Duration: <strong>12 Months</strong>
        </p>
        <p>
          Purchase Offer Duration: <strong>6 Months</strong>
        </p>
        <p>
          Credit Available: <strong>£3000</strong>
        </p>
      </div>
    </div> */}
    </div>
  );
}

export default LiquidCard;
