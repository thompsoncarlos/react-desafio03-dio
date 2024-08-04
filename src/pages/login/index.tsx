import { MdEmail, MdLock} from 'react-icons/md';

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import {api } from '../../services/api';

import {
  Container,
  Title,
  TitleLogin,
  Column,
  Row,
  SubtitleLogin,
  Wrapper,
  EsqueciText,
  CriarText,
} from "./styles";

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormData } from './types';

const schema = yup.object({
  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

export default function Login() {
  const { control, handleSubmit, formState: { errors }} = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  
  const onSubmit = async (formData: IFormData) => {
    try{
      const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
      
      if(data.length && data[0].id){
          navigate('/feed') 
          return
      }

      alert('Usuário ou password inválido')
    } catch {
      alert("Houve um erro, tente novamente.")
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="password" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="submit"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha password</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
