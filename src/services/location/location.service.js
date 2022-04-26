import { host, isMock } from "../../utils/env";

export const requestLocation = (location) => {
  return fetch(`${host}/geocode?location=${location}&mock=${isMock}`).then(
    (res) => res.json()
  );
};

export const requestAutocomplete = (search) => {
  return fetch(`${host}/autocomplete?search=${search}&mock=${isMock}`).then(
    (res) => res.json()
  );
};

export const transformAutocomplete = ({ predictions }) => {
  return predictions.map((prediction) => prediction.description);
};

export const transformedLocation = (response) => {
  const res = response.results[0];
  const { geometry } = res;
  const { lng, lat } = geometry.location;
  const { viewport } = geometry;
  return { lng, lat, viewport };
};
