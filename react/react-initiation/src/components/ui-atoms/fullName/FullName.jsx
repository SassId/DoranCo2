import FirstName from "../firstName/FirstName";
import LastName from "../lastName/LastName";

export default function FullName(props) {
  return (
    <div>
      <FirstName firstName={props.fullname.firstname}></FirstName>
      <LastName lastName={props.fullname.lastname}></LastName>
    </div>
  );
}
