import React from 'react';

export default function InputField(props) {
  return (
    <div id={classes.wNode725ed31} className={classes.formFieldsWrap}>
      <ul className={classes.inputUl}><input type="text" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Full-Name" data-name="Full Name" placeholder="Full Name" id="Full-Name" required="" /></ul>
      <ul className={classes.inputUl}><input type="email" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Email-5" data-name="Email 5" placeholder="Email" id="Email-5" required="" /></ul>
      <ul className={classes.inputUl}><input type="text" className={`${classes.formField} ${classes.initialWhiteBg}`} maxLength="256" name="Firm" data-name="Firm" placeholder="Firm" id="Firm-2" required="" /></ul>
    </div>
  )
}