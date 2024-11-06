import { formatPhoneNumber, capitalize } from "./utils/transformations";

export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};

export const ProfileInformation = ({ userData }) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  const isDataProvided =
    userData && Object.values(userData).every((value) => value);

  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        {isDataProvided ? (
          <>
            <InfoRow label="Email" value={userData.email} />
            <InfoRow
              label="First Name"
              value={capitalize(userData.firstName)}
            />
            <InfoRow label="Last Name" value={capitalize(userData.lastName)} />
            <InfoRow label="City" value={capitalize(userData.city)} />
            <InfoRow
              label="Phone"
              value={formatPhoneNumber(userData.phoneNumber)}
            />
          </>
        ) : (
          <div>No information provided</div>
        )}
      </div>
    </>
  );
};
