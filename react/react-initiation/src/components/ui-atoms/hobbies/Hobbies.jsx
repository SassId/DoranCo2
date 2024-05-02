export default function Hobbies(props) {
  return (
    <>
      {props.hobbies.map((hobby) => {
        return (
          <div key={hobby.id}>
            <h2>{hobby.title}</h2>
            <p>Experience: {hobby.exp}</p>
          </div>
        );
      })}
    </>
  );
}
