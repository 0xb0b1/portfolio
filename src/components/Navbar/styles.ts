import styled from "styled-components";

export const GridContainer = styled.div`
  height: 100vh;
  width: 100%;

  /* font-family: "Nunito Sans", sans-serif; */

  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr;
`;

export const GridContentLinks = styled.div``;

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

  text-transform: uppercase;

  h3 {
    font-size: 3rem;
    font-weight: 900;
  }
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
`;

export const Social = styled.div`
  grid-column: 2;

  background-color: rgb(28, 33, 39);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 4rem;
      color: #f20a72;
      font-family: "Dela Gothic One", cursive;
    }
  }
`;

export const SocialButtons = styled.div``;

export const Works = styled.div``;
export const About = styled.div``;
export const Nuggets = styled.div``;
export const Posts = styled.div``;
