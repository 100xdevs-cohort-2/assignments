// import './App.css'

function App() {
  function propolateDiv(){
     const element=document.getElementById("final")
     const a=document.getElementById("title")
     const b=document.getElementById("description")
     element.innerHTML=a.value;
  }


  return (
      <div style={{display:'flex',flexDirection:'column',paddingright:10}}>
       <input id="title" style={{padding:5,paddingright:10}} type="text" placeholder='Title'/><br></br>
       <input id="descrpition" style={{padding:5}} type="text" placeholder='Description'/><br></br>
       <button onClick={propolateDiv}>Add Todo</button>
      <div id="final"></div>
      </div>
  )
}

export default App
