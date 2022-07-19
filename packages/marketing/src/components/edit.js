// Hero-content
const use-styles = make-styles((theme) => ({
h1styled {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 90px;
  margin-top: 20px;
}

subHeadingLarge {
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;

  @media screen and (max-width: 767px) {
    margin-top: 14px;
    font-size: 20px;
    line-height: 30px;
  }
}

bottomSpace {
  margin-bottom: 20px;
}

intro {
  text-align: center;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 20px;
}

alignCenter {
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
  text-align: center;
}
      
max800Px {
  color: #0c0a89;
  font-size: 48px;
  line-height: 60px;
  max-width: none;
  font-family: Playfair Display; sans-serif;
  text-align: center;
}
  
center-aligned {
  max-width: 750px;
  margin: 40px auto;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  padding-left: 0px;
}
}));

// -contentSection
const use-styles = make-styles((theme) => ({
h2styled {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 36px;
  margin-top: 20px;
}

h3styled {
  font-family: Playfair Display; sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 25px;
  margin-top: 10px;
}

containerYellow {
  background-color: #ffd343;
  width: 100%;
}

section2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: #ffd343;
  max-width: none;
  padding: 50px 50px 120px 50px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    padding: 50px 5% 65px;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 4%;
  }

  @media screen and (max-width: 479px) {
    padding: 30px 5%;
  }
}

container1 {
  width: auto;
  max-width: 1400px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  &.megaNav-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    @media screen and (max-width: 991px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  }
}
}));

// AccessCheckbox
const use-styles = make-styles((theme) => ({
wCheckbox {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
  horizontal-align: bottom;

  &:before {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
  }

  &:after {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
    clear: both;
  }
}

fieldCheckbox2 {
  display: inline-block;
  // margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  //padding-left: 20px;
  border-bottom: 3px solid #15113b;
  color: #15113b;
  text-align: left;

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }
}

  wClearfix {
  &:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
  }

  &:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
  clear: both;
  }
}

checkboxLabel {
  vertical-align: middle;
  position: relative;
  margin-left: 30px;
  padding-left: 30px;
}

fieldCheckbox {
  // margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 0px;
  border-bottom: 3px solid #15113b;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  text-align: left;

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 6px;
    border-bottom-color: #15113b;
    color: #15113b;
  }
}

checkbox {
  width: 5%;
  margin-left: 0px;
  padding-top: 37px;
}

wCheckboxInput {
  float: left;
  margin-bottom: 0px;
  margin-left: -20px;
  margin-right: 0px;
  margin-top: 4px;
  line-height: normal;
  
  &.inputTypeCustom {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-top-color: #ccc;
    border-bottom-color: #ccc;
    border-left-color: #ccc;
    border-right-color: #ccc;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid;
    width: 12px;
    height: 12px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
}

redirected {
  &:checked {
    background-color: #3898ec;
    border-top-color: #3898ec;
    border-bottom-color: #3898ec;
    border-left-color: #3898ec;
    border-right-color: #3898ec;
    background-image: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    
    &:focus {
      box-shadow: 0px 0px 3px 1px #3898ec;
    }
  }
}
  
fieldLabel4 {
  margin-bottom: 0px;
  color: #15113b;
  font-size: 16px;
  line-height: 1em;
  font-weight: 400;
  
  &.fieldLabelCheckbox {
    width: 90%;
  }
}
  
wFormLabel {
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0px;
  padding-top: 10px;
  font-family: Playfair Display';
  font-size: 16px;
}
}));

// AccessForm
const use-styles = make-styles((theme) => ({
@global {    
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    font-family: Playfair Display';
  }
}

h42 {
  position: relative;
  padding: 0px;
  color: #15113b;
  font-weight: 700;
}

wLayout-grid3 {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}

formCheckbox-grid {
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

wCheckbox {
  display: block;
  width: 275px;
  margin-bottom: 5px;
  padding-left: 20px;

  &:before {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
  }

  &:after {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
    clear: both;
  }
  }

  fieldCheckbox2 {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 0px;
    border-bottom: 3px solid #15113b;
    color: #15113b;
    text-align: left;
  }

  wClearfix {
    &:before {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    }

    &:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    clear: both;
    }
  }

  checkboxLabel {
    vertical-align: middle;
    position: relative;
    margin-left: 30px;
    padding-left: 30px;
  }
  
  fieldCheckbox {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 0px;
    border-bottom: 3px solid #15113b;
    font-family: Barlow, sans-serif;
    color: #0c0a89;
    text-align: left;
  }

  checkbox {
    width: 5%;
    margin-left: 0px;
    padding-top: 37px;
  }

  wCheckboxInput {
    float: left;
    margin-bottom: 0px;
    margin-left: -20px;
    margin-right: 0px;
    margin-top: 4px;
    line-height: normal;
    
    &.inputTypeCustom {
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-left-width: 1px;
      border-right-width: 1px;
      border-top-color: #ccc;
      border-bottom-color: #ccc;
      border-left-color: #ccc;
      border-right-color: #ccc;
      border-top-style: solid;
      border-bottom-style: solid;
      border-left-style: solid;
      border-right-style: solid;
      width: 12px;
      height: 12px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
  }

  redirected {
    &:checked {
      background-color: #3898ec;
      border-top-color: #3898ec;
      border-bottom-color: #3898ec;
      border-left-color: #3898ec;
      border-right-color: #3898ec;
      background-image: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      
      &:focus {
        box-shadow: 0px 0px 3px 1px #3898ec;
      }
    }
  }
    
  fieldLabel4 {
    margin-bottom: 0px;
    color: #15113b;
    font-size: 16px;
    line-height: 1em;
    font-weight: 400;
    
    &.fieldLabelCheckbox {
      width: 90%;
    }
  }
    
  wFormLabel {
    display: inline-block;
    cursor: pointer;
    font-weight: normal;
    margin-bottom: 0px;
    padding-top: 10px;
    font-family: Playfair Display';
    font-size: 16px;
  }
}));

// AccessHeading
const use-styles = make-styles((theme) => ({
@global {
  h1 {
    font-family: Playfair Display; sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 48px;
    line-height: 42px;
    margin-top: 20px;
  }
}

h12 {
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
  font-size: 38px;
  line-height: 44px;
  margin-top: 20px;
}
      
infoLink {
  margin-top: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

heading28 {
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
}
  
paragraph8 {
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 16px;

  margin-top: 0;
  margin-bottom: 20px;
}

paragraph9 {
  font-family: Barlow, sans-serif;
  color: #0c0a89;

  margin: 0 0 10px 0;
}

wNode725Ded3CE6D {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;

  width: 100%;
}
  
contacts-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
      
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
}
    
contactLink {
  margin-bottom: 19px;
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}
    
wNode725ed35E6 {
  //padding-top: 50px;
  align-self: center;

  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-column-span: 1;
  grid-column-end: 3;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
}
}))

// -contactForm
const use-styles = make-styles((theme) => ({
@global {
    h1 {
      font-family: Playfair Display; sans-serif;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 48px;
      line-height: 42px;
      margin-top: 20px;
    }
}

emailForm {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media screen and (max-width: 991px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    min-width: auto;
    padding-top: 10px;
  }

  @media screen and (max-width: 479px) {
    display: block;
    text-align: center;
  }
}
  
heading28 {
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
}
  
paragraph8 {
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 16px;

  margin-top: 0;
  margin-bottom: 20px;
}

wNode725Ded3CE6D {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}
  
contacts-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
    
contactLink {
  margin-bottom: 19px;
  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}
  
wLayout-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}

_2-col-grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding-right: 25px;
  padding-left: 0px;
}
  
contactV2 {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: column-reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-row-gap: 20px;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
}
    
message-wrap {
  width: 100%;
}
  
wNode725ed35E6 {
  padding-top: 50px;
  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-column-span: 1;
  grid-column-end: 3;
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;
}
  
infoLink {
  margin-top: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

-contactSection {
  padding: 5px;
  margin: 0;
}
}));

// FieldCheckbox
const use-styles = make-styles((theme) => ({
wCheckbox {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
  horizontal-align: bottom;

  &:before {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
  }

  &:after {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
    clear: both;
  }
}

fieldCheckbox2 {
  display: inline-block;
  // margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  //padding-left: 20px;
  border-bottom: 3px solid #15113b;
  color: #15113b;
  text-align: left;

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }
}

  wClearfix {
  &:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
  }

  &:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
  clear: both;
  }
}

checkboxLabel {
  vertical-align: middle;
  position: relative;
  margin-left: 30px;
  padding-left: 30px;
}

fieldCheckbox {
  // margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 0px;
  border-bottom: 3px solid #15113b;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  text-align: left;

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 6px;
    border-bottom-color: #15113b;
    color: #15113b;
  }
}

checkbox {
  width: 5%;
  margin-left: 0px;
  padding-top: 37px;
}

wCheckboxInput {
  float: left;
  margin-bottom: 0px;
  margin-left: -20px;
  margin-right: 0px;
  margin-top: 4px;
  line-height: normal;
  
  &.inputTypeCustom {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-top-color: #ccc;
    border-bottom-color: #ccc;
    border-left-color: #ccc;
    border-right-color: #ccc;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid;
    width: 12px;
    height: 12px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
}

redirected {
  &:checked {
    background-color: #3898ec;
    border-top-color: #3898ec;
    border-bottom-color: #3898ec;
    border-left-color: #3898ec;
    border-right-color: #3898ec;
    background-image: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    
    &:focus {
      box-shadow: 0px 0px 3px 1px #3898ec;
    }
  }
}
  
fieldLabel4 {
  margin-bottom: 0px;
  color: #15113b;
  font-size: 16px;
  line-height: 1em;
  font-weight: 400;
  
  &.fieldLabelCheckbox {
    width: 90%;
  }
}
  
wFormLabel {
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0px;
  padding-top: 10px;
  font-family: Playfair Display';
  font-size: 16px;
}
}));

// InputField

const use-styles = make-styles((theme) => ({
@global {
  input {
    font-family: Playfair Display; sans-serif;
    display: block;
    height: 28px;
    padding: 0px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

    &[type=text] {
      width: 100%;
    }

    &[type=email] {
      width: 100%;
    }

    &:focus {
      border-color: #3898EC;
      outline: 0;
    }

    &::placeholder {
      font-family: Playfair Display; sans-serif;
      color: #999;
      opactiy: 1;
    }

    &:-moz-placeholder {
      font-family: Playfair Display; sans-serif;
      color: #999;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      font-family: Playfair Display; sans-serif;
      color: #999;
      opacity: 1;
    }
    
    &::-webkit-input-placeholder {
      font-family: Playfair Display; sans-serif;
      color: #999;
      opacity: 1;
    }
  }
}

inputUl {
  margin: 0px;
  padding: 0px;
}

wNode725ed31 {
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;
}

formFields-wrap {
  width: 100%;
  float: left;
}

formField {
  height: 55px;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 3px;
  background-color: rgba(255, 211, 67, 0.1);
  
  &:hover {
    border-style: solid;
  }
  
  &:active {
    border-style: solid;
    border-color: #15113b;
    background-color: #ffd343;
  }
  
  &:focus {
    border-style: solid;
    border-color: #15113b;
    background-color: #ffd343;
  }
}

initialWhiteBg {
  background-color: #fff;
  
  &:hover {
    border-style: solid;
    background-color: hsla(0, 0%, 100%, 0.5);
  }
  
  &:active {
    border-style: solid;
    background-color: #ffd343;
  }
  
  &:focus {
    border-style: solid;
    border-color: #15113b;
    background-color: #ffd343;
  }
}

messageField {
  height: 185px;
  border-style: solid;
  
  &:focus {
    border-style: solid;
  }
  
  &$initialWhiteBg {
    padding-top: 30px;
  }
}
}));

// LearnMoreSection

const use-styles = make-styles((theme) => ({
@global {
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
    font-family: Playfair Display';
  }
}

h42 {
  position: relative;
  padding: 0px;
  color: #15113b;
  font-weight: 700;
}

wLayout-grid3 {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}

formCheckbox-grid {
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

wCheckbox {
  display: block;
  width: 275px;
  margin-bottom: 5px;
  padding-left: 20px;

  &:before {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
  }

  &:after {
    content: " ";
    display: table;
    -ms-grid-column-span: 1;
    grid-column-end: 2;
    -ms-grid-column: 1;
    grid-column-start: 1;
    -ms-grid-row-span: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    grid-row-start: 1;
    clear: both;
  }
  }

  fieldCheckbox2 {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 0px;
    border-bottom: 3px solid #15113b;
    color: #15113b;
    text-align: left;
  }

  wClearfix {
    &:before {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    }

    &:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    clear: both;
    }
  }

  checkboxLabel {
    vertical-align: middle;
    position: relative;
    margin-left: 30px;
    padding-left: 30px;
  }
  
  fieldCheckbox {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 0px;
    border-bottom: 3px solid #15113b;
    font-family: Barlow, sans-serif;
    color: #0c0a89;
    text-align: left;
  }

  checkbox {
    width: 5%;
    margin-left: 0px;
    padding-top: 37px;
  }

  wCheckboxInput {
    float: left;
    margin-bottom: 0px;
    margin-left: -20px;
    margin-right: 0px;
    margin-top: 4px;
    line-height: normal;
    
    &.inputTypeCustom {
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-left-width: 1px;
      border-right-width: 1px;
      border-top-color: #ccc;
      border-bottom-color: #ccc;
      border-left-color: #ccc;
      border-right-color: #ccc;
      border-top-style: solid;
      border-bottom-style: solid;
      border-left-style: solid;
      border-right-style: solid;
      width: 12px;
      height: 12px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
  }

  redirected {
    &:checked {
      background-color: #3898ec;
      border-top-color: #3898ec;
      border-bottom-color: #3898ec;
      border-left-color: #3898ec;
      border-right-color: #3898ec;
      background-image: `url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')`;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      
      &:focus {
        box-shadow: 0px 0px 3px 1px #3898ec;
      }
    }
  }
    
  fieldLabel4 {
    margin-bottom: 0px;
    color: #15113b;
    font-size: 16px;
    line-height: 1em;
    font-weight: 400;
    
    &.fieldLabelCheckbox {
      width: 90%;
    }
  }
    
  wFormLabel {
    display: inline-block;
    cursor: pointer;
    font-weight: normal;
    margin-bottom: 0px;
    padding-top: 10px;
    font-family: Playfair Display';
    font-size: 16px;
  }
}));

// Footer
const use-styles = make-styles((theme) => ({
footer-container {
  background-color: rgba(21, 17, 59, 1);   // company darkest blue
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  font-family: Playfair Display; sans-serif;
}

footer-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  
  @media screen and (max-width: 767px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  @media screen and (max-width: 469px) {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
}

textWhite {
  color: #fff;
  font-family: "Playfair Display";
  align: left;
}

footer-bottom {
  display: flex;
  height: 30px;
}

footer-grid {
  // 4-col-grid
  display: grid;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-column-gap: 35px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}

footer-column {
  border-top: 1px solid hsla(0, 0%, 96.9%, 0.2);
  font-size: 16px'
}

footerTitle {
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: "Playfair Display";
  font-size: 20px;
  font-weight: 700;
}

button8displayBlock {
  display: flex'
}
  
max300Px {
  font-family: inherit;
  max-width: 300px;
}
  
socialLinks-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  margin-left: 0px;
  margin-bottom: 10px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

justify-start {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
  
wInlineBlock {
  max-width: 100%;
  display: inline-block;
}


}));

// FooterButton
const use-styles = make-styles((theme) => ({
displayBlock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: center;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
}

sideBySideButton-contain {
  position: static;
  bottom: 160px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-bottom: 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

wButton3 {
  display: inline-block;
  padding: 9px 15px;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
}

button3 {
  margin-top: 20px;
  border-radius: 3px;
  background-color: #ffd343;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display; sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    color: #fff;
    text-decoration: none;
  }
}

outlinedButton3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  border-radius: 3px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display; sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:Hover {
    margin-left: 0px;
    border-color: #ffd343;
    background-color: #ffd343;
    box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
    -webkit-transform: translate(2px, 0px);
    -ms-transform: translate(2px, 0px);
    transform: translate(2px, 0px);
    color: #000;
    text-decoration: none;
  }
  
  &.introButton {
    margin-left: 15px;
    border-color: #15113b;
    color: #0c0a89;
    
    &:Hover {
      background-color: #15113b;
      -webkit-transform: translate(0px, -3px);
      -ms-transform: translate(0px, -3px);
      transform: translate(0px, -3px);
      color: #fff;
    }

    @media screen and (max-width: 479px) {
      margin-left: 0px;
      text-align: center;
    }
  }
}

displayBlock2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 16px;
  
  &:hover {
    border-color: #09d5b0;
    background-color: #09d5b0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

displayBlock3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  
  &:hover {
    margin-left: 0px;
    background-color: #09d5b0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    color: #15113b;
  }
}

introButton3 {
  margin-left: 15px;
  border-color: #15113b;
  border-radius: 3px;
  color: #0c0a89;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
    color: #fff;
  }
}

buttonArrow {
  float: right;
}

footerButtons-contain {
  width: 380px;
  margin-left: 150px;

  @media screen and (max-width: 991px) {
    width: 360px;
    margin-left: 12px;
  }

  @media screen and (max-width: 767px) {
    width: 360px;
    margin-left: 0px;
    padding-top: 24px;
  }

  @media screen and (max-width: 467px) {
    width: 100%;
  }
}
}));

// FooterLink
const use-styles = make-styles((theme) => ({
footerLink {
  display: block;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
}
}));

// CardNew

const use-styles = make-styles((theme) => ({
h4styled {
  font-family: Playfair Display; sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 20px;
  margin-top: 10px;
}

card2 {
  background-color: #8ef0de;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: auto;
  padding: 33px 20px 33px;
  margin-right: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  align: center!important;
  border-radius: 8px;
  box-shadow: 1px 1px 13px 0 rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 991px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

card-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  flex-grow: 1;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;

  font-family: Playfair Display; sans-serif;
  color: #0c0a89;

  text-align: center;
}

_24px-align-leftMobileLandscape {
  font-size: 16px;

  @media screen and (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    text-align: left;
  }

  @media screen and (max-width: 479px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 15px;
    text-align: center;
  }
}
}));

// Cards
const useStyles = makeStyles((theme) => ({     
  _3-col-grid: {
    width: 100%;
    grid-auto-flow: row;
    grid-column-gap: 8px;
    grid-row-gap: 0px;
    grid-template-areas: -area -area -area;
    -ms-grid-columns: 1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    justify-content: space-between;
    alignItems: center;
    
    @media screen and (max-width: 767px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      webkit-flex-wrap: wrap;
      ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  },
    
  wLayout-grid: {
    grid-auto-columns: 1fr;
    ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  },
}));

// SubmitButton
const use-styles = make-styles((theme) => ({
submitButton {
  min-height: 0px;
  margin-left: 15px;
  padding: 5px 45px 0px;
  background-color: #0c0a89;
  font-family: Overpass, sans-serif;
}
  
submitButton2 {
  padding-right: 35px;
  padding-left: 35px;
  background-color: #0c0a89;
  font-weight: 600;
}

button9 {
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display; sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  height: auto;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    color: #fff;
    text-decoration: none;
  }
  
  &.submitBtn-contact2 {
    margin-top: 20px;
    background-color: #0c0a89;
    color: #fff;
  }
  
  &.submitBtn-contact3 {
    margin-top: 20px;
    background-color: #15113b;
    color: #fff;
  }
}

darkBlue {
  background-color: #0c0a89;
  color: #fff;
  
  &:hover {
    background-color: #09d5b0;
  }
}

hoverTeal {
  background-color: #ffd343;
  color: #0c0a89;
  
  &:hover {
    background-color: #09d5b0;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    color: #fff;
  }
}

displayBlock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  
  &:Hover {
    margin-left: 0px;
    background-color: #09d5b0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    color: #15113b;
  }
}
    
submitBtn-contact2 {
  // margin-top: 20px;
  background-color: #15113b;
  color: #fff;

  @media screen and (max-width: 479px) {
    min-height: 45px;
    text-align: center;
  }
}

wButton {
  display: inline-block;
  padding: 9px 15px;
  background-color: #15113b;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
}
}));

// SideBySideButtons
const use-styles = make-styles((theme) => ({
darkBlue {
  background-color: #0c0a89;
  color: #fff;
  
  &:hover {
    background-color: #09d5b0;
  }
}

hoverTeal {
  background-color: #ffd343;
  color: #0c0a89;
  
  &:hover {
    background-color: #09d5b0;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    color: #fff;
  }
}

displayBlock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: center;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }
}

sideBySideButton-contain {
  position: static;
  bottom: 160px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-bottom: 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

wButton2 {
  display: inline-block;
  padding: 9px 15px;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
}

button8 {
  margin-top: 20px;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display; sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:hover {
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    text-decoration: none;
  }
}

outlinedButton2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 3px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: Playfair Display; sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
  &:hover {
    border-color: #ffd343;
    background-color: #ffd343;
    color: #000;
    box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
    text-decoration: none;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    text-decoration: none;
  }
  
  &.displayBlock {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 16px;
    
    &:hover {
      border-color: #09d5b0;
      background-color: #09d5b0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }

    @media screen and (max-width: 767px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    &.introButton {
      @media screen and (max-width: 767px) {
        margin-left: 0px;
        text-align: center;
      }
    }
  }
}

introButton2 {
  margin-left: 15px;
  border-color: #15113b;
  border-radius: 3px;
  color: #0c0a89;
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
    color: #fff;
  }
}

button1 {
  &:hover {

  }
}

button2 {
  &:hover {
    
  }
}
}));

