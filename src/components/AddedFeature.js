import React from 'react';

const AddedFeature = props => {
  const removeFeature = event => {
    
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
