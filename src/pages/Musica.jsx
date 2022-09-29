import React, { useState, useEffect } from "react";
import api from "../api";

function Musica(params) {

    const [listaMusicas, setListaMusicas] = useState([]);

    function listar() {
        api.get().then(res => {
            console.log("dados:", res.data);
            console.log("status code:", res.status);
            setListaMusicas(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }


    useEffect(() => {
        listar();
    }, [])
    return (
        <>
            <h2>Lista De Músicas</h2>
            <button onClick={listar}>Listar</button>

            {
                listaMusicas.map(musicaAtual => (
                    <pre>
                        <div key={musicaAtual.id}>
                            <h2>Nome: {musicaAtual.nome}</h2>
                            <h2>Artista: {musicaAtual.artista}</h2>
                            <h2>Genro: {musicaAtual.genero}</h2>
                            <h2>Ano: {musicaAtual.ano}</h2>
                            <img src={musicaAtual.imagem}></img>
                            <hr />
                        </div>
                    </pre>
                ))
            }

        </>
    )
}

export default Musica;