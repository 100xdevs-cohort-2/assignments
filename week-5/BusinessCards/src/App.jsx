import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "10px",
        padding: "10px",
      }}
    >
      <Card>
        <h1>Rohit</h1>
        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          A member of 100xDevs Cohort 2.0
        </div>
        <h2>Interests</h2>
        <div style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
          Ionic
          <br />
          Open Source <br />
          App Dev
        </div>
        <br />
        <Button value="Twitter" />
        <Button value="LinkedIn" />
      </Card>
      <Card>
        <h1>Rohit</h1>
        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          A member of 100xDevs Cohort 2.0
        </div>
        <h2>Interests</h2>
        <div style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
          Ionic
          <br />
          Open Source <br />
          App Dev
        </div>
        <br />
        <Button value="Twitter" />
        <Button value="LinkedIn" />
      </Card>
      <Card>
        <h1>Rohit</h1>
        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          A member of 100xDevs Cohort 2.0
        </div>
        <h2>Interests</h2>
        <div style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
          Ionic
          <br />
          Open Source <br />
          App Dev
        </div>
        <br />
        <Button value="Twitter" />
        <Button value="LinkedIn" />
      </Card>
      <Card>
        <h1>Rohit</h1>
        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          A member of 100xDevs Cohort 2.0
        </div>
        <h2>Interests</h2>
        <div style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
          Ionic
          <br />
          Open Source <br />
          App Dev
        </div>
        <br />
        <Button value="Twitter" />
        <Button value="LinkedIn" />
      </Card>
    </div>
  );
}

function Button({ value }) {
  function mouseOver(e) {
    e.target.style.background = "black";
  }
  function mouseOut(e) {
    e.target.style.background = "	#2F5BFD";
  }
  return (
    <>
      <button
        style={{
          background: "#2F5BFD",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "18px",
          borderRadius: "15px",
          padding: 10,
          width: "100px",
          height: "40px",
          marginRight: "10px",
        }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        {value}
      </button>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: 20,
        padding: 20,
        boxShadow: "1px 1px 5px 0px black",
        minWidth: "200px"
      }}
    >
      {children}
    </div>
  );
}

export default App;

// You have to create a simple React App which has a reusable Card Component which has the following
//  - Ability to pass in props to the Component
//  - The Card must show a person's
//     - Name
//     - A short description
//     - LinkedIn, Twitter and other Social Media Handle buttons
//     - Interests Section
//  - You can assume that this is kind of an e-business card and feel free to put in your creativity
//  - Additional & Slightly advanced:
//     - Create a page where you can add these kind of Cards by taking input from the user
//     - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
//     - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)
