import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: '',
    image: ''
  }

  handleInput = (input, stateName) => {
    this.setState({
      [stateName]: input
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newToy = {
      ...this.state,
      likes: 0
    }
    console.log(newToy)

    //what fetch would look like if this app would let me update

    // fetch('http://localhost:3000/toys/',{
    //   method: 'POST',
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(newToy)
    // })
    // .then(res => res.json())
    // .then(console.log)
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={e => this.handleInput(e.target.value, e.target.name)} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={e => this.handleInput(e.target.value, e.target.name)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
