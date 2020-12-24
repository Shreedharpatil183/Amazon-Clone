import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useStatevalue()
  //useEffect <<<<<<<<<<<<<<<<<< Powerfil
  // piece of code which runs on given condition

  useEffect(()=> {
    const unsubscribe =  auth.onAuthStateChanged((authUser)=> {
      if (authUser){
        //the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
      else {
        //the user is loggged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return ()=> {
      //Any operation cleanup goi iin here
      unsubscribe()
    }

  }, [])

  console.log("User is =>",user)

  return (
    <Router>
    <div className="app">
      <Switch>
        {/* This is checkout page */}
        <Route path="/checkout">
          <Header></Header>
          <Checkout></Checkout>
        </Route>
        {/* This is login page */}
        <Route path="/login">
          <Login></Login>

        </Route>

        {/* This is Home page */}
        <Route path="/">
          <Header></Header>
          <Home></Home>          
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
