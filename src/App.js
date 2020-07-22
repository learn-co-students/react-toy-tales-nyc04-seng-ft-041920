import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
      .then(r => r.json())
      .then(toys => this.setState({
        toys: toys
      }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (e) => {
    e.preventDefault()
    const newToy = {
      name: e.target.name,
      image: e.target.image,
      likes: 0
    }

    fetch(`http://localhost:3000/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(r => r.json())
      .then(toy => this.setState({
        toys: [...this.state.toys, toy]
      }))
  }

  removeToy = toyToRemove => {
    const updatedToyData = this.state.toys.filter(toy => toy.id !== toyToRemove.id)

    this.setState({
      toys: updatedToyData
    })

    fetch(`http://localhost:3000/toys/${toyToRemove.id}`, {
      method: "DELETE"
    })
  }

  addLike = toyToAddLike => {
    const likedToy = this.state.toys.filter(toy => toy.id === toyToAddLike.id)
    const toyIndex = this.state.toys.findIndex(toy => toy.id === toyToAddLike.id )
    const updatedData = [...this.state.toys]
    updatedData[toyIndex] = {...updatedData[toyIndex], likes: toyToAddLike.likes += 1}
    this.setState({
      toys: updatedData
    })

    fetch(`http://localhost:3000/toys/${toyToAddLike.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(toyToAddLike)
    })
      .then(r => r.json())
      .then(updatedToy => updatedToy.likes += 1)
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} removeToy={this.removeToy} addLike={this.addLike}/>
      </>
    );
  }

}

export default App;
