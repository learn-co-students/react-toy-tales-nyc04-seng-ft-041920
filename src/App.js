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

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleNewToy = (newToy) => {
    this.setState({
      toys: [...this.state.toys, newToy]
    })
  }

  handleDelete = (id) => {
    this.setState({
      toys: this.state.toys.filter(toy => toy.id !== id)
    })
  }

  handleUpdateLikes = (id, updatedToy) => {
    const updatedToys = this.state.toys.map(toy => {
      if (toy.id === id){
        return updatedToy
      }
      else{
        return toy
      }
    })

    this.setState({ toys: updatedToys})
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
      .then(r => r.json())
      .then(toys => {
        this.setState({toys: toys})
      })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleNewToy={this.handleNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDelete={this.handleDelete} updateLikes={this.handleUpdateLikes}/>
      </>
    );
  }

}

export default App;
