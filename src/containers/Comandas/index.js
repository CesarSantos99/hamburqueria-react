import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import segundaImagem from "../../assets/sacola.png"
import Lixaira from "../../assets/lixeira.svg"

import axios from "axios";

import {H1} from "../../components/Titulo/styles"
import { Button } from "../../components/Button/styles";



import {
  Container,
  ImagemPrincipal,
  User
} from "./styles"

function Comanda() {

  const [comandas, setComandas] = useState([]) //react Hooks vai ajuda crir um estado7
  const history = useHistory()


  useEffect(() => {
    async function chamandoComandas(){
    const { data: novaListas}  = await axios.get ("http://localhost:3001/comandas")

      setComandas(novaListas)
  } 
  chamandoComandas()

  },[])

  async function deleteComanda(userId) {
    await axios.delete(`http://localhost:3001/comandas/${userId}`)
    const apagaComanda = comandas.filter((user) => user.id !== userId)
    setComandas(apagaComanda)
  }

  function goBackPage(){
    history.push("/")
  }


  return (
    <Container>

      <ImagemPrincipal alt="Sacola de hamburgue" src={segundaImagem} />

      <H1>Pedido</H1>

      <ul>
        {comandas.map((user) => (
          <User key={user.id}>
            <p>{user.pedido}</p>
            <button onClick={() => deleteComanda(user.id)}>
              <img alt="lixeira" src={Lixaira} />
            </button>
            <p className="cliente">{user.cliente}</p>
          </User>
        ))}
      </ul>

      <Button isBack={true} onClick={goBackPage}>Volta</Button>


    </Container>
  )
}


export default Comanda