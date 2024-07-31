import Link from "next/link";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const socials = [
  { icons: <FiGithub />, path: "https://github.com/Amit-Biswas-WD" },
  { icons: <FiLinkedin />, path: "https://www.linkedin.com/in/amit-biswas-web" },
  { icons: <FiFacebook />, path: "https://www.facebook.com/amitbiswas9282" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return (
          <Link target="_blank" key={index} href={items.path} className={iconStyles}>
            {items.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
