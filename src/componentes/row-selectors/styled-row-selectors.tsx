import styled from "styled-components";

export const RowSelectors = styled.div`
display: flex;
align-items: center;
gap: 10px;

input[type="radio"],
input[type="checkbox"] {
    accent-color: #7d2eba;

    cursor: pointer;
}

label{
    font-weight: 400;
}
`;