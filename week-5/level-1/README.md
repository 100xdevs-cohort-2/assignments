You have to create a simple React App which has a reusable Card Component which has the following

- Ability to pass in props to the Component
- The Card must show a person's
  - Name
  - A short description
  - LinkedIn, Twitter and other Social Media Handle buttons
  - Interests Section
- You can assume that this is kind of an e-business card and feel free to put in your creativity
- Additional & Slightly advanced:

  - Create a page where you can add these kind of Cards by taking input from the user
  - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
  - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)

  const cardData = {
  id: 1,
  name: "Shubham",
  description: "lorem ipsum DOLOR",
  socialMediaHandles: [
  {
  link: "https://google.com",
  name: "google",
  logo: "https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg",
  },
  {
  link: "https://linkedin.com",
  name: "linkedIn",
  logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
  },
  ],
  interests: ["cricket", "reading books", "gymming"],
  };
