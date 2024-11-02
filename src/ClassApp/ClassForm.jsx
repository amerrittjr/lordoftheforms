import React, { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { allCities } from "../utils/all-cities";
import {
  isEmailValid,
  isFirstNameAndLastNameValid,
  isCityValid,
  isPhoneNumberValid,
} from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Phone number is Invalid";

export class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phoneNumber: ["", "", "", ""],
      hasSubmitted: false,
    };

    this.phoneRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ];
  }

  handleFirstNameInput = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameInput = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCityInput = (event) => {
    this.setState({ city: event.target.value });
  };

  handlePhoneNumberInput = (index, event) => {
    const value = event.target.value;
    const newPhoneNumber = [...this.state.phoneNumber];
    newPhoneNumber[index] = value;
    this.setState({ phoneNumber: newPhoneNumber });

    if (
      value.length === event.target.maxLength &&
      index < this.phoneRefs.length - 1
    ) {
      this.phoneRefs[index + 1].current.focus();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ hasSubmitted: true });

    const { firstName, lastName, email, city, phoneNumber } = this.state;
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
      this.props.updateUserData(formData);
      alert("Form Submitted Successfully");

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: ["", "", "", ""],
        hasSubmitted: false,
      });
    } else {
      alert("Form has errors");
    }
  };

  render() {
    const { firstName, lastName, email, city, phoneNumber, hasSubmitted } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <label>First Name:</label>
          <input
            placeholder="Bilbo"
            value={firstName}
            onChange={this.handleFirstNameInput}
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
            onChange={this.handleLastNameInput}
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
            onChange={this.handleEmailInput}
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
            onChange={this.handleCityInput}
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
        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input
              type="text"
              id="phone-input-1"
              placeholder="55"
              maxLength={2}
              value={phoneNumber[0]}
              onChange={(e) => this.handlePhoneNumberInput(0, e)}
              ref={this.phoneRefs[0]}
            />
            -
            <input
              type="text"
              id="phone-input-2"
              placeholder="55"
              maxLength={2}
              value={phoneNumber[1]}
              onChange={(e) => this.handlePhoneNumberInput(1, e)}
              ref={this.phoneRefs[1]}
            />
            -
            <input
              type="text"
              id="phone-input-3"
              placeholder="55"
              maxLength={2}
              value={phoneNumber[2]}
              onChange={(e) => this.handlePhoneNumberInput(2, e)}
              ref={this.phoneRefs[2]}
            />
            -
            <input
              type="text"
              id="phone-input-4"
              placeholder="5"
              maxLength={1}
              value={phoneNumber[3]}
              onChange={(e) => this.handlePhoneNumberInput(3, e)}
              ref={this.phoneRefs[3]}
            />
          </div>
        </div>
        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={hasSubmitted && !isPhoneNumberValid(phoneNumber.join(""))}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
