import { allCities } from "./all-cities";
export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isFirstNameAndLastNameValid(name) {
  return name.length >= 2;
}

export function isCityValid(city) {
  return allCities.includes(city);
}

export function isPhoneNumberValid(phoneNumber) {
  return phoneNumber.length === 7;
}
