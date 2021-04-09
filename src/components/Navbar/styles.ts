import styled from "styled-components";

export const GridContainer = styled.nav`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr;
`;

// export const GridContentLinks = styled.div``;

export const ContentLinks = styled.div`
  grid-column: 1/2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  padding: 0 0 2rem 1rem;

  background-color: rgb(25, 30, 35);
  color: rgb(230, 219, 116);

  &:first-child,
  &:last-child {
    background-color: rgb(28, 33, 39);
    color: rgb(242, 10, 114);
  }
`;

export const TitleBox = styled.div`
  flex-direction: column;

  .tile {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;

    cursor: pointer;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;

      height: 100%;

      overflow: hidden;

      transform: scale(0);

      transition: all 0.4s;
      /* content: attr(title); */
    }

    &:hover::before {
      transform: scale(1.1);
    }
  }

  p {
    font: 400 1.2rem "Nunito Sans", sans-serif;
  }
`;

export const Social = styled.div`
  grid-column: 2;

  background-color: rgb(28, 33, 39);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  span {
    font-size: 4rem;
    color: #f20a72;
    font-family: "Dela Gothic One", cursive;
  }
`;

export const SocialButtons = styled.div`
  font-size: 2rem;
  /* margin: 0 auto; */
  padding: 2rem;

  color: rgb(230, 219, 116);

  .sc-icons {
    margin: 0.85rem;
  }
`;
