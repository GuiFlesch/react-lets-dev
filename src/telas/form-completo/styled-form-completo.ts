import styled from 'styled-components';

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
