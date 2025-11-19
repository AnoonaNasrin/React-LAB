import { useState } from "react";

export default function App() {
  
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  // function spendGiftCard() {
  //   const updatedGiftCard = {...giftCard}
  //         updatedGiftCard.text = "Your coupon has been used."
  //         updatedGiftCard.instructions = "Please visit our restaurant to renew your gift card."
  //         updatedGiftCard.valid = false
  //   setGiftCard(updatedGiftCard)

  // }
  // or 
  function spendGiftCard() {
        setGiftCard(prev=>{
          return{
            ...prev,
            text:"Your coupen has been used.",
            instructions:"Please visit our restaurant to renew your gift card.",
            valid:false
          }
        })
     }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
