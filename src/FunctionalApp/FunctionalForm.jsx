import { useState } from "react";
import {
  isEmailValid,
  isFirstNameAndLastNameValid,
  isCityValid,
  isPhoneNumberValid,
} from "../utils/validations"; // Adjust the path as necessary
import { ErrorMessage } from "../ErrorMessage"; // Adjust the path as necessary
import { allCities } from "../utils/all-cities"; // Adjust the path as necessary
import { FunctionalPhoneInput } from "./FunctionalPhoneInput"; // Adjust the path as necessary

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Phone number is Invalid";

export const FunctionalForm = ({ updateUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(["", "", "", ""]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFirstNameInput = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFirstName(value);
    }
  };

  const handleLastNameInput = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setLastName(value);
    }
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleCityInput = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    const isEmailValidated = isEmailValid(email);
    const isFirstNameValidated = isFirstNameAndLastNameValid(firstName);
    const isLastNameValidated = isFirstNameAndLastNameValid(lastName);
    const isCityValidated = isCityValid(city);
    const isPhoneNumberValidated = isPhoneNumberValid(phoneNumber.join(""));

    if (
      isEmailValidated &&
      isFirstNameValidated &&
      isLastNameValidated &&
      isCityValidated &&
      isPhoneNumberValidated
    ) {
      const formData = {
        firstName,
        lastName,
        email,
        city,
        phoneNumber: phoneNumber.join(""),
      };
      updateUserData(formData);
      alert("Form Submitted Successfully");

      setFirstName("");
      setLastName("");
      setEmail("");
      setCity("");
      setPhoneNumber(["", "", "", ""]);
      setHasSubmitted(false);
    } else {
      alert("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>First Name:</label>
        <input
          placeholder="Bilbo"
          value={firstName}
          onChange={handleFirstNameInput}
        />
      </div>
      <ErrorMessage
        message={firstNameErrorMessage}
        show={hasSubmitted && !isFirstNameAndLastNameValid(firstName)}
      />

      {/* last name input */}
      <div className="input-wrap">
        <label>Last Name:</label>
        <input
          placeholder="Baggins"
          value={lastName}
          onChange={handleLastNameInput}
        />
      </div>
      <ErrorMessage
        message={lastNameErrorMessage}
        show={hasSubmitted && !isFirstNameAndLastNameValid(lastName)}
      />

      {/* email input */}
      <div className="input-wrap">
        <label>Email:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          value={email}
          onChange={handleEmailInput}
        />
      </div>
      <ErrorMessage
        message={emailErrorMessage}
        show={hasSubmitted && !isEmailValid(email)}
      />

      {/* city input */}
      <div className="input-wrap">
        <label>City:</label>
        <input
          list="cities"
          placeholder="Hobbiton"
          value={city}
          onChange={handleCityInput}
        />
        <datalist id="cities">
          {allCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </datalist>
      </div>
      <ErrorMessage
        message={cityErrorMessage}
        show={hasSubmitted && !isCityValid(city)}
      />

      {/* phone number input */}
      <FunctionalPhoneInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <ErrorMessage
        message={phoneNumberErrorMessage}
        show={hasSubmitted && !isPhoneNumberValid(phoneNumber.join(""))}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
