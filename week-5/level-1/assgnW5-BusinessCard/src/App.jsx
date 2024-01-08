import "./App.css";
import { BusinessCard } from "./comonents/BusinessCard";

const user = {
  name: "Lokeshwar",
  description: "A TA in the 100xDevs Cohort 2.0",
  interests: ["Ionic", "Open Source", "App Dev"],
  socials: {
    linkedIn: "https://www.linkedin.com/in/rajan-yadav-8a0b2b1b4/",
    twitter: "https://twitter.com/blackbird4982",
  },
};

function App() {
  return (
    <>
      <BusinessCard user={user} />
    </>
  );
}

export default App;
