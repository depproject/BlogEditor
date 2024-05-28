import { Link } from "react-router-dom";
import Navbutton from "./Navbutton";
import { useState } from "react";

// Function to toggle the button's style


const Navbar = ({inx,setinx}) => {
console.log(inx);

  return (
    <nav className="navbar" >
      <div>Categories</div>
      <div className="links" style={{marginLeft:"30px", marginTop:"30px", fontWeight:"bold"}}>
      
      <Navbutton ind={inx} i="1" text="All" change={setinx} />
      <Navbutton ind={inx} i="2" text="Custom" change={setinx} />
      <Navbutton ind={inx} i="3" text="ICP" change={setinx} />
      <Navbutton ind={inx} i="4" text="Mission" change={setinx} />
      <Navbutton ind={inx} i="5" text="Product" change={setinx} />
      


      
        
        <Link to="/add" style={{marginLeft:"400px",width:"90px",height:"25px",justifyContent:"center",
          color: 'white', 
          backgroundColor:"rgb(245, 103, 68)",
          borderRadius: '8px' 
        }}>Add Topic &gt;</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;