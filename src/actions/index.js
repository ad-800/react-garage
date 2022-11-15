export const LIST_CARS = 'LIST_CARS';
export const CREATE_CAR = 'CREATE_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export function listCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: LIST_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CREATE_CAR,
    payload: request
  };
}

export function deleteCar(car, history) {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push(''));

  return {
    type: DELETE_CAR,
    payload: car
  };
}
