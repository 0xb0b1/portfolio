import { MenuTitle, TitleBox } from "../styles";

const TileSection: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default TileSection;
