export function BusinessCard(props) {

    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{props.name}</h2>
            <p style={styles.description}>{props.description}</p>
            <h3 style={styles.interestsHeader}>Interests</h3>
            <ul style={styles.interestsList}>
                {props.interests.map((interest) => (
                    <li key={interest} style={styles.interestItem}>
                        {interest}
                    </li>
                ))}
            </ul>
            <div style={styles.socialLinks}>
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
                    LinkedIn
                </a>
                <br />
                <a href={props.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Twitter
                </a>
                {props.otherSocialMedia && (
                    <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        {props.otherSocialMedia.label}
                    </a>
                )}
            </div>
        </div>
    );