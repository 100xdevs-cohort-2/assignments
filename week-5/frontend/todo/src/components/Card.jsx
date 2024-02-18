import "./Card.css"
function Card(props) {
  console.log("card called");
  console.log(props);
  const cardClickHandler = (id) => {
    console.log(id,"already called")
  }
  return (
    <li className="todoCard" onClick={()=>cardClickHandler(props.id)}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
}
export default Card;
