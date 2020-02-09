import React, { Component } from "react";

import NavBarComponent from "../../component/NavBar/navbar";
import WomenWearComponent from "../../component/Women/women";
import { connect } from "react-redux";
class WomenWearContainer extends Component{
  
render(){
    return(
       <WomenWearComponent
       ProductWear={this.props.Product}
       />
        );
    }
}
function mapStateToProps(state){
    return {
       Product: state.root.Data,
    }
}

function mapDispatchToProps(dispatch){
    
}
export default connect(mapStateToProps,mapDispatchToProps)(WomenWearContainer);