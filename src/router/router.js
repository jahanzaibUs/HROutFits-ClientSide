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
import AdminContainert from "../container/admin/admin";
import MensContainert from "../container/itemsMainPage/itemsMainPage";
import WomenWearContainer from '../container/womensWear';
import { FireStore } from "../component/firebase";
import {connect} from "react-redux"
import { GetProductData } from "../store/actions/getdata";
import MensShirtsContainer from "../container/mens/shirts";
import MensBasicsTeesContainer from '../container/mens/basictees';
import MensGraphicsTeesContainer from '../container/mens/graphicstees';
class RouteObject extends Component{
  constructor(props){
      super(props);
      this.state = {
          AllData: [],
      }
  }
componentWillMount(){
    const array = [];
    FireStore.collection("Product").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
            // console.log(doc.id, " => ", doc.data());
        });
        // this.props.SaveDataToRedux(array)
        // console.log(array);
    });
    setTimeout(() => {
        // console.log(array)
        // this.setState({AllData: array});
        this.props.SaveDataToRedux(array)

    }, 1000);
}

render(){
    // console.log(this.state.AllData)
    // console.log(this.props.Product, 'StateRedux')
    const landingpageBanner = ({match}) =>(

        <div>
        <NavBarContainert />
        <Route path={match.url} exact component={LandingPageContainert} />
        <Route path={match.url} exact component={NewArrivalContainert} />
        <Route path={match.url+"mens-items"} exact component={MensContainert} />
        <Route path={match.url+"womens-winter-wear"} exact component={WomenWearContainer} />
        <Route path={match.url+"mens-shirts"} exact component={MensShirtsContainer} />
        <Route path={match.url+'mens-basics-tees'} exact component={MensBasicsTeesContainer} />
        <Route path={match.url+'mens-graphics-tees'} exact component={MensGraphicsTeesContainer} />



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
function mapStateToProps(state){
    return {
       Product: state.root.Data,
    }
}

function mapDispatchToProps(dispatch){
    return{
      SaveDataToRedux: (data) => {dispatch(GetProductData(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteObject);