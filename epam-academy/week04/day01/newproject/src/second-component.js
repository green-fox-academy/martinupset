import React from 'react'

export default function SecondComponent(props) {
  return (
    <ul>
      {props.items.map((item, i) => <li key = {i}>{item}</li>)}
     </ul>
  );
}

