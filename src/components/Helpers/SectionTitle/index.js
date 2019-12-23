import React from 'react';

import './style.module.css';

const Title = (props) => (
  <>
    <h1 style={{color: props.color, margin: props.margin}}>{props.title}</h1>
  </>
)

export default Title;