import { Component } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { ClassForm } from "./ClassForm";

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
      },
    };
  }

  updateUserData = (formData) => {
    this.setState({ userData: { ...this.state.userData, ...formData } });
  };

  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userData} />
        <ClassForm updateUserData={this.updateUserData} />
      </>
    );
  }
}
