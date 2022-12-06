import React from "react";
import Logo from "./assets/principal.png"
import {
  Container,
  H1,
  ImagemPrincipal,
  ContainerInput,
  SubTitulo,
  Input,
  Button
} from "./styles"

function App() {
  return (
    <Container>

      <ImagemPrincipal alt="Logo" src={Logo} />

      <H1>Faça seu pedido</H1>

      <ContainerInput>
        
        <SubTitulo>Pedido</SubTitulo>
        <Input placeholder="Ex:Coca-Cola" />

        <SubTitulo>Nome do Cliente</SubTitulo>
        <Input placeholder="Maria" />

      </ContainerInput>

      <Button>Novo Pedido</Button>

    </Container>
  )
}


export default App