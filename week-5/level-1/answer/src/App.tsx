import Card, { PersonPropsTypes } from "./components/Card";

const persons: PersonPropsTypes[] = [
  {
    name: "Tushar",
    intrests: ["coding", "youtube", "teaching"],
    job: "YouTuber",
    socials: [
      { socialName: "YouTube", url: "https://www.youtube.com/@codesoni" },
      {
        socialName: "LinkedIn",
        url: "https://www.linkedin.com/in/tushar-verma-developer/",
      },
    ],
  },
];

function App() {
  return (
    <div className="w-full h-screen bg-slate-800 text-white p-3">
      {persons.map((person, index) => {
        return (
          <Card
            key={index}
            intrests={person.intrests}
            job={person.job}
            name={person.name}
            socials={person.socials}
          />
        );
      })}
    </div>
  );
}

export default App;
