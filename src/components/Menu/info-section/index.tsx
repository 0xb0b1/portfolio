import { Social, SocialButtons } from "../styles";

// font-awesome icons
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

const InfoSection: React.FC = () => {
  return (
    <Social>
      <span>Paulo Vicente</span>
      <SocialButtons>
        <FaGithub className="sc-icons" />
        <FaLinkedinIn className="sc-icons" />
        <FaTwitter className="sc-icons" />
        <FaInstagram className="sc-icons" />
        <FaTelegram className="sc-icons" />
        <FaWhatsapp className="sc-icons" />
        <FaDiscord className="sc-icons" />
      </SocialButtons>
    </Social>
  );
};

export default InfoSection;
