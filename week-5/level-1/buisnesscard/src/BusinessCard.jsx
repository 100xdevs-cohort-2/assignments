import "./BuisnessCard.css";

export default function BusinessCard({ name, description, interests }) {
        return (
          <div className="main">
            <h3>{name}</h3>
            <h2>{description}</h2>
            <h3>Interests</h3>
            {interests.map((interest, key) => (
              <div key={key} className="interest">
                <h4>{interest}</h4>
              </div>
            ))}
            <div className="socials">
              <button className="linked">LinkedIN</button>
              <button className="linked">Twitter</button>
            </div>
          </div>
        );
      }
