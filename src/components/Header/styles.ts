import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--background);
`;

export const Nav = styled.nav`
    max-width: 1120px;
    margin: 0 auto;

    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLogo = styled.div`
    a {
        text-decoration: none;
        list-style: none;
        color: var(--text-title);
    }
`;

export const NavItems = styled.div`
    padding: 0.25rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        list-style: none;

        margin-top: -0.1em;
        text-align: center;
        font-size: 1.25rem;
        cursor: pointer;

        li > a {
            display: flex;
            align-items: center;
            width: 100%;
            border-radius: 5px;
            text-decoration: none;
            filter: grayscale(100%) opacity(1);
            transition: 600ms;
        }
    }
`;
