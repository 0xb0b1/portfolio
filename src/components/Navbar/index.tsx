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

function Navbar() {
  return (
    <GridContainer>
      <ContentLinks>
        <MenuTitle>
          <TitleBox>
            <h3>Works</h3>
            <p>Things I've done.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox>
            <h3>About</h3>
            <p>Get to know me.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox>
            <h3>Nuggets</h3>
            <p>Snippets that teach you about something new.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox>
            <h3>Posts</h3>
            <p>My blog where I post about things that I like.</p>
          </TitleBox>
        </MenuTitle>
      </ContentLinks>
      <Social>
        <span>Paulo Vicente</span>
        <SocialButtons>
          <FaGithub />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
          <FaTelegram />
        </SocialButtons>
      </Social>
    </GridContainer>
  );
}

export default Navbar;
