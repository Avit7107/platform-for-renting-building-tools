import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Header() {

  return (
      <div className="header">
          <div className="header_text"> השכרת כלי עבודה
            <Link to="/admin">
                  <button>הגדות המוצרים</button>
              </Link>
          </div>
      </div>
  )
}



export default Header;



