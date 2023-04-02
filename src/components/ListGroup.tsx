export default function ListGroup() {
  const items = ["Main, component"];
  /*"London", "Paris", "CapeTown", "Lusaka"*/
  return (
    <>
      <h1>Watch latest movies 2023</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
