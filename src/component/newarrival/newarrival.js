import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import Shirt from "../../assets/Mens/shirts.jpg"
import ReactAliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
// import { firestore } from 'firebase';
import { FireStore } from '../firebase';
class NewArrivalComponent extends Component{
  // items = [1, 2, 3, 4, 5]
  items: []
 constructor(props){
super(props);
   this.state = {
     currentIndex: 0,
     responsive: { 1024: { items: 3 } },
     galleryItems: this.galleryItems(),
     Items: []
    }
    
  }
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>
 
  galleryItems() {
    return this.items.map((text,index) =>{
      console.log(text, 'tex')
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
  }
 



//   constructor(props){
//     super(props);
//     this.state = {
//         Items: [
//                 {Title: "Red Hoodie", Price: "1200", img: {Shirt}, },
//                 {Title: "Red Hoodie", Price: "1200", img: {Shirt}, }
//             ]
//     }
// }
// componentWillMount(){
 
// }
componentDidMount(){

  // console.log(nextProps);
  const array = [];
  FireStore.collection("Product").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          array.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
      });
      // this.props.SaveDataToRedux(array)
      console.log(array);
  });
  setTimeout(() => {
    this.setState({Items: array});
    this.items= array
    // console.log(array)
      // this.props.SaveDataToRedux(array)

  }, 1000);
}
// GetProps(){
//   this.setState({Items: this.props.ProductDetails})
// }
// static getDerivedStateFromProps(props, state) {
//   console.log(props, 'yesss')
//   if (props.ProductDetails !== state.galleryItems) {
//     return {
//       galleryItems: props.ProductDetails,
//     };
//   }

//   // Return null if the state hasn't changed
//   return null;
// }
render(){
  console.log(this.props.ProductDetails, this.state.Items)
  console.log(this.state.galleryItems, 'gaell')
  console.log(this.items, 'items')

  const { galleryItems, responsive, currentIndex } = this.state

  return (
    <MDBContainer className="mt-5 mb-5">
        <h1>New Arrivals</h1>

        <div>
        <ReactAliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
 
        <ul>{this.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button>
      </div>




      {/* <MDBRow>

        
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
            
   
      </MDBRow> */}
    </MDBContainer>
  )}
}

export default NewArrivalComponent;