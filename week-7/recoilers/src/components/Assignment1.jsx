import "../index.css";
export default function Assignment1() {
  return (
    <div className="profile">
      <div className="cover-color" />
      <div className="profile-image">
        <img
          src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=1024x1024&w=is&k=20&c=VruKKTu4jBF2xPEEQUMWwd4bwJPysSsqLuZ7h1OyD8M="
          alt="profile-pic"
        />
      </div>
      <h1 className="name">
        Rita Correria
        <span>32</span>
      </h1>
      <h1 className="place">London</h1>
      <div className="border-socials">
        <div className="socials">
          <h1>
            80K
          </h1>
          <p>Followers</p>
        </div>
        <div className="socials">
          <h1>
            803K
          </h1>
          <p>Likes</p>
        </div>
        <div className="socials">
          <h1>
            1.4K
          </h1>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}
