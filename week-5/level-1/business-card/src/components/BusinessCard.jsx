/* eslint-disable react/prop-types */
export const BusinessCard = ({ name }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>Hi I am CS Student</p>
        <h3>Interests</h3>
        <ul>
          <li>React</li>
          <li>Next JS</li>
          <li>Node JS</li>
        </ul>
        <div>
          <button>LinkedIn</button>
          <button>Twitter</button>
        </div>
      </div>
    </>
  );
};
