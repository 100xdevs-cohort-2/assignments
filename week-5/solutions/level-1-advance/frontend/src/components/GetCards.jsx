// components/GetCards.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./GetCards.css"

const GetCards = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetchCards();
	}, []);

	const fetchCards = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/cards");

			if (response.status === 200) {
				setCards(response.data);
			} else {
				console.error("Failed to fetch cards");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="card-list">
			{cards.map((card) => (
				<Card key={card._id} {...card} />
			))}
		</div>
	);
};

export default GetCards;
