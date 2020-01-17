import React, { Component } from "react";
import NewArrivalComponent from "../../component/newarrival/newarrival";
import { connect } from "react-redux";
class NewArrivalContainert extends Component{
  
render(){
    return(
        <NewArrivalComponent 
        ProductDetails={this.props.Product}
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
    return{
    //   SaveDataToRedux: (data) => {dispatch(GetProductData(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivalContainert);