import React, { Component } from 'react';

class ToyForm extends Component {
  
  state = {
    name: "",
    image: ""
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: this.state.name,
      image: this.state.image,
      likes: 0
    }

    console.log(data)
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(newToy => {
      this.props.handleNewToy(newToy)
    })
  }

  render() {
    return (
      <div className="container">
         {/* use onClick for the submit button OR onSubmit for the form */}
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleInputChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleInputChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
