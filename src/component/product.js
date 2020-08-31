import React, { useState } from 'react';
import LogIn from './login';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Checkbox from '@material-ui/core/Checkbox';
// import Avatar from '@material-ui/core/Avatar';




// const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const RENTEL = 'Tool rental';
const UTILITY = 'utility';
// function CheckboxListSecondary() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([1]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

export default function Products({ setCart, cart }) 
{
 const [products] = useState([
    {
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      category:RENTEL,
      id:1,
      name: 'דיסק גדול',
      cost: 66,
      image:
        'https://www.partclick.co.il/uploads/images/400199_20200219132105.jpg',
    },
    {
      category:RENTEL,
      id:2,
      name: 'רתכת',
      cost: 100,
      image:
        'https://www.brandtools.co.il/ProductsImages/V676202.jpg',
    },
    {
      category:RENTEL,
      id:3,
      name: 'דיסק קטן',
      cost:  45,
      image:
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/3464229/extra_large/68ef7063266b3d966db32ab666b9a0c9.jpg',
    },
 
  ]);
  const search= (product) => {
    let newSearch = [...product];
    let itemSearch = newSearch.find(
      (item) => product.name === item.name
    );
  };
  const [category, setCategory] = useState(RENTEL);

  //  const getData = () => {
  //   fetch(`http://localhost:8000/products`)
  //   .then(response => response.json())
  //   .then(responseData => {
  //       // console.log(responseData)
  //       this.setState({
  //           data:responseData,
  //           searchString:responseData
  //       })
  //     },
  //   }

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  

 

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
    <h1>  ההשכרה היא לפי מספר הימים, אין אפשרות להשכיר לשעות</h1>
    <h2> יום ללא שימוש יחושב כיום השכרה</h2>
         <span> <LogIn/> </span>
      <h1>השכרת כלי עבודה</h1>
      בחר כלי להשכרה
     
      <span>
      <h4> חפש כלי</h4>
      {/* <Search
      placeholder="חפש כלי"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
       /> */}
      <br />
     <br />


      </span>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4> {product.cost} שח</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              הוסף לסל
            </button>
          </div>
        ))}
       
    
      </div>
 
    </>
  );
    
}





// import React, { Component, useState } from "react";
// import App from './../App';
// import "./product.css";
// import Cart from './cart';

// const Product = (props) => {
//   const [quantity, setQuantity] = useState(props.quantity);
//   return (
//     <div>
//       <div className="product">
//         <h2>{props.title}</h2>
//         <div>
//           <img className="image" src={props.image} />
//         </div>
//         <div>quantity: {props.quantity}</div>
//         <div>  price:  {props.price}  </div>
      

//         <button onClick={() => props.addtocart()}> + </button>

//         <button onClick={() => setQuantity(props.lessCount)}> - </button>
//       </div>
//     </div>
//   );
// };

// export default Product;
