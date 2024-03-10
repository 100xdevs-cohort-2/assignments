import './card.css'

function Card (props){
    console.log("Logged")
return(
    
    <div className="Box">
     
        <h1>{props.data.name}</h1>
      <div>  {props.data.description} </div>
     
      
       
        <h1 id='interest'>Interests</h1>
        
        <div className='interests'>
            <div>{props.data.interest1}</div>
            <div>{props.data.interest2}</div>
            <div>{props.data.interest3}</div>
        </div>
       <div className='Butt'>
        <button>Linkedin</button>
        <button>Twitter</button>
       </div>
      
    </div>
)
}

export default Card