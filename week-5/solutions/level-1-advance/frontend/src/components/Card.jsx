import React from "react";
import linkedinLogo from "../assets/linkedin-icon.png";
import githubLogo from "../assets/github-icon.png";
import twitterLogo from "../assets/twitter-icon.png";
import "./Card.css";

const Card = (props) => {
	const { name, description, linkedin, twitter, github, interests } = props;

	return (
		<div className="card">
			<h2>{name}</h2>
			<p>{description}</p>

			<div className="social-media">
				{linkedin && (
					<a href={linkedin} target="_blank" rel="noopener noreferrer">
						<img src={linkedinLogo} alt="LinkedIn" />
					</a>
				)}

				{twitter && (
					<a href={twitter} target="_blank" rel="noopener noreferrer">
						<img src={twitterLogo} alt="Twitter" />
					</a>
				)}

				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer">
						<img src={githubLogo} alt="GitHub" />
					</a>
				)}
			</div>

			<div className="interests">
				<h3>Interests:</h3>
				{interests}
			</div>
		</div>
	);
};

export default Card;
