import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import NavBarContainert from "../container/NavBar/navbar";
import LandingPageContainert from "../container/landingpage";
import NewArrivalContainert from "../container/newarrival/newarrival";

class RouteObject extends Component{
  


render(){
    const landingpageBanner = ({match}) =>(

        <div>
        <NavBarContainert />
        <Route path={match.url} exact component={LandingPageContainert} />
        <Route path={match.url} exact component={NewArrivalContainert} />
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