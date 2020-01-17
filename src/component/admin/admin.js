import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {Storage, FireStore} from "../firebase";
class AdminComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      fname: "",
      Price: 0,
      email: "",
      city: "",
      state: "",
      zip: "",
      image: null,
      url: "",
      progress: 0,

    };
    this.imegesState = this.imegesState.bind(this);
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    // const {image} = this.state;


    // const uploadTask = Storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //  (snapshot) => {
    //   const progress = Math.round(
    //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //   );
    //   this.setState({ progress });
    //  },
    //  (error) => {
    //   console.log(error);
    //  },
    //  () => {
    //     Storage
    //     .ref("images")
    //     .child(image.name)
    //     .getDownloadURL()
    //     .then(url => {
    //       console.log(url, "url")
    //       this.setState({ url });
    //     });
    //  }
    // )

    // setTimeout(() => {
      let data ={
        Name: this.state.fname,
        Price: this.state.Price,
        Image: this.state.url,
      }
      console.log(data, 'yes')
      FireStore.collection('Product').add(data).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Order Submitted Successfully: ")
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    // }, 5000);
  };

  imegesState= e => {
    console.log(e.target.files);
    if(e.target.files[0]){
      const Image = e.target.files[0];
      this.setState({image: Image})

      const {image} = this.state;
      const uploadTask = Storage.ref(`images/${Image.name}`).put(Image);
    uploadTask.on(
      "state_changed",
     (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
     },
     (error) => {
      console.log(error);
     },
     () => {
        Storage
        .ref("images")
        .child(Image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url, "url")
          this.setState({ url });
        });
     }
    )


    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.image);
    console.log(this.state)
    return (
      <div className="MarginBottom5">
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Name of Product:
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Product Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Price:
              </label>
              <input
                value={this.state.Price}
                name="Price"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Price"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            
          </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <div className="custom-file">
            <input
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
                required
                onChange={this.imegesState}
                />
            <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
                >
                Choose file...
            </label>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <img src={this.state.url || "http://via.placeholder.com/400x250"} width="400px" alt="Image" />
          </MDBCol>
        </MDBRow>
       
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default AdminComponent;