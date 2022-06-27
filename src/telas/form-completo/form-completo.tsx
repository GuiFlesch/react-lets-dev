import React, { FormEvent } from 'react';
import * as s from "./styled-form-completo"
import { Banner } from "../../imagens"
import Titulo from '../../componentes/Titulo';
import { Row, ColumnInput, Label, RowSelectors } from '../../componentes';



// import { Container } from './styles';



const FormCompleto: React.FC = () => {

    function enviarFormulario(event: FormEvent) {
        event.preventDefault();

        // const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.
    
        //     Em sua descrição de perfil consta: "${descricaoPerfil}".
    
        //     Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
        //     Currículo: ${curriculo ? curriculo.files[0].name : "Não informado"}
        //     `;

        // alert(mensagem);
    }

    const cancelar = (event: FormEvent) => {
        // Evita o redirecionamento padrão para outra tela e manda um alert
        event.preventDefault();
        alert("Cancelando...");
    };

    return (
        <>
        <s.Image src={Banner} alt="Imagem Let's Dev"/>
        <s.Container>
        <Titulo titulo="Formulário 2ª edição"/>

        <s.H2>
            Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado!
        </s.H2>
        <s.Instrucao>
            Preencha corretamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe!
        </s.Instrucao>

        <s.Divisor/>

        {/*Aqui começam os itens agrupados em coluna*/}
        <s.Formulario onSubmit={enviarFormulario}>
            <s.Aviso>
                <strong>ATENÇÃO: </strong> os campos contendo o asterisco (*) são de preenchimento obrigatório!
            </s.Aviso>

            {/*Aqui começam os inputs de digitação.*/}
            <Row>
                <ColumnInput className="input-text">
                    <Label htmlFor="">Nome completo: *</Label>
                    <input type="text" name="nome" placeholder="Digite seu nome aqui" required />
                </ColumnInput>

                <ColumnInput>
                    <label htmlFor="">Idade:</label>
                    <input type="number" name="idade" placeholder="Digite sua idade" />
                </ColumnInput>
            </Row>

            {/* Aqui começam os inputs de seleção */}
            <Row>
                <ColumnInput className="select">
                    <Label htmlFor="">Ocupação:</Label>
                    <select name="ocupacao" id="">
                        <option>Selecione sua ocupação</option>
                        <option>Estudante</option>
                        <option>Trabalhador CLT</option>
                        <option>Trabalhador PJ</option>
                        <option>Autônomo</option>
                        <option>Outros</option>
                    </select>
                </ColumnInput>

                {/*Aqui continuam os inputs de seleção*/}
                <ColumnInput>
                    <Label htmlFor="">Área de preferência:</Label>

                    <Row style={{ gap: '25px' }}>
                        <RowSelectors>
                            <input type="radio" id="front" name="area-preferencia" value="Front-end" checked />

                            <Label htmlFor="front">Front-end</Label>
                        </RowSelectors>
                        <RowSelectors>
                            <input type="radio" id="back" name="area-preferencia" value="Back-end" />

                            <Label htmlFor="back">Back-end</Label>
                        </RowSelectors>

                        <RowSelectors>
                            <input type="radio" id="full" name="area-preferencia" value="Full stack" />

                            <Label htmlFor="full">Full stack</Label>
                        </RowSelectors>
                    </Row>
                </ColumnInput>
            </Row>

            {/*Aqui começam os botões, textarea e checkbox*/}
            <ColumnInput>
                <Label htmlFor="">Anexar currículo</Label>
                <input type="file" />
            </ColumnInput>

            <ColumnInput style={{ marginBottom: '50px' }}>
                <Label htmlFor="">Descrição do perfil do candidato:</Label>
                <textarea name="descricao-perfil"
                    placeholder="Nos fale um pouco sobre o seu perfil pessoal e profissional"></textarea>
            </ColumnInput>

            <ColumnInput style={{ marginBottom: '115px' }}>
                <RowSelectors>
                    <input type="checkbox" name="receber-email" id="receber-email" />
                    <Label htmlFor="receber-email">Desejo receber notificações sobre vagas por e-mail</Label>
                </RowSelectors>
            </ColumnInput>
            <Row style={{ justifyContent: 'space-between' }}>
                <button onClick={cancelar}>Cancelar</button>
                <input type="submit" value="Enviar" />
            </Row>
        </s.Formulario>
    </s.Container>
    </>
    );
}


export default FormCompleto;