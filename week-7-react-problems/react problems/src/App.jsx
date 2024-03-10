 import { useEffect, useState } from 'react'
import './App.css'
import  {Task1 } from './components/Task1'
import { LoremIpsum } from 'react-lorem-ipsum';
import OtpInput from 'react-otp-input';


function App() {
  const [bgcolor, setbgcolor] = useState("orange");
  const click = bgcolor => {
    setbgcolor(bgcolor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  },[bgcolor])

  const [numberOfPara, setnumberOfPara] = useState(0);
   const [generatedText, setGeneratedText] = useState('');

  
  const generateLoremIpsum = () => {
    setGeneratedText(<LoremIpsum p={numberOfPara} />);
  };

  const [username, setUsername] = useState('');

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => SetUserData(data))
  }

  const [userData, SetUserData] = useState([]);
  
    const [otp, setOtp] = useState('');

  return (
    <>
      <Task1 />

      <button onClick={() => {
        click("red");
      }}> change color to red</button>

      <button onClick={() => {
        click("yellow");
      }}> change color to yellow</button>

      <button onClick={() => {
        click("black");
      }}> change color to black</button>

      <button onClick={() => {
        click("purple");
      }}> change color to purple</button>

      <button onClick={() => {
        click("green");
      }}> change color to green</button>


      <button onClick={() => {
        click("blue");
      }}> change color to blue</button>



      <button onClick={() => {
        click("orange");
      }}> default</button>

      <br>
      </br>
      <br>
      </br>
      <h>
        <b>
        Paragraph Generator
        </b>

        <br>
        </br>

        
        <input  value = {numberOfPara} placeholder='enter number of words' onChange={e=> setnumberOfPara(e.target.value)} >
        </input>
        <button onClick={generateLoremIpsum}>Generate</button>
      </h>
      <div >
            <div>{generatedText}</div>
      </div>
      

      <br>
      </br>
      <br>
      </br>


      {/* task 5 */}
      <input placeholder='whats your username' onChange={e => setUsername(e.target.value)} />

      <br>
      
      </br>

      <button onClick={fetchUserData}>
        click
      </button>

      <div>
         <div>
        <img src={userData.avatar_url} alt="User Avatar" />
        <div>Username: {userData.login}</div>
        <div>Name: {userData.name}</div>
        <div>Bio: {userData.bio}</div>
        <div>Location: {userData.location}</div>
        <div>Company: {userData.company}</div>
        <div>Blog: <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a></div>
        <div>Followers: {userData.followers}</div>
        <div>Following: {userData.following}</div>
        <div>Public Repos: {userData.public_repos}</div>
        <div>Public Gists: {userData.public_gists}</div>
        <div>Member since: {new Date(userData.created_at).toLocaleDateString()}</div>
        <div>Last updated: {new Date(userData.updated_at).toLocaleString()}</div>
      </div>
      </div>

      {/* task 6 */}

      
      <br>
      </br>

      <div>
        <h1>Login via OTP</h1>
       <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      />
        
      </div>
      
      <button>Login</button>


      {/* task 7 */}

      
    </>
  )
}

export default App
