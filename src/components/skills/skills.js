import styled from "styled-components";
import "../../styles/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faBootstrap, faSass, faReact} from "@fortawesome/free-brands-svg-icons";


const Container = styled.div`
    width: 65rem;
    max-width: 100%;
    max-width: 40rem;
    margin: 0px auto;
    padding: 0px 2%;
    margin-top: 50rem;
    margin-bottom: 5rem;
`;

const SkillsTitle = styled.h1`
    color: white;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
`;

const SkillsContainer = styled.section`
    display: flex;
    justify-content: space-around;
`;

const SkillsBody = styled.div`
    max-width: 100%;
    width: 100%;
`;

const SkillsIcon = styled.i`
    border-radius: 100%;
    padding: 30px;
    font-size: 30px;
    display: inline-block;
    background-color: #212121;
    color: #D008F9;
    transition: ease-in .3s;
    margin: 0px 13px;

    &:hover {
        transform: scale(1.1);
    }
`;


const Skills = () => {
    return(
        <>
            <Container>
                <SkillsTitle>Minhas Habilidades</SkillsTitle>
                <SkillsContainer>
                    <SkillsBody>
                        <SkillsIcon>
                            <FontAwesomeIcon size="1x" icon={faHtml5}></FontAwesomeIcon>
                        </SkillsIcon>
                        <SkillsIcon>
                            <FontAwesomeIcon size="1x" icon={faCss3}></FontAwesomeIcon>
                        </SkillsIcon>
                        <SkillsIcon>
                            <FontAwesomeIcon size="1x" icon={faBootstrap}></FontAwesomeIcon>
                        </SkillsIcon>
                        <SkillsIcon>
                            <FontAwesomeIcon size="1x" icon={faSass}></FontAwesomeIcon>
                        </SkillsIcon>
                        <SkillsIcon>
                            <FontAwesomeIcon size="1x" icon={faReact}></FontAwesomeIcon>
                        </SkillsIcon>
                    </SkillsBody>
                </SkillsContainer>
            </Container>
        </>
    );
}

export default Skills;