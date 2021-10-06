import React from "react";
import styled from "styled-components";
import "../../styles/style.css";
import { BrowserRouter, Link as LinkRouter, useLocation } from 'react-router-dom';
import { Link as LinkScroll} from "react-scroll";

import profile from "../../images/perfil.png"


const Container = styled.div`
    width: 65rem;
    max-width: 100%;
    height: 15rem;
    margin: 0px auto;
    padding: 0px 2%;
`;

const HeaderSite = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

const HeaderLogo = styled.h1`
    color: white;
    transition: ease-in .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        color: #D008F9;
    }

`;

const HeaderNav = styled.nav`
    display: flex;
    justify-content:  none;

`;

const HeaderMenu = styled.ul`
    
    li {
        color: white;
        list-style-type: none;
        text-align: center;
    }
`;

const BannerHeader = styled.div`
    margin-top: 12rem;

`;

const BannerDivider = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Presentation = styled.h1`
    color: white;
    margin-bottom: 10px;
    width: 16rem;

`;

const PresentationJob = styled.h3`
    color: white;
    margin-bottom: 10px;
    margin-top: 25px;
    color: #ccc;
    font-size: 1.2rem;

`;

const ButtonCV = styled.button`
    background-color: #D008F9;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-top: 20px;
    width: 7rem;
    height: 2rem;
    cursor: pointer;
    color: white;
    transition: ease-in .2s;

    &:hover {
        color: black;
        border: 1px solid #D008F9;
        background-color: white;
    }

`;

const ButtonContact = styled.button`
    border: 1px solid #CCC;
    background-color: #171717;
    border-radius: 5px;
    margin-top: 20px;
    width: 8rem;
    height: 2rem;
    cursor: pointer;
    color: white;
    margin-left: 15px;
`;

const ImageProfile = styled.img`
    width: 35%;
    height: 100%;
    margin-top: -70px;

    transition: ease-in .3s;

    &:hover {
        filter: drop-shadow(5px 5px 5px white)
    }
`;

const Header = () => {
    

    return(
        <>
            <BrowserRouter>
                <Container>
                    <HeaderSite>
                        <HeaderLogo>Fred - Portifólio</HeaderLogo>
                        <HeaderNav>
                            <HeaderMenu>
                                <ul className="menu-list">
                                    <li>
                                        <LinkRouter to="/" className="link-router"><LinkScroll to="Sobre"
                                            smooth={true}
                                            duration={500}
                                            spy={false}
                                            offset={-80}>Sobre</LinkScroll>
                                        </LinkRouter>
                                    </li>
                                    <li>
                                        <LinkRouter to="/projetos"  className="link-router"><LinkScroll to="Projetos"
                                            smooth={true}
                                            duration={500}
                                            spy={false}
                                            offset={-80}>Projetos</LinkScroll>
                                        </LinkRouter>
                                    </li>
                                    <li>
                                        <LinkRouter to="/habilidades"  className="link-router"><LinkScroll to="Habilidades"
                                            smooth={true}
                                            duration={500}
                                            spy={false}
                                            offset={-80}>Habilidades</LinkScroll>
                                        </LinkRouter>
                                    </li>
                                </ul>
                            </HeaderMenu>
                        </HeaderNav>    
                    </HeaderSite>
                    <BannerHeader>
                        <BannerDivider>
                            <Presentation>Olá, me chamo Fred Vieira
                                <PresentationJob>Sou desenvolvedor full stack junior!</PresentationJob>
                                <ButtonCV>Download CV</ButtonCV>
                                <ButtonContact>Entrar em contato</ButtonContact>
                            </Presentation>
                            
                            <ImageProfile src={profile}></ImageProfile>
                        </BannerDivider>
                    </BannerHeader>
                </Container>

            </BrowserRouter>
        </>
    );
}

export default Header;