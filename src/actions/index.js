export const LIST_CARS = 'LIST_CARS';

export function listCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: LIST_CARS,
    payload: promise
  };
}
