import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    margin-top: 15px;
    gap: 2px;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;

    &:hover{
    cursor: pointer;
    
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002f52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
width: 150px;
`

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
            <ImgLivro src={img} />
            <Botao>Saiba Mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda;

