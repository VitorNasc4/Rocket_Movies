import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Avatar, Form } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const { updateProfile, user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [old_password, setOldPassword] = useState("")

  const navigate = useNavigate()

  async function handleClick() {
    const user = {
      name,
      email, 
      password,
      old_password
    }
    
    await updateProfile({user})
    navigate("/")
  }

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
        <Input icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input icon={FiLock} placeholder={"Senha atual"} onChange={e => setOldPassword(e.target.value)} type="password"/>
        <Input icon={FiLock} placeholder={"Nova senha"} onChange={e => setPassword(e.target.value)} type="password"/>
        <Button title={"Salvar"} onClick={handleClick} />

      </Form>

    </Container>
  )
}