import React from 'react';

import { connect } from "react-redux";

import { removeFeature } from "../actions/index";

const AddedFeature = props => {

  const removeFeature = (feature) => {
    props.removeFeature(feature);
  }

  return (
    <li>
      <button className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { removeFeature: removeFeature })(AddedFeature);
