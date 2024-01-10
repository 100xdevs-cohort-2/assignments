const CardComponent = ({ props }) => {
  return (
    <main className="p-5 shadow-md w-full">
      <div>
        <h1 className="text-3xl font-semibold">{props.name}</h1>
        <p className="mt-2">{props.work}</p>
        <div className="mt-4">
          <h1 className="font-bold text-lg">Interests</h1>
          {props.interests.map((prop) => (
            <p key={prop}>{prop}</p>
          ))}
        </div>

        <div className="flex gap-x-4 mt-4">
          <button className="py-2 px-4 bg-blue-600 rounded-md text-white">
            LinkedIn
          </button>
          <button className="py-2 px-4 bg-blue-600 rounded-md text-white">
            Twitter
          </button>
        </div>
      </div>
    </main>
  );
};

export default CardComponent;
