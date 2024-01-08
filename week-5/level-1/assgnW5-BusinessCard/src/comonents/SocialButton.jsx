/* eslint-disable react/prop-types */
export function SocialButton({ socialLink, buttonText }) {
  const redirectToSocialLink = () => {
    window.open(socialLink, "_blank");
  };

  return <button onClick={redirectToSocialLink}>{buttonText}</button>;
}
