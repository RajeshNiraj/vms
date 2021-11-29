import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from "./pages/ShopPage/shoppage-component";

//with react router 6 Switch does not exist anymore
//now it becomes Routes, then you need to import Routes
//importing BrowserRouter has not changed
//in v6 we add a element instead of component since now
//it is not a child of route. for exaaple :- 
//<Route exact path="/" element={<HomePage/>} /> 
//it will pass the jsx element.
//with version 6 the 'exact' prop is gone.
//it will now look for exact matches if we defin the paths
//the order of routes also does not match any more in v6.
//{useParams} to get the parameter in v5. the code is same for v6.
//instead of 'Redirect' , its 'Navigate' in v6.
//we should use as element tag as:-
//element={<Navigate to="/welcome"/>} instead of using as a child //as in v5.
//'Navigate replace => if we want to 'Redirect' full as in v5.
//add <Route path="/welcome/*" if we nned to display nested routes
// as in /welcome/new-user also gets loaded. the paths of the 
//nested routes we dont need to add /welcome/new-user and we 
//need to have only the extra pathe that is "new-user" becasue
//it is relative to the parent . even if you had the Link it will
//also be relative and it will be <Link to="new-user"/>
//we can also define nested routes in the parent as
//        <Routes> 
//          <Route path="/welcome/*" element={<HomePage/>}>
//               <Route path="new-user" element={<p>Hello</p>}/>
//          </Route>
//          <Route path="/hats" element={<HatsPage/>} /> 
//        </Routes>  

// to know the child where the nested paragraph should be insered
//in v6 we have 'Outlet' as below 
//import {Link, Outlet} from 'react-router-dom'
// const Welcome = () => {
//   const navigate = useNavigate();
//     return (
//       <Section>
//          <h1>The Welocme Page</h1>
//         <Link to="new-user">Home Page</Link>
//          <Outlet />
//       </Section> 
//     ) 
// };

//in v6 instead of useHistory we have useNavigate hook
//const navigate = useNavigate();

//if v5 we have prompt if we accidently leave the page if 
//we have changes.
//in v6

// const HatsPage = () => (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div> 
// ); 


function App() {
  return (
    <div>   
      <Routes> 
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/shop" element={<ShopPage/>} /> 
      </Routes>     
    </div>
  );
}

export default App;
