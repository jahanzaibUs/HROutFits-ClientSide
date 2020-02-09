import React, { Component } from "react";
import { connect } from "react-redux";
import { FireStore } from "../../component/firebase";
import { GetProductData } from "../../store/actions/getdata";
import GraphicsComponent from "../../component/Men/graphictees/graphictees";
class MensGraphicsTeesContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllData: []
        }
    }
    componentWillMount(){
        const array = [];
        FireStore.collection("Product").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                array.push(doc.data());
            });
        });
        setTimeout(() => {
            this.setState({AllData: array});
        }, 500);
    }
    
render(){
    return(
       <GraphicsComponent
       ProductMensGTees={this.state.AllData}
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
export default connect(mapStateToProps,mapDispatchToProps)(MensGraphicsTeesContainer);