import React from 'react';

import { connect } from "react-redux";

import { removeFeature } from "../actions/index";

const AddedFeature = props => {

  const removeFeature = (feature) => {
    props.removeFeature(feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, { removeFeature: removeFeature })(AddedFeature);
