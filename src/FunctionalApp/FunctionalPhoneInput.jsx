import { useRef } from "react";

export const FunctionalPhoneInput = ({ phoneNumber, setPhoneNumber }) => {
  const phoneRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handlePhoneNumberInput = (event, part) => {
    const value = event.target.value;
    const newPhoneNumber = [...phoneNumber];
    newPhoneNumber[part] = value;
    setPhoneNumber(newPhoneNumber);

    if (
      value.length === event.target.maxLength &&
      part < phoneRefs.length - 1
    ) {
      phoneRefs[part + 1].current.focus();
    }
  };

  return (
    <div id="phone-input-wrap">
      <input
        type="text"
        id="phone-input-1"
        placeholder="55"
        maxLength={2}
        value={phoneNumber[0]}
        onChange={(e) => handlePhoneNumberInput(e, 0)}
        ref={phoneRefs[0]}
      />
      -
      <input
        type="text"
        id="phone-input-2"
        placeholder="55"
        maxLength={2}
        value={phoneNumber[1]}
        onChange={(e) => handlePhoneNumberInput(e, 1)}
        ref={phoneRefs[1]}
      />
      -
      <input
        type="text"
        id="phone-input-3"
        placeholder="55"
        maxLength={2}
        value={phoneNumber[2]}
        onChange={(e) => handlePhoneNumberInput(e, 2)}
        ref={phoneRefs[2]}
      />
      -
      <input
        type="text"
        id="phone-input-4"
        placeholder="5"
        maxLength={1}
        value={phoneNumber[3]}
        onChange={(e) => handlePhoneNumberInput(e, 3)}
        ref={phoneRefs[3]}
      />
    </div>
  );
};
