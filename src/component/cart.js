import React from 'react';


export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>סל הקניות</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>הסר הכל</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <h4> מספר ימי השכרה</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              הסר 
            </button>
          </div>
        ))}
      </div>

      <h2>סך לתשלום: {getTotalSum()}</h2>
      <button>שלם</button>
    </>
  );
}





// import React, { Component, useState } from "react";
// import App from "./../App";
// import Product from './product';

// const Cart = (props) => {
//     const [Cart, setCart] = useState([0]);


//     return(

        
//     <div>
//            <div>quantity: {props.quantity}</div>

//           <button onClick={() =>
//        setCart(Cart + 1)}>
//                   +
//            </button>
    
//   </div>

//     );
// }
// export default Cart;