import React, { Component } from 'react';

class ToyCard extends Component {

  handleDeleteBtn = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/toys/${id}`,{
      method: "DELETE"
    }).then(r => r.json())
    .then(this.props.handleDelete(id))
  }

  handleLikeClick = (id, likes) => {
    const data = {likes: likes+1}
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(updatedToy => this.props.updateLikes(id, updatedToy))
  }

  render() {
    console.log("Props", this.props)
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={() => this.handleLikeClick(this.props.id, this.props.likes)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.handleDeleteBtn(this.props.id)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
