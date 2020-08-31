import React,{ useState } from 'react';
import './App.css';
import Products from './component/product';
import Cart from './component/cart';
import Header from './component/header';
import Admin from './component/admin';
import Login from './component/login';

import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import Admin from './component/admin';



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const fileInput = useRef();
  
  // const uploadImage = () => {
  //   const uploadedFile = fileInput.current;
 
  //   axios.post("http://localhost:8000/upload", uploadedFile.files[0], {
  //     params: { filename: uploadedFile.files[0].name },
  //     onUploadProgress: (progressEvent) => {
  //       const percentCompleted = Math.round(
  //         (progressEvent.loaded * 100) / progressEvent.total
  //       );
  //       console.log(percentCompleted);
  //     },
  //   });
  // };
 


  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div>

    <div className="App">
    <header>
      <button onClick={() => navigateTo(PAGE_CART)}>
       סל הקניות  {getCartTotal()}
      </button>

      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
        מוצרים 
      </button>
       </header>
        {page === PAGE_PRODUCTS && (
      <Products cart={cart} setCart={setCart} />
       )}
        {page === PAGE_CART && (
      <Cart cart={cart} setCart={setCart} />
        )}
      </div>

    <Router>
    <div className="App">
      <Header title={title} />
      <Login />
      <Switch>
        <Route exact path="/">
          <Cart
            cart={cart}
            removeProductFromCart={handleRemoveProductFromCart}
          />
          <div className="Products">
            <h2>
              Products <SearchProduct searchForProduct={searchForProduct} />
            </h2>
            {products.length && (
              <Products
                products={products}
                addProductToCart={handleAddOneProduct}
                removeProductFromCart={handleRemoveOneProduct}
                searchForProduct={searchForProduct}
              />
            )}
          </div>
        </Route>
        <Route exact path="/Admin">
          <Header />
          <Admin />
        </Route>
        <Route path="/products/:idParam">
          <Product/>
          <Cart/>
        </Route>
        <Route path="/register">
          <RegistrationForm
            showError={updateErrorMessage}
            updateTitle={updateTitle}
          />
        </Route>
        <Route path="/login">
          <Login
            showError={updateErrorMessage}
            updateTitle={updateTitle}
          />
        </Route>
      </Switch>
    </div>
  </Router>


  </div>
  );
 }

export default App;
