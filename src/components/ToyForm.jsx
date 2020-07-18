import React, { Component } from 'react';

class ToyForm extends Component {
  toyNameInput = React.createRef()
  toyImageInput = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      name: this.toyNameInput.current.value,
      image: this.toyImageInput.current.value,
      likes: 0
    }
    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(newToy => {
      this.props.addToy(newToy)
    })
    e.currentTarget.reset()
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" ref={this.toyNameInput}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" ref={this.toyImageInput}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
