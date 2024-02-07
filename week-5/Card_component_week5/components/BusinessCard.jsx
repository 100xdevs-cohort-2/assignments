export function BusinessCard(props) {
    return (
        <div className="w-1/3 border-2 m-10 p-5 rounded-lg font-serif bg-gray-100">
            <div>
                <div className="text-2xl font-semibold text-pretty">
                    {props.name}
                </div>
                <p className="text-s pt-2 pb-2">{props.description}</p>
                <h3 className="text-xl font-semibold pb-2">Interests</h3>
                <ul className="list-disc pl-5">
                {props.interests.map((interest) => (
                    <li key={interest} className="text-xs pb-2">
                    {interest}
                    </li>
                ))}
                </ul>
                <div className="flex space-x-10">
                    <a href={props.linkedin} className="border-2 p-1 rounded-lg bg-blue-400 text-s text-white">
                        LinkedIn
                    </a>
                    <br />
                    <a href={props.twitter} className="border-2 p-1 rounded-lg bg-blue-400 text-s text-white">
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
  }