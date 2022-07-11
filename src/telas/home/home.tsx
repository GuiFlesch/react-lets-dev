import * as s from "./styled-home";
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes";

import { FotoDePerfil, Logo } from "../../imagens";
import { useContext, useEffect } from "react";
import MyContext from "../../contexto";

const Home = () => {

  const { setNomeUsuario, nomeUsuario } = useContext(MyContext);


  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  return (

    <s.Container>
      <Header />
      <s.Banner>

        <h1>Que prazer te ver aqui, {nomeUsuario}!</h1>
        <InputButton type="button" onClick={() => { localStorage.removeItem('nomeUsuario') }} value="Remover nome"outlined />
        <img src={Logo} alt="Banner let's dev" title="Banner let's dev" />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              key={card.titulo}
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <img src={FotoDePerfil} title="Foto linda do Guilherme" alt="Mostra um retrato da perfeição" />
          <s.Column>
            <h3>Guilherme Augusto Flesch</h3>
            <p>
              Sou uma pessoa curiosa e que sempre busca entender como as coisas ao nosso redor funcionam.
              Desde 2020, com o início da pândemia, decidi que deveria sair desse período melhor do que entrei 
              e comecei a me aprofundar na área da tecnologia por meio de cursos introdutórios de backend e frontend, além de ingressar na Unisinos
              para cursar Análise e Desenvolvimento de Sistemas.
            </p>

            <p>Atualmente estou no 5º semestre e ainda não trabalho na minha área de estudo. Meu foco é o desenvolvimento front-end e o aprendizado contínuo para conquistar o meu espaço e me desenvolver como profissional.</p>

            <s.ButtonGroup>
              <InputButton
                outlined
                type="button"
                value="LinkedIn"

                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("https://linkedin.com/in/guilhermeflesch92", "_blank");
                }}
                title="Vai para o perfil do linkedin."
              />
              <InputButton
                type="submit"
                value="Ver perfil"
                onClick={() => {
                  //Aqui vai o seu perfil do GitHub
                  window.open("https://github.com/GuiFlesch", "_blank");
                }}
                title="Vai para o perfil do github."
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;