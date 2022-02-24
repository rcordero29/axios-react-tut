import React from 'react';

function BeerCard(props) {
  return (
    <li
      style={{
        listStyle: 'none',
        display: 'flex',
        flexdirection: 'row',
        margin: '50px',
      }}
    >
      <img style={{ height: '300px' }} src={props.image_url}></img>
      <h3>
        {props.name}
        <span>{props.first_brewed}</span>
      </h3>
      <h4>{props.tagline}</h4>
      <p>
        <span>{props.abv}</span>
        {props.description}
      </p>
    </li>
  );
}

export default BeerCard;
