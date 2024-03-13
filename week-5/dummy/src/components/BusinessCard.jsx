function BussinessCard(props) {
  return (
    <div
      style={{
        padding: "40px",
        border: "1px solid black",
      }}
    >
      <h1>{props.name}</h1>
      <div>{props.description}</div>
      <h2>Interests</h2>
      <ul>
        {props.interests.map((link,index) => <li key={index}>{link}</li>)}
      </ul>
      <button
        type="button"
        onClick={() => (window.location.href = props.social.linkedin)}
      >
        LinkedIn
      </button>
      <button
        type="button"
        onClick={() => (window.location.href = props.social.twitter)}
      >
        twitter
      </button>
    </div>
  );
}

// - Name
// - A short description
// - LinkedIn, Twitter and other Social Media Handle buttons
// - Interests Section

export default BussinessCard;
