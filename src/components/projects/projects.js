import React from "react";
import styled from "styled-components";
import "../../styles/style.css";

import DeliveryPizzas from '../../images/deliverypizzas.png';
import DeliveryPizzasTests from '../../images/deliverypizzastests.png';
import ContaBancaria from '../../images/contabancaria.png';
import Aero from '../../images/fcamara.png';
import TestesUnitarios from '../../images/testesunitarios.png';
import ReactTodoList from '../../images/reacttodolist.png';

const Container = styled.div`
    width: 65rem;
    max-width: 100%;
    height: 2rem;
    margin: 0px auto;
    padding: 0px 2%;
`;

const ContainerProjects = styled.section`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`;

const ProjectsTitle = styled.h1`
    color: white;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 70px;
`;

const ProjectsBody = styled.div`
    width: 20rem;
    height: 17rem;
    max-width: 100%;
    max-height: 100%;
    padding: 15px 15px 50px 15px;
    margin-bottom: 50px;
    background-color: #212121;
    border-radius: 5px;
    transition: ease-in .3s;

    &:hover {
        box-shadow: 1px 1px 3px 3px rgba(255,255,255, 0.5);
        transform: scale(1.05);
    }
`;

const ProjectsImg = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border: 1px solid #ccc;
    cursor: pointer;
`;

const ProjectsBodyTitle = styled.h3`
    color: white;
    margin: 10px 0px;
`;

const ProjectsBodyDesc = styled.p`
    color: white;
`;





const Projects = () => {
    return(
        <>
            <Container>
                <ProjectsTitle>Projetos</ProjectsTitle>
                <ContainerProjects>

                    <ProjectsBody>
                        <ProjectsImg src={DeliveryPizzas}></ProjectsImg>
                        <ProjectsBodyTitle>Pizza Delivery</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: HTML, CSS e JavaScript.</ProjectsBodyDesc>
                    </ProjectsBody>

                    <ProjectsBody>
                        <ProjectsImg src={DeliveryPizzasTests}></ProjectsImg>
                        <ProjectsBodyTitle>Pizza Delivery Tests</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: JavaScript e Cypress.</ProjectsBodyDesc>
                    </ProjectsBody>

                    <ProjectsBody>
                        <ProjectsImg src={ContaBancaria}></ProjectsImg>
                        <ProjectsBodyTitle>Conta Bancária</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: .NET e C#.</ProjectsBodyDesc>
                    </ProjectsBody>

                </ContainerProjects>

                <ContainerProjects>

                    <ProjectsBody>
                        <ProjectsImg src={ReactTodoList}></ProjectsImg>
                        <ProjectsBodyTitle>Todo List</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: HTML, CSS, JS e React com Styled Components.</ProjectsBodyDesc>
                    </ProjectsBody>

                    <ProjectsBody>
                        <ProjectsImg src={Aero}></ProjectsImg>
                        <ProjectsBodyTitle>FCamara-Squad09 Hackathon</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: HTML, CSS e JavaScript.</ProjectsBodyDesc>
                    </ProjectsBody>
                        
                    <ProjectsBody>
                        <ProjectsImg src={TestesUnitarios}></ProjectsImg>
                        <ProjectsBodyTitle>Testes Unitários em C#</ProjectsBodyTitle>
                        <ProjectsBodyDesc>Tecnologias: C# e NUnit.</ProjectsBodyDesc>
                    </ProjectsBody>

                </ContainerProjects>
            </Container>

        </>
    );
}

export default Projects;