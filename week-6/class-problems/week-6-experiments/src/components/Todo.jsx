export const Todo = ({ title, description }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};
