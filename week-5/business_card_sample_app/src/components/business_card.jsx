export function BusinessCard(props) {
  return (
    <div style={styles.card}>
      <h1 style={styles.name}>{props.name}</h1>
      <p style={styles.description}>{props.description}</p>
      <h1 style={styles.interestsHeader}>Interests</h1>
      <ul style={styles.interestsList}>
        {props.interests.map((interest) => (
          <li style={styles.interestItem}>{interest}</li>
        ))}
      </ul>
      <div style={styles.socialLinks}>
        {props.Socials.map((social) => (
          <a href={social.link} style={styles.link}>
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px 30px",
    maxWidth: "400px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  socialLinks: {
    display: "flex",
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#fff", // Text color
    padding: "10px 15px", // Padding for the button
    borderRadius: "5px", // Border radius for rounded corners
    backgroundColor: "#007BFF", // Background color for the button
    display: "inline-block", // Display as inline-block to be side by side
    margin: "10px 20px 10px 0px", // Margin between buttons
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle lift
  },
  interestsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
};

{
  /* <div style="border: 1px solid #ddd;border-radius: 12px;padding: 20px;margin: 10px;max-width: 400px;background-color: #f8f9fa;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}
