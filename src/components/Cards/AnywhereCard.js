import React, {useState} from 'react'
import "./CardOptionStyle.css";

function AnywhereCard() {
  const [cardInfo, setCardInfo] = useState(true);
  return (
    <div className="cardStyle">
      {cardInfo ? (
        <div className="cardInfo">
          <h2 className="cardTitle">Anywhere Card</h2>
          <p>
            Credit Available: <strong>£300</strong>
          </p>
          <button onClick={() => setCardInfo(false)} className="showMoreButton">
            Show More
          </button>
        </div>
      ) : (
        <div className="cardInfo">
          <h2 className="cardTitle">Anywhere Card</h2>
          <p>
            Credit Available: <strong>£300</strong>
          </p>
          <p>
            Apr: <strong>33.9%</strong>
          </p>
          <p>
            Balance Transfer Offer Duration: <strong>0 Months</strong>
          </p>
          <p>
            Purchase Offer Duration: <strong>0 Months</strong>
          </p>
          <p>
            Credit Available: <strong>£300</strong>
          </p>
        <button onClick={() => setCardInfo(true)} className="showLessButton">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
  
}

export default AnywhereCard;