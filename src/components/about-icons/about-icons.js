import React from "react";
import styled from "styled-components";
import "../../styles/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGrinBeam } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
    width: 65rem;
    max-width: 100%;
    max-width: 40rem;
    margin: 0px auto;
    padding: 0px 2%;
    margin-top: 8rem;
    margin-bottom: 8rem;
`;

const AboutIconsSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2%;
`;

const AboutIconsBody = styled.div`
    max-width: 100%;
    
`;

const AboutIconsType = styled.i`
    border-radius: 100%;
    padding: 35px;
    display: inline-block;
    background-color: #212121;
    color: #D008F9;
    transition: ease-in .3s;

    &:hover {
        transform: scale(1.1);
    }
`;

const AboutIconsTitle = styled.h4`
    color: white;
    text-align: center;
    margin: 25px 0px 15px 0px;
`;

const AboutIconsDesc = styled.h4`
    color: #ccc;
    text-align: center;
`;

const AboutIconsDescLink = styled.a`
    color: #ccc;
    text-decoration: none;
    transition: ease-in .3s;

    &:hover {
        color: #D008F9;
    }
`;

const AboutIcons = () => {


    return(
        <>
            <Container>
                <AboutIconsSection>
                    <AboutIconsBody>
                        <AboutIconsType>
                            <FontAwesomeIcon size="2x" icon={faGrinBeam}>
                                
                            </FontAwesomeIcon>
                        </AboutIconsType>
                        <AboutIconsTitle>
                            Meu Nome:
                        </AboutIconsTitle>
                        <AboutIconsDesc>
                            Fred Vieira
                        </AboutIconsDesc>
                    </AboutIconsBody>
                    <AboutIconsBody>
                        <AboutIconsType style={{marginLeft: "60px"}}>
                            <FontAwesomeIcon size="2x" icon={faEnvelope}>

                            </FontAwesomeIcon>
                        </AboutIconsType>
                        <AboutIconsTitle>
                            <h4>E-mail:</h4>
                        </AboutIconsTitle>
                        <AboutIconsDesc>
                            <h3>fredvieira0709@gmail.com</h3>
                        </AboutIconsDesc>
                    </AboutIconsBody>
                    <AboutIconsBody>
                        <AboutIconsType>
                            <FontAwesomeIcon size="2x" icon={faGithub}>

                            </FontAwesomeIcon>
                        </AboutIconsType>
                        <AboutIconsTitle>
                            <h4>Github:</h4>
                        </AboutIconsTitle>
                        <AboutIconsDesc>
                            <AboutIconsDescLink href="https://github.com/FredVieira7">
                                Ir para
                            </AboutIconsDescLink>
                        </AboutIconsDesc>
                    </AboutIconsBody>
                    
                </AboutIconsSection>
            </Container>
        </>
    );
}

export default AboutIcons;