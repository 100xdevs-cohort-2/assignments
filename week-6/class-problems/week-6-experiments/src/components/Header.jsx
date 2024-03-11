/* eslint-disable react/prop-types */
import React from "react";

// export const Header = ({ title }) => {
//   return <div>{title}</div>;
// };

// ********** React MEMO ***********
// eslint-disable-next-line react/display-name
export const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});
