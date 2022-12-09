import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/principal.png"

import axios from "axios";

import { H1 } from "../../components/Titulo/styles";
import { Button } from "../../components/Button/styles";

import {
  Container,
  ImagemPrincipal,
  ContainerInput,
  SubTitulo,
  Input,
} from "./styles"


function App() {

  const [comandas, setComandas] = useState([]) //react Hooks vai ajuda crir um estado
  const history = useHistory()
  const inputPedido = useRef()
  const inputCliente = useRef()


  async function novaComanda() {

    const { data: novaLista } = await axios.post("http://localhost:3001/comandas", {
      pedido: inputPedido.current.value,
      cliente: inputCliente.current.value
    })

    console.log(novaLista);
    setComandas([...comandas, novaLista])

    history.push("/comandas")
  }


  return (
    <Container>

      <ImagemPrincipal alt="Logo" src={Logo} />

      <H1>Faça seu pedido</H1>

      <ContainerInput>

        <SubTitulo>Pedido</SubTitulo>
        <Input ref={inputPedido} placeholder="Ex:Coca-Cola" />

        <SubTitulo>Nome do Cliente</SubTitulo>
        <Input ref={inputCliente} placeholder="Maria" />

      </ContainerInput>

      <Button onClick={novaComanda}>Novo Pedido</Button>

    </Container>
  )
}


export default App