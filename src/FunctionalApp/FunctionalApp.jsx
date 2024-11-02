import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: "",
  });

  const updateUserData = (formData) => {
    setUserData((prevData) => ({ ...prevData, ...formData }));
  };

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userData} />
      <FunctionalForm updateUserData={updateUserData} />
    </>
  );
};
