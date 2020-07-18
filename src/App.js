import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{
  state = {
    toys: [],
    display: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(r => r.json())
    .then(toysArray => {
      this.setState({toys: toysArray})
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleAddToy = (obj) => {
    this.setState(prevState => {
      return {
        toys: [
          ...prevState.toys,
          obj
        ]
      }
    }, console.log(this.state.toys))
  }

  handleRemoveToy = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      // maybe we do need a fetch helper
      fetch("http://localhost:3000/toys")
      .then(r => r.json())
      .then(toysArray => {
        this.setState({toys: toysArray})
      })
    })
  }

  handleLikeToy = (id, likes) => {
    // need to get current likes
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"likes": likes + 1})
    }).then(r => r.json())
    .then(() => {
      // maybe we do need a fetch helper
      fetch("http://localhost:3000/toys")
      .then(r => r.json())
      .then(toysArray => {
        this.setState({toys: toysArray})
      })
    })
  }

  render() {
    return (
      <>
        <Header/>
        { this.state.display ?
          <ToyForm
            addToy={this.handleAddToy}
          />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          likeToy={this.handleLikeToy}
          removeToy={this.handleRemoveToy}
          toyData={this.state.toys}
        />
      </>
    );
  }

}

export default App;
