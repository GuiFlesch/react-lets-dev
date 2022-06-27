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
max-width: 1200px;

/* Espaço interno dos elementos */
padding: 90px;
`;

export const H2 = styled.h2`
text-align: center;
`;

export const Instrucao = styled.p`
text-align: center;
margin: 20px 0 60px 0;
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
}
`;

export const Aviso = styled.p`
font-weight: 500;
margin-bottom: 100px;

strong{
    color: #bd041a;
    font-weight: 600;
}
`
