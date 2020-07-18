import React, { Component } from 'react';

class ToyCard extends Component {
  render() {

    const {name, image, likes, id,likeToy, removeToy} = this.props

    return (
      <div id={id} className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>Likes {likes}</p>
        <button className="like-btn" onClick={() => {likeToy(id, likes)}}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => {removeToy(id)}}>Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
