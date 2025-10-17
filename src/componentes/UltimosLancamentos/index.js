import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from '../Titulo/';
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../imagens/livro2.png';
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovoLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
        <Titulo 
        cor={'#202020'} 
        tamanhoFonte={"30px"}
        alinhamento={""}
        >ULTIMOS LANÇAMENTOS</Titulo>
        <NovoLivrosContainer>
        {livros.map(livro => (
            <img src={livro.src}/>
        ))}
        </NovoLivrosContainer>
        <CardRecomenda 
            titulo = "Talvez você se interesse por..."
            subtitulo = "Angular 11"
            descricao = "Construindo uma aplicação integrada com a plataforma Google"
            img = {imagemLivro}
        />
        </UltimosLancamentosContainer>
    )
};

export default UltimosLancamentos;