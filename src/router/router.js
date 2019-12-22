import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import NavBarContainert from "../container/NavBar/navbar";
import LandingPageContainert from "../container/landingpage";
import NewArrivalContainert from "../container/newarrival/newarrival";
import ItemsMainPageContainert from "../container/itemsMainPage/itemsMainPage";
import FooterContainert from "../container/footer/footer";
import CartContainert from "../container/cart/cart";
import AdminContainert from "../container/admin/admin";

class RouteObject extends Component{
  


render(){
    const landingpageBanner = ({match}) =>(

        <div>
        <NavBarContainert />
        <Route path={match.url} exact component={LandingPageContainert} />
        <Route path={match.url} exact component={NewArrivalContainert} />
        <Route path={match.url+"mens-items"} exact component={ItemsMainPageContainert} />
        <Route path={match.url+"cart"} exact component={CartContainert} />
        <Route path='/jahanzaibusman'  component={AdminContainert} />        
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