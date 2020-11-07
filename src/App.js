import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ComponentRenderer from "ComponentRenderer.js";
// import MainLandingPage from "MainLandingPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import RestaurantLandingPage from "demos/RestaurantLandingPage";
const  App =()=> {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
    <AnimatedCursor 
    innerSize={10}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}/>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/">
          <RestaurantLandingPage />
        </Route>
        <Route path="/*">
          <RestaurantLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default GoogleApiWrapper({
  // apiKey: '01955D-BFF32F-C78A00'
  apiKey:'ac1684d971c32541'
})(App);
