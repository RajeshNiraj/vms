import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/cart-icon-component";
import CartDropDown from "../cart-dropdown/cart-dropdown-component";
import { ReactComponent as Logo } from "../../assets/crown.svg"

import "./header-styles.scss"

const Header = ( { currentUser , hidden }) => (
    
    <div className="header">    
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
                
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                )}
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
        
    </div>
);

//user: cart is the root reducer. 
//we are getting the user from the root reducer which has the user
//reducer and we get the currentUser value from the user reducer.
const mapStateToProps = ({user : {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden   
})

//initial we will get the null value as the current user.
export default connect(mapStateToProps)(Header);
