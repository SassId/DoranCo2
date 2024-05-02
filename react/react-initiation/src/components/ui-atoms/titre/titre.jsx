import myClass from "./titre.module.css";

export default function Titre({ children }) {
  return <h1 className={myClass.titre}>{children}</h1>;
}
