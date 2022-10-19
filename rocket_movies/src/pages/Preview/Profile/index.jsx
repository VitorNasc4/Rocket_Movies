import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Avatar, Form } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  return (
    <Container>
      <div>
        <ButtonText href={"/"} title={"Voltar"} icon={FiArrowLeft} />
      </div>

      <Avatar>
        <img
          src="https://www.github.com/VitorNasc4.png"
          alt="Foto de usuário"
        />

        <label htmlFor="avatar">
          <FiCamera />

          <input
            id="avatar"
            type="file"
          />
        </label>
      </Avatar>

      <Form>
        <Input icon={FiUser} value={"Vitor Marciano"} />
        <Input icon={FiMail} value={"vitor@email.com"} />
        <Input icon={FiLock} placeholder={"Senha atual"} />
        <Input icon={FiLock} placeholder={"Nova senha"} />
        <Button title={"Salvar"}/>
        
      </Form>

    </Container>
  )
}