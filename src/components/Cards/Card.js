import React, {useState} from 'react'
import "./CardOptionStyle.css";
import cardContent from './CardContent.json'

const Card = props => {
  const [cardInfo, setCardInfo] = useState(true);
  return (
    <div className="cardStyle">
      <div className="cardInfo">
        <h2 className="cardTitle">{ props.selectCard }</h2>
        { cardInfo ?
          <>
            <p>
              Credit Available: <strong>{ cardContent[ props.selectCard ].creditAvailable }</strong>
            </p>
            <button onClick={() => setCardInfo(false)} className="showMoreButton">
              Show More
            </button> 
          </>
        :
          <>
            <p>
              Apr: <strong>{ cardContent[ props.selectCard ].apr }</strong>
            </p>
            <p>
              Balance Transfer Offer Duration: <strong>{ cardContent[ props.selectCard ].balanceTransferOfferDuration }</strong>
            </p>
            <p>
              Purchase Offer Duration: <strong>{ cardContent[ props.selectCard ].purchaseOfferDuration }</strong>
            </p>
            <p>
              Credit Available: <strong>{ cardContent[ props.selectCard ].creditAvailable }</strong>
            </p>
            <button onClick={() => setCardInfo(true)} className="showLessButton">
              Show Less
            </button> 
          </>
        }
      </div>
    </div>
  );
  
}

export default Card;  