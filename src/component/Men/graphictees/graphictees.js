import React, { Component } from "react";
import {Link} from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
// import Shirt from "../../assets/Mens/shirts.jpg"
class GraphicsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            // Items: [
            //         {Title: "Red Hoodie", Price: "1200", img: {Shirt}, },
            //         {Title: "Red Hoodie", Price: "1200", img: {Shirt}, }
            //     ]
        }
    }

    render(){

        return (
            <MDBContainer className="mt-5">
        <h1>Graphics Tees Arrivals</h1>
      <MDBRow>
          {
              this.props.ProductMensGTees.map((text,index) =>{
                  console.log(text.img)
                  return(
                        <MDBCol md="4" key={index}>
                            <Link to="/cart">
                            <MDBCard style={{ width: "20rem" }}>
                                <MDBCardImage className="img-fluid" src={text.Image}
                                // "https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>{text.Name}</MDBCardTitle>
                                <MDBCardText className="FontColorDefault FontSize22px FontWeightBold">
                                Rs. {text.Price}
                                </MDBCardText>
                                <MDBBtn href="#" className="Width100" >Add to Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                            </Link>
                        </MDBCol>
                  )
              })
          }
           </MDBRow>
        </MDBContainer>
        )   
    }
}
export default GraphicsComponent;