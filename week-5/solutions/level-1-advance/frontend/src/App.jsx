import { useState } from "react";
import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import Card from "./components/Card";
import GetCards from "./components/GetCards";
import "./App.css";

function App() {
	const [cardData, setCardData] = useState(null);
	
	const generateCard = (data) => {
		setCardData(data);
	};

	const navigate = useNavigate();
	const location = useLocation();


	const navigateToShowAllCards = () => {
		navigate("/cards");
	};

	const navigateToGenerateCard = () => {
		navigate("/");
	};

	const homePage= location.pathname === "/";
	const cardsPage = location.pathname === "/cards";

	return (
		<>
			<div>
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>

			<div className="App">
				<h1>E-Card Generator</h1>

				{homePage && <Form onGenerate={generateCard} />}
				{homePage && cardData && <Card {...cardData} />}
				{cardsPage && (
					<Link to="/" onClick={navigateToGenerateCard}>
						<button>Generate Your Card</button>
					</Link>
				)}
				<Routes>
					<Route path="cards" element={<GetCards />} />
				</Routes>
				{homePage && (
					<button onClick={navigateToShowAllCards}>Show All Cards</button>
				)}
			</div>
		</>
	);
}

export default App;
