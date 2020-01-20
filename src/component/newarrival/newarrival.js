import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import Shirt from "../../assets/Mens/shirts.jpg"
class NewArrivalComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
        Items: [
                {Title: "Red Hoodie", Price: "1200", img: {Shirt}, },
                {Title: "Red Hoodie", Price: "1200", img: {Shirt}, }
            ]
    }
}
componentWillReceiveProps(nextProps){
  console.log(nextProps);
}
// GetProps(){
//   this.setState({Items: this.props.ProductDetails})
// }
static getDerivedStateFromProps(props, state) {
  console.log(props, 'yesss')
  if (props.ProductDetails !== state.Items) {
    return {
      Items: props.ProductDetails,
    };
  }

  // Return null if the state hasn't changed
  return null;
}
render(){
  console.log(this.props.ProductDetails, this.state.Items)

  return (
    <MDBContainer className="mt-5 mb-5">
        <h1>New Arrivals</h1>
      <MDBRow>

        
      {
        // this.state.Items.length > 0 ?
              this.state.Items.slice(0, 5).map((text,index) => {

              // })
              // this.state.Items.map((text,index) =>{
                  // console.log(text.img)
                  return(
                        <MDBCol md="4" key={index} className='MarginBottom5'>
                        <MDBCard style={{ width: "20rem" }}>
                            <MDBCardImage className="img-fluid" src={
                              // text.img.Shirt
                            text.Image
                            }
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle>{text.Name}</MDBCardTitle>
                            <MDBCardText className="FontColorDefault FontSize22px FontWeightBold">
                              Rs. {text.Price}
                            </MDBCardText>
                            <MDBBtn href="#" className="Width100" >Add to Cart</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
            

                  )
              })
              // :
              // null
          }
            
   
      </MDBRow>
    </MDBContainer>
  )}
}

export default NewArrivalComponent;