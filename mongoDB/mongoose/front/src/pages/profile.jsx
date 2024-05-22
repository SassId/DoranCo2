import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  if (!user) {
    return navigate("/connexion");
  }
  return <p>{user.email}</p>;
}
