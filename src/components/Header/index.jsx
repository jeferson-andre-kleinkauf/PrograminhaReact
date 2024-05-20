import React from "react";
import LogoImg from "../../assets/Logo.png";
import { Container, Logo, Menu } from "./style";

const Header = () => {
    return (
        <Container>
           <Logo>
            <img src={LogoImg} alt=""/>
           </Logo>
           <Menu>
            <ul>
                <li><span>Cadastro/Login</span></li>   
            </ul>
           </Menu>
        </Container>
    )
}

export default Header;