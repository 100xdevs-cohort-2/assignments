/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
function App() {
const [title,setTitle] = useState ("daman");
function updateTitle(){
  setTitle("my name is "+ Math.random());
}

  return (
     
      <>
      <button onClick = {updateTitle} > update the title</button>
      <Header title = {title}></Header>
      <Header title = "daman" ></Header>
        <Header title = "daman" ></Header>
      </>
   
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App
