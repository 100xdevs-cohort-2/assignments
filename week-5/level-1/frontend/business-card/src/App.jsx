import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id='outer-div' 
    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'lightblue',borderRadius:20 }}>
        <div id='heading' style={{fontSize:50,paddingTop:40,paddingLeft:20}}>
         SOURAV  MOHANTA
        </div>
        
        <div id='about' 
        style={{fontSize:20,paddingLeft:20,paddingBottom:10}}>
         A,3rd year student at NIT Durgapur,Coder, Developer
        </div>

        {/* Interests */}
        <div id='heading-2' 
        style={{fontSize:35,paddingLeft:20}}>
         Interests-
        </div>
         {/* list of Interests */}
        <div id='list' style={{display:'flex',flexDirection:'column',paddingLeft:20}}>
            <div>Coding</div>
            <div>Web Devlopment</div>
            <div>Open Sourse</div>
            <div>Android</div>
        </div>

        {/* socialmedia link */}
        <div id='button' 
        style={{fontSize:20,paddingLeft:20,paddingBottom:10,paddingTop:20,display:'flex',gap:20}}>
          <a style={{padding:10,background:'blue',color:'white',fontSize:15,cursor:'pointer',borderRadius:10}} href={"https://www.linkedin.com/in/sourav-mohanta-756815223/"} target="_blank" >Linkdln</a>
          
          <a style={{padding:10,background:'blue',color:'white',fontSize:15,cursor:'pointer',borderRadius:10}} href={'https://twitter.com/Sourav44281219'} target="_blank">Twitter</a>
        </div>
      </div>
  )
}

export default App
