import React, { useState } from 'react'
import "./CardOptionStyle.css";

function StudentLifeCard() {
  const [cardInfo, setCardInfo] = useState(true);
  return (
    <>
      <div className="cardStyle">
        {cardInfo ? (
          <div className="cardInfo">
            <h2 className="cardTitle">Student Life</h2>

            <p>
              Credit Available: <strong>£1200</strong>
            </p>
            <button
              onClick={() => setCardInfo(false)}
              className="showMoreButton"
            >
              Show More
            </button>
          </div>
        ) : (
          <div className="cardInfo">
            <h2 className="cardTitle">Student Life</h2>
            <p>
              Credit Available: <strong>£1200</strong>
            </p>
            <p>
              Apr: <strong>18.9%</strong>
            </p>
            <p>
              Balance Transfer Offer Duration: <strong> 0 months </strong>
            </p>
            <p>
              Purchase Offer Duration:<strong> 6 Months </strong>
            </p>
            <p>
              Credit Available: <strong>£1200</strong>
            </p>
            <button
              onClick={() => setCardInfo(true)}
              className="showLessButton"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default StudentLifeCard;