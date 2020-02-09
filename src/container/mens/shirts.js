import React, { Component } from "react";
import MensShirtsComponent from "../../component/Men/shirts/shirts";
import { connect } from "react-redux";
import { FireStore } from "../../component/firebase";
import { GetProductData } from "../../store/actions/getdata";
class MensShirtsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllData: []
        }
    }
    componentDidMount(){
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
            this.setState({AllData: array});
            // this.props.SaveDataToRedux(array)
    
        }, 500);
    }
    
render(){
    return(
       <MensShirtsComponent 
       ProductMensShirt={this.props.Product}
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
        SaveDataToRedux: (data) => {dispatch(GetProductData(data))}
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(MensShirtsContainer);