// my styled components
import {
  GridContainer,
  ContentLinks,
  Social,
  SocialButtons,
  MenuTitle,
  TitleBox,
} from "./styles";

// font-awesome icons
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

function Navbar(title: string) {
  return (
    <GridContainer>
      <ContentLinks>
        <MenuTitle>
          <TitleBox className="text-primary">
            <h3 className="tile">Works</h3>
            <p>Things I've done.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox className="text-secondary">
            <h3 className="tile">About</h3>
            <p>Get to know me.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox className="text-secondary">
            <h3 className="tile">Nuggets</h3>
            <p>Snippets that teach you about something new.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox className="text-primary">
            <h3 className="tile">Posts</h3>
            <p>My blog where I post about things that I like.</p>
          </TitleBox>
        </MenuTitle>
      </ContentLinks>
      <Social>
        <span>Paulo Vicente</span>
        <SocialButtons>
          <FaGithub className="sc-icons" />
          <FaLinkedinIn className="sc-icons" />
          <FaTwitter className="sc-icons" />
          <FaInstagram className="sc-icons" />
          <FaTelegram className="sc-icons" />
        </SocialButtons>
      </Social>
    </GridContainer>
  );
}

export default Navbar;
