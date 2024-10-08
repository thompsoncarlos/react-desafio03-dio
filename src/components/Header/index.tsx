import logo from '../../assets/logo-dio.png';
import Button from '../Button';
import {
  Container,
  Menu,
  MenuRight,
  BuscarInputContainer,
  Input,
  Row,
  Wrapper,
  UserPicture
} from './styles';

import { useNavigate } from 'react-router-dom';
import { IHeader } from './types';

export default function Header({autenticado}: IHeader) {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login")
  }

  const handleClickSignUp = () => {
    navigate("/cadastro")
  }
  
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/33129027?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickSignUp}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}