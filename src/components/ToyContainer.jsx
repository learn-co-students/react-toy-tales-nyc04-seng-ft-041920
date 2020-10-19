import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  // const renderToys = () => { props.toys.map(toy => {

  //   return <ToyCard toy={toy} key={toy.id}/>
  // }
  // )}
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {props.toys.map(toy => {
        return <ToyCard name={toy.name} 
          image={toy.image} 
          likes={toy.likes}  
          id={toy.id} 
          key={toy.id} 
          handleDelete={props.handleDelete}
          updateLikes={props.updateLikes}/>
      })}
      {/* { renderToys()} */}
    
    </div>
  );
}

export default ToyContainer;
