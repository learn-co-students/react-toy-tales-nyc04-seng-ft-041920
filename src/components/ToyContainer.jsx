import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toyData, removeToy, likeToy}) => {
  return(
    <div id="toy-collection">
      {toyData.map((toy, index) =>
        <ToyCard
          likeToy={likeToy}
          removeToy={removeToy}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          id={toy.id}
          key={index}
        />
      )}
    </div>
  );
}

export default ToyContainer;
