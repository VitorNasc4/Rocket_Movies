import { Container, Profile } from "./styles";
import { Input } from "../Input"

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const {signOut} = useAuth()

  function handleClick() {
    signOut()
    console.log("teste")
  }
  return (
    <Container>
      <Link to={"/"}>RocketMovies</Link>
      <Input placeholder={'Pesquisar pelo título'} />

      <Profile>
        <div>
          <Link to="/profile">Vitor Marciano</Link>
          <a onClick={handleClick}>sair</a>
        </div>
        <img src="https://www.github.com/VitorNasc4.png" alt="Foto de perfil do usuário" />
      </Profile>
    </Container>
  )
}