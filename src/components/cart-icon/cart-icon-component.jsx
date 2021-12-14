import { React } from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon-component.scss"

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//the first argument can be null as we are not doing wiht the 
//toggleCartHidden in this component. so mapStateToProps can
//be null. we are only setting the value.
export default connect(null,mapDispatchToProps)(CartIcon);
