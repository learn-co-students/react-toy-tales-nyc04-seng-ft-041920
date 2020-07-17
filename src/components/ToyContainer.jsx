import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {

  state = {
    toys: this.props.toys
  }

  removeToy = (id) => {
    this.setState(prevState=> ({
      toys: prevState.toys.filter(toy => toy.id !== id)
    }))
    console.log(id)
  }

  render() {
      console.log(this.props)
      return (
        <div>
          {this.state.toys.map(toy => <ToyCard key={toy.id} toy={toy} removeToy={this.removeToy} />)}
        </div>
      )
  }
}

export default ToyContainer;
