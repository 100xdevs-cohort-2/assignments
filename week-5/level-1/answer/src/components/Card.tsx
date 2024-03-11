export interface PersonPropsTypes {
  name: string;
  job: string;
  intrests: string[];
  socials: Array<{ socialName: string; url: string }>;
}

export default function Card({
  name,
  job,
  intrests,
  socials,
}: PersonPropsTypes) {
  return (
    <div className="__card py-7 min-w-[350px] px-3 border-2 border-gray-300 w-fit rounded-lg bg-white text-black">
      <h1 className="text-3xl font-bold my-3">{name}</h1>
      <p>{job}</p>

      <h1 className="text-xl font-bold">Intrests</h1>
      <ul>
        {intrests.map((intrest) => {
          return <li>{intrest}</li>;
        })}
      </ul>
      <div className="__socials mt-4 flex gap-2">
        {socials.map((social) => {
          return (
            <a
              className="px-4 py-2 bg-blue-500 rounded text-white"
              target="_blank"
              href={social.url}
            >
              {social.socialName}
            </a>
          );
        })}
      </div>
    </div>
  );
}
