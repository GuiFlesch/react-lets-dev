import React, { useState } from 'react';
import axios from "axios";

// import { Container } from './styles';

const AsyncAwait: React.FC = () => {
    const [minhaFotoDePerfil, setMinhaFotoDePerfil] = useState();

    axios.get("https://api.github.com/users/GuiFlesch")
        .then((dados) => { setMinhaFotoDePerfil(dados.data.html_url)})
        .catch((erro) => { console.log(erro) })
        .finally(() => { console.log("Acabou") })

    // const buscarDadosDoGitHub = () => {
    //     return new Promise((resolve, reject) => {


    //     });
    // }

    // async function start(){
    //     const resposta = await chamarUber();
    //     console.log(resposta)
    // }

    // start();

    return (
        <div>
            <h1>{minhaFotoDePerfil}</h1>
        </div>
    );
}

export default AsyncAwait;