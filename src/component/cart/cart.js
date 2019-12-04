import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Shirt from "../../assets/Mens/shirts.jpg"
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

class CartComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
           Quantity: 0,
        }
    }
    IncrementQauntity=()=>{
        console.log("yes")
        this.setState({Quantity: this.state.Quantity + 1})
    }
    DecrementQauntity = () => {
        
        if(this.state.Quantity >0)
        this.setState({Quantity: this.state.Quantity - 1})
    }
    render(){

        return (
            <MDBContainer className="mt-5">
            <MDBRow>
            <MDBCol md="4">
                    <img src={Shirt} alt="shirt" Width="100%" />
            </MDBCol>
            <MDBCol>
                <label>
                AKG Wired Ear Phones with high stereo Bass, 3.5mm Jack with 2 Extra pairs of EarBuds, Bass Sound, 
                Noise Cancellation mic, For all Phones/Laptops
                </label>
                <br />
                <label>
                    Rs. 320
                </label>
                <br />
                <label>
                    Quantity: <MDBBtn className="Padding0" onClick={this.DecrementQauntity}><FaAngleLeft /></MDBBtn> 
                    {this.state.Quantity}  
                    <MDBBtn className="Padding0" onClick={this.IncrementQauntity}><FaAngleRight /></MDBBtn>
                </label>
                <br />
                <MDBBtn>Buy Now</MDBBtn>
            </MDBCol>
           </MDBRow>
        </MDBContainer>
        )   
    }
}

export default CartComponent;