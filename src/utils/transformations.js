export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return "";
  return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(
    2,
    4
  )}-${phoneNumber.slice(4, 6)}-${phoneNumber.slice(6)}`;
};
