import React from "react";
import { Container, Description, Img, Itens} from "./styles";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
    return (
        <Container>
            <Img>
                <img src="https://s.cafebazaar.ir/images/icons/com.dodreams.driveahead-99b0d41a-404b-459c-9bfc-3808f0107b36_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="100px" />
            </Img>
            <Description>
                <h4>choque-choque</h4>
                <Itens>
                    <span><FaMapMarkedAlt/> carros de briquedo</span>
                    <span>R$ 2.800,00 / mês</span>
                </Itens>
                <a href="#">Detalhes<FaArrowRight /></a>
            </Description>
        </Container>
    )
}

export default Card;