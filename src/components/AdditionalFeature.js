import React from 'react';

import { connect } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = props => {

  const addFeature = (feature) => {
    props.addFeature(feature);
  }

  return (
    <li key={props.feature.id}>
      <button className="button" onClick={() => addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature: addFeature })(AdditionalFeature);
