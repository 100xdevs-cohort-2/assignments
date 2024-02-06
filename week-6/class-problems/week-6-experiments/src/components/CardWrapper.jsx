// export const CardWrapper = ({InnerComponent}) => {
//   console.log("from card component");
//   return <div>{InnerComponent}</div>;
// }

// Recommended way to write a wrapper component
export const CardWrapper = ({ children }) => {
  return <div style={{ border: "2px solid red" }}>{children}</div>;
};
