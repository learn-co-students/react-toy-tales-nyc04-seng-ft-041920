import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  // set the form state
  setFormState = (event) => {
    // set state generically
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // creates object from state and submits object to App component
  handleSubmit = (event) => {
    event.preventDefault()

    // create newToy object to be sent to the App component
    const newToy = {
      name: this.state.name,
      image: this.state.image,
      likes: 0
    }
    
    // send the newToy as an argument to the callback function
    this.props.addToy(newToy)
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <form onSubmit={(event) => this.handleSubmit(event)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" onChange={(event) => this.setFormState(event)} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" onChange={(event) => this.setFormState(event)} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
