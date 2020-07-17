import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  //i think this should be refactored so that the likes change in the dataset
  //and are then passed down
  handleLike = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }

  handleRemove = () => {
    this.props.removeToy(this.props.toy.id)
  }

  render() {
    const { name, image, likes } = this.props.toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleRemove} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
