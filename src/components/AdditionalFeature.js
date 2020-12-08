import React from 'react';

const AdditionalFeature = props => {
  const addFeature = event => {
    console.log(props.state);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {

}

export default AdditionalFeature;
