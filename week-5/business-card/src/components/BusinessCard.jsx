import './BusinessCard.css'

export function BusinessCard(props){
    return (
    <div className="mainContainer">
        <span className='name'>{props.data.name}</span>
        <p className='description'>{props.data.description}</p>
        <span className='interestsHeading'>Interests</span>
        <ul className='interests'> 
            {props.data.interests.map((el) => {
                return <li className='interestItems'>{el}</li>
            })}
        </ul>
        <div className='socialMediaContainer'>
            <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className='socialMediaButton'>
                LinkedIn
            </a>
            <a href={props.data.twitter} target="_blank" rel="noopener noreferrer" className='socialMediaButton'>
                Twitter
            </a>
        </div>
    </div>
    )
}

