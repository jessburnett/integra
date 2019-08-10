import React from 'react';
import './DemoBox.scss';
import PropTypes from 'prop-types';


const DemoBox = (props) => {
  const label = props.label;
  return (
    //though i'd typically use a label as form element with 
    // input element using it hear for readibility
    <div className='box'>
      <label>{label}</label>
    </div>
  )
}

DemoBox.propTypes = {
  label: PropTypes.string.isRequired
}

export default DemoBox;
