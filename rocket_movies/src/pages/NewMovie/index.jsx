import { FiArrowLeft, FiX, FiPlus } from "react-icons/fi"

import { Container } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { Tags } from "../../components/Tags"
import { NewTags } from "../../components/NewTags"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <section className="newFilm">
          <ButtonText icon={FiArrowLeft} href={"/"} title={"Voltar"} />
          <h1>Novo filme</h1>
        
          <section> 
            <Input placeholder={"Título"} />
            <Input placeholder={"Sua nota (de 0 a 5)"} />
          </section>
          <TextArea rows={"7"} placeholder={"Observações"} />

        </section>

        <section className="tags">
          <h2>Marcadores</h2>
          <div className="Tagbackground">
            <Tags title={"React"} icon={FiX}/>
            <NewTags title={"Novo Marcador"} icon={FiPlus}/>
          </div>
        </section>

        <section className="buttons">
          <Button title={"Exlcuir Filme"} id="buttonOne" />
          <Button title={"Salvar Alterações"} />
        </section>
      </main>
      
    </Container>
  )
}