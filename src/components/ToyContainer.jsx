import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  // const testComponent = () => {
  //   console.log("TOYCONTAINER: ", props)
  // }

  const renderToys = () => {
    return props.toys.map(toy => <ToyCard key={toy.id} toy={toy} /> )
  }

  return(
    <div id="toy-collection">
      {renderToys()}

    </div>
  );
}

export default ToyContainer;
