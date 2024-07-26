import Link from "next/link";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const socials = [
  { icons: <FiGithub />, path: "" },
  { icons: <FiLinkedin />, path: "" },
  { icons: <FiFacebook />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return (
          <Link key={index} href={items.path} className={iconStyles}>
            {items.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
