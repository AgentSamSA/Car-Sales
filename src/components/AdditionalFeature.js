import React from 'react';

import { connect } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = props => {

  const addFeature = (feature) => {
    props.addFeature(feature);
  }

  console.log(props.feature);
  console.log(props.additionalPrice);

  return (
    <li key={props.feature.id}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature: addFeature })(AdditionalFeature);
