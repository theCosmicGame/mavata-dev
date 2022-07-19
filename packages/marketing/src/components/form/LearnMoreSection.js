import React from 'react';
import FieldCheckbox from './FieldCheckbox';

export default function LearnMoreSection(props) {
  return (
    <React.Fragment>
      <h4 className={classes.h42}>I'm interested in: </h4>
      <div className={`${classes.wLayoutGrid3} ${classes.formCheckboxGrid}`}>
        <AccessCheckbox name="Support">Learn More</AccessCheckbox>
        <AccessCheckbox name="Pricing-and-Plans">Getting Early Access</AccessCheckbox>
      </div>
    </React.Fragment>
  )
};
