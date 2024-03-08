/* eslint-disable react/prop-types */
import "./ProfileCard.css";

export function ProfileCard({
  username,
  age,
  location,
  imgUrl,
  followers,
  following,
  repositories,
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
        <p className="profile-location">
          {location === null ? "Earth" : location}
        </p>
        <hr />
        <div className="social-stats">
          <div>
            <h2 className="stats-value">
              {followers === null ? "0" : followers}
            </h2>
            <p className="stats-text">Followers</p>
          </div>
          <div>
            <h2 className="stats-value">
              {following === null ? "0" : following}
            </h2>
            <p className="stats-text">Following</p>
          </div>
          <div>
            <h2 className="stats-value">
              {repositories === null ? "0" : repositories}
            </h2>
            <p className="stats-text">Repositories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
