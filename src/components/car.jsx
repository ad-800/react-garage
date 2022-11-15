import React from 'react';
import { Link } from 'react-router-dom';

function Car(props) {
  return (
    <li>
      <h2>{props.car.brand} - {props.car.model}</h2>
      <p><strong>Owner:</strong> {props.car.owner}</p>
      <Link to={`/car/${props.car.id}`} key={props.car.id} />
    </li>
  );
}

export default Car;
