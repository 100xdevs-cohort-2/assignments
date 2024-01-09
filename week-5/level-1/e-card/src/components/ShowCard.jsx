import '../Card.css'
function ShowCard(props)
{
  return (
    <>  
  <div class="business-card">
        <div class="profile-img">
            {/* <!-- You can use an image or initials for the profile picture -->
            <!-- Example with initials: -->
            <!-- <span class="initials">AB</span> --> */}
        </div>
        <div class="info">
            <h1>{props.card.name}</h1>
            <p>{props.card.desc}</p>
            <p>Email: {props.card.email}</p>
            <p>Phone: {props.card.number}</p>
            <p>Website: <a href="http://www.example.com" target="_blank">www.example.com</a></p>
        </div>
    </div>
    </>
  )
}

export default ShowCard