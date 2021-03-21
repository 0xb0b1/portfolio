import React from "react";

import { Container, Nav, NavLogo, NavItems } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <Nav>
                <NavLogo>
                    <a href="/">
                        <p>&lt;PauloVicente /&gt;</p>
                    </a>
                </NavLogo>
                <NavItems>
                    <ul>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/skills">Skills</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </NavItems>
            </Nav>
        </Container>
    );
};

export default Header;
