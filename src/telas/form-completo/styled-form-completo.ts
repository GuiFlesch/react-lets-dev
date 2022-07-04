import styled from 'styled-components';

export const Image = styled.img`
width: 100%;
`;

export const Container = styled.div`
/* Definir os itens em coluna */
display: flex;
flex-direction: column;
align-items: center;

/* Limita o conteúdo para caber nos notebooks */
max-width: 75rem;

/* Espaço interno dos elementos */
padding: 90px;

@media (max-width: 767px){
    display: flex;
    width: 90%;
}
`;

export const H2 = styled.h2`
text-align: center;
`;

export const Instrucao = styled.p`
text-align: center;
margin: 20px 0 60px 0;

@media (max-width: 767px){
    margin-left: 0px;
}
`;

export const Divisor = styled.hr`
background: #e5e5e5;
height: 1px;
width: 100%;
margin: 100px 0 35px 0;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
width: 100%;

textarea {
    min-height: 100px;
    max-height: 200px;
    min-width: 50%;
    max-width: 100%;

    @media(max-width: 767px){
        width: 50%;

    }
}

@media (max-width: 767px){
    width: 85%;
    display: flex;
    flex-wrap: wrap;    
    }

`;

export const Aviso = styled.p`
font-weight: 500;
margin-bottom: 100px;

strong{
    color: #bd041a;
    font-weight: 600;
}

@media (max-width: 767px){
    flex-wrap: wrap;
}
`
