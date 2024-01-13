function BusinessCard(props){
    // console.log(props.interests);
    return(
    <>
        <div style={styles.card}>
            <h2>{props.name}</h2>
           
            <h5>{props.description}</h5>
            <h3>Interests</h3>
            <ul>
                {props.interests.map((interest)=>(
                    <li key={interest}>{interest}</li>
                ))}
            </ul>
            <div style={{display:"flex"}}>
            <button style={{padding:'7px',margin:"20px",backgroundColor:'blue', color:'white'}} >LinkedIn</button>
            <button style={{padding:'7px',margin:"20px",backgroundColor:'blue', color:'white'}}>Twitter</button>
            </div>
        </div>

    </>)
}

const styles={
    card:{
        border:"1px solid #ddd ",
        borderRadius:'8px',
        padding:'20px',
        margin:'20px',
        maxWidth:'400px'

        
    }
}

export default BusinessCard;