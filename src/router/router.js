import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import NavBarContainert from "../container/NavBar/navbar";
import LandingPageContainert from "../container/landingpage";
import NewArrivalContainert from "../container/newarrival/newarrival";
import FooterContainert from "../container/footer/footer";
import CartContainert from "../container/cart/cart";
import MensContainert from "../container/itemsMainPage/itemsMainPage";

class RouteObject extends Component{
  


render(){
    const landingpageBanner = ({match}) =>(

        <div>
        <NavBarContainert />
        <Route path={match.url} exact component={LandingPageContainert} />
        <Route path={match.url} exact component={NewArrivalContainert} />
        <Route path={match.url+"mens-items"} exact component={MensContainert} />
        <Route path={match.url+"cart"} exact component={CartContainert} />
        
        <FooterContainert />
    </div>
        )
    return(
           <Router>
                    <Route path='/'  component={landingpageBanner} />
            
                    
        </Router>

        );
    }
}

export default RouteObject;