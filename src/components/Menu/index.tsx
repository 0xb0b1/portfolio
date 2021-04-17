import InfoSection from "./info-section";
import TileSection from "./tile-section";

// my styled components
import { GridContainer, ContentLinks } from "./styles";

function Menu() {
  return (
    <GridContainer>
      <ContentLinks>
        <TileSection />
      </ContentLinks>
      <InfoSection />
    </GridContainer>
  );
}

export default Menu;
