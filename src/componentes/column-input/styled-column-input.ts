import styled from "styled-components"

export const ColumnInput = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
margin-bottom: 70px;

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
    border: 1px solid #201e1f;
    padding: 10px;
    height: 35px;

    //Arredonda a borda e destaca ao clicar
    border-radius: 5px;

    :focus {
        outline: 1px solid #7d2eba;
    }
}

select {
    /* ajusta o espaçamento, pois o que padroniza zoa só o select */
    padding: 0 5px;

    //coloca um cursor pointer
    cursor: pointer;
}
`;