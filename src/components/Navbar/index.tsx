import {
  GridContainer,
  GridContentLinks,
  ContentLinks,
  Social,
  SocialButtons,
  MenuTitle,
  TitleBox,
  Works,
  About,
  Nuggets,
  Posts,
} from "./styles";

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
            <p>Bite sized posts that teach you something new.</p>
          </TitleBox>
        </MenuTitle>
        <MenuTitle>
          <TitleBox>
            <h3>Posts</h3>
            <p>My ramblings about things that excite me.</p>
          </TitleBox>
        </MenuTitle>
      </ContentLinks>
      <Social>
        <div>
          <span>Paulo Vicente</span>
          <SocialButtons></SocialButtons>
        </div>
      </Social>
    </GridContainer>
  );
}

export default Navbar;
