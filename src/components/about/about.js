import React from "react";
import styled from "styled-components";
import "../../styles/style.css";
import { Link as LinkScroll} from "react-scroll";

const Container = styled.div`
    width: 65rem;
    max-width: 100%;
    max-width: 40rem;
    margin: 0px auto;
    padding: 0px 2%;
    margin-top: 40rem;
    margin-bottom: 5rem;
`;

const AboutMe = styled.section`
    width: 100%;

`;

const AboutMeTitle = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 25px;
`;

const AboutMeP = styled.p`
    color: #ccc;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;
    width: 25rem;
    max-width: 100%;
`;




const About = () => {
    return(
        <>
            <Container>
                <LinkScroll id="Sobre">
                    <AboutMe>
                        <AboutMeTitle>Sobre mim</AboutMeTitle>
                        <AboutMeP>Me chamo Fred Vieira, tenho 20 anos e estou cursando Ciências da Computação. Gosto de tecnologia e estou aprendendo a mexer com React no frontend e C#/.NET no backend, além de ver um pouco sobre banco de dados, sendo eles: MySQL e SQL Server, um pouco de QA, sabendo usar Cypress e NUnit. Futuramente pretendo estudar sobre Unity, para fazer uns projetos de jogos 2D e 3D.</AboutMeP>
                    </AboutMe>
                </LinkScroll>
                
            </Container>
        </>
    );
}


export default About;