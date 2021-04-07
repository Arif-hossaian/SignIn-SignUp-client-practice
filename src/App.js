import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Sign-In/SignIn.jsx"
import SignUp from "./components/Sign-Up/SignUp.jsx"
import Contact from './components/contact-With-Me/Contact';
import About from './components/About-Me/About';

const App = () => {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
