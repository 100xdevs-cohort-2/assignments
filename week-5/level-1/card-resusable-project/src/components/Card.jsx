/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  // const {name , description, socialMeidaHandlesiastical, interests} = card
  console.log(card);
  return (
    <div className="">
      {card.map((cards, index) => {
        return (
          <div
            key={index}
            className="max-w-md mx-auto bg-white  overflow-hidden shadow-md mb-4 border-2 border-balck rounded-xl p-3 w-1/2"
          >
            <h1>{cards.name}</h1>
            <p>
              {/* A full time software engineer working on freelance projects and also
        personal projects */}
              {cards.description}
            </p>
            <div>
              {cards.socialMeidaHandles.map((social) => {
                return (
                  <a key={index} href={social.path}>
                    <box-icon
                      name={social.icon}
                      type="logo"
                      className="cursor-pointer"
                    ></box-icon>
                  </a>
                );
              })}

              {/* <box-icon name="twitter" type="logo"></box-icon>
              <box-icon name="github" type="logo"></box-icon> */}
            </div>
            <h1>Interests : </h1>
            {cards.interests.map((interest) => {
              return <h1 key={index}>{interest}</h1>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
