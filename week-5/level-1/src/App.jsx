import { BusinessCard } from "./BusinessCard";
const cardProps = {
  name: "Priyam More",
  description: "Full-Stack Developer",
  interests: ["React", "JavaScript", "Web Development"],
  linkedin: "https://www.linkedin.com/in/",
  twitter: "https://twitter.com/johndoe",
  otherSocialMedia: {
    link: "https://www.example.com",
    label: "Github",
  },
};

function App() {
  return (
    <>
      <BusinessCard {...cardProps} />
    </>
  );
}

export default App;
