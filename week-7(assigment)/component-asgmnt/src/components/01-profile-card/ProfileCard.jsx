/* eslint-disable react/prop-types */
import "./profileCard.css";

export function ProfileCard({
  username,
  age,
  location,
  imgUrl,
  followers,
  likes,
  photos,
}) {
  return (
    <div className="card-container">
      <div className="profile-background"></div>
      <div className="profile-details">
        <img src={imgUrl} alt="profile-photo" className="profile-photo" />
        <div className="profile-name-age">
          <h2 className="profile-name">{username}</h2>
          <p className="profile-age">{age}</p>
        </div>
        <p className="profile-location">{location}</p>
        <hr />
        <div className="social-stats">
          <div>
            <h2 className="stats-value">{followers}</h2>
            <p className="stats-text">Followers</p>
          </div>
          <div>
            <h2 className="stats-value">{likes}</h2>
            <p className="stats-text">Likes</p>
          </div>
          <div>
            <h2 className="stats-value">{photos}</h2>
            <p className="stats-text">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
