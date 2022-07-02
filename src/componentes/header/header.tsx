import { LogoLetsDev, LogoPaipe } from "../../imagens";
import * as s from "./styled-header";

const Header = () => {
  return (
    <s.Header>
      <a href="/">
        <img src={LogoLetsDev} title="Voltar para a página inicial" alt="logo-let's-dev" />
      </a>
      <a href="https://www.paipe.co" target="_blank" rel="noopener noreferrer">
        <img src={LogoPaipe} title="Acessar o site da Paipe" alt="logo-paipe" />
      </a>
    </s.Header>
  );
};

export default Header;