import React, { useState } from "react";
import "./App.css";
import image from './assets/bg.jpg';
import pro from './assets/pro.jpg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="picture">
          <div className="pic-up">
            <img src={image} alt="Background" />
          </div>

          <div className="circular-container">
            <img src={pro}/>
          </div>
          <div className="pic-down">
            <center>
              <p>
                <b style={{ fontSize: '20px' }}>Suraj Shelke </b>21
              </p>
              <p style={{ fontSize: '20px' }}>India</p>
            </center>
          </div>
        </div>

        <hr style={{ margin: "5px 0", border: "2px solid black",  width:'100%'}} />
        <div className="poster">
          <div className="follower">
            <h3>80K</h3>
            <p>Followers</p>
          </div>

          <div className="like">
            <h3>80K</h3>
            <p>Likes</p>
          </div>

          <div className="Photos">
            <h3>1.4K</h3>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
