import styled from "styled-components";
import "../../styles/style.css";

const FooterBody = styled.footer`
    width: 100%;
    max-width: 100%;
    height: 5rem;
    background-color: #212121;
`;

const FooterTitle = styled.h3`
    text-align: center;
    color: white;
    padding: 29px 0px;
`;

const Footer = () => {
    return(
        <>
            
            <FooterBody>
                <FooterTitle>Feito por Fred Vieira</FooterTitle>
            </FooterBody>
            
        </>
    )
}


export default Footer;