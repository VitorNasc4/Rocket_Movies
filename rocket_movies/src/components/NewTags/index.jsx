import { Container } from "./styles"

export function NewTags({title, icon: Icon, ...rest}) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon size={12}/>}
    </Container>
  )
}