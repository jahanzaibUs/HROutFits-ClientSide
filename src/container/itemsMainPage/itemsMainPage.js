import React, { Component } from "react";
import MensComponent from "../../component/Men/men";
import { connect } from "react-redux";
class MensContainert extends Component{
  
render(){
    return(
        <MensComponent 
        ProductMan={this.props.Product}
        />
        );
    }
}
const mapStateToProps = (state) => {
    return {
       Product: state.root.Data,
    }
}
function mapDispatchToProps(dispatch){
    // return{
    //   SaveDataToRedux: (data) => {dispatch(GetProductData(data))}
    // }
}
export default connect(mapStateToProps,mapDispatchToProps)(MensContainert);