import React, { Fragment } from "react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/Logo.png";
import { Container, Copy, Item } from "./styles";

const Footer = ( ) => {
    return (
       <Fragment>]
         <Container>
            <Item>
                <img src={LogoImg} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</p>
                <nav>
                    <li><span><FaFacebook size={32}/></span></li>
                    <li><span><FaInstagram size={32}/></span></li>
                    <li><span><FaWhatsapp size={32}/></span></li>
                </nav>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Assistir</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>devolver</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Assistir</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>devolver</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Assistir</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>devolver</span></li>
                </ul>
            </Item>
            
        </Container>
        <Copy>
            <p>Copyright 2001-2022 Copyright.com.br - All Rights Reserved</p>
            <ul>
                <li><span>Termos de Uso</span></li>
                <li><span>Política de Privacidade</span></li>
                <li><span>Política de Cookies</span></li>
            </ul>
        </Copy>
       </Fragment>
    )
}

export default Footer;