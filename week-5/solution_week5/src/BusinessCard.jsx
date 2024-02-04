import "./App";

export function BusinessCard(props) {
    return (
      <div id = "card" >
        <h2 className="name">Yash Agrawal</h2>
        <p className="description">I live in Mathura</p>
        <h3 className="interestsHeader">Interests</h3>
        {/* <ul style={styles.interestsList}>
          {props.interests.map((interest,index) => (
            <li key={index} style={styles.interestItem}>
              {interest}
            </li>
          ))}
        </ul> */}
        <div className="socialLinks">
          <a
            href={props.linkedin}
            target="_blank"
            className="link"
          >
            LinkedIn
          </a>
          <br />
          <a
            href={props.twitter}
            target="_blank"
            className="link"
          >
            Twitter
          </a>
          {/* {props.otherSocialMedia && (
            <a
              href={props.otherSocialMedia}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {props.otherSocialMedia.label}
            </a>
          )} */}

        </div>
      </div>
    );
  }
