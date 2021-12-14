import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from "./pages/ShopPage/shoppage-component";
import SignInSignOut from "./pages/sign-in/sign-in-Sign-out-component";
import { auth } from "./firebase/firebase-utils"
import Header from "./components/header/header-component";

import { setCurrentUser } from "./redux/user/user-actions";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      //console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div> 
        <Header />  
        <Routes> 
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/shop" element={<ShopPage/>} /> 
             <Route path="/signin" element={ 
              this.props.currentUser ? (
                <Navigate to ="/" />) : 
                  (<SignInSignOut/>)}  /> 
            {/* //<Route path="/signin" element={<SignInSignOut/>} />  */}
        </Routes>     
      </div>
    );
  };
}

//to get the current state 
const mapStateToProps = ({ user }) => ({
  currentUser : user.currentUser
})

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user ))
})

export default connect(mapStateToProps,mapDispatchProps)(App);
