import React, { useState, useRef } from "react";
import Logo from "./assets/principal.png"
import Lixaira from "./assets/lixeira.svg"


import {
  Container,
  H1,
  ImagemPrincipal,
  ContainerInput,
  SubTitulo,
  Input,
  Button,
  User
} from "./styles"

function App() {

  const [comandas, setComandas] = useState([]) //react Hooks vai ajuda crir um estado
  const inputPedido = useRef()
  const inputCliente = useRef()


  function novaComanda() {
    setComandas([...comandas, { id: Math.random(), pedido: inputPedido.current.value, cliente: inputCliente.current.value }])
  } //... spread operat

  function deleteComanda (userId) {
    const apagaComanda = comandas.filter((user) => user.id !== userId)
    setComandas(apagaComanda)
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

      <ul>
        {comandas.map((user) => (
          <User key={user.id}>
            <p>{user.pedido}</p>
            <p className="cliente">{user.cliente}</p>
            <button onClick={() => deleteComanda(user.id)}>
              <img alt="lixeira" src={Lixaira} />
            </button>
          </User>
        ))}
      </ul>

    </Container>
  )
}


export default App