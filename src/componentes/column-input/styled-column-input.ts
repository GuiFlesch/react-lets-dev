import styled from "styled-components"

export const ColumnInput = styled.div`
display: flex;
flex-direction: column;
gap: 1.5625rem;
margin-bottom: 4.375rem;

&.input-text {
    /* Faz o input usar 50% do container dele */
    width: 50%;
}

&.select{
    /* Faz o input usar 30% do container dele */
    width: 30%;
}

input[type="text"],
input[type="number"],
select,
textarea {
    /*Padroniza o estilo dos inputs */
    border: 0.0625rem solid #201e1f;
    padding: 0.625rem;
    height: 2.1875rem;

    //Arredonda a borda e destaca ao clicar
    border-radius: 0.3125rem;

    :focus {
        outline: 0.0625rem solid #7d2eba;
    }
}

select {
    /* ajusta o espaçamento, pois o que padroniza zoa só o select */
    padding: 0 0.3125rem;

    //coloca um cursor pointer
    cursor: pointer;
}
`;