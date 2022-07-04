import React, { useState } from 'react';
import { ColumnInput, Label } from '../../componentes';
import { Logo } from '../../imagens';
import * as s from "./styled.login";

// import { Container } from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return <s.ContainerLogin>
        <s.WrapLogin>
            <s.FormLogin>
                <s.LoginFormTitle>Bem vindo!</s.LoginFormTitle>
                <s.LoginFormTitle>
                    <s.Image src={Logo}></s.Image>
                </s.LoginFormTitle>
                <ColumnInput className="input-text">    
                    <Label htmlFor="">Email: </Label>
                    <s.Input
                    type="email"
                    name="email"
                    placeholder="Digite seu email aqui"
                    required
                    value={email}
                    onChange={(evento) =>{setEmail(evento.target.value)}} />

                    <Label htmlFor="">Senha:</Label>
                    <s.Input
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    required
                    value={password}
                    onChange={(evento) => {setPassword(evento.target.value)}}
                    />
                    
                </ColumnInput>
            </s.FormLogin>
        </s.WrapLogin>
    </s.ContainerLogin >
}

export default Login;