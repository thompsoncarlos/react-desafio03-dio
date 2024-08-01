import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import {api } from '../../services/api';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Column,
  Wrapper,
  Title,
  TitleCadastro,
  SubtitleCadastro,
  Row,
  LoginText,
  Description
} from './styles';
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(2, 'No mínimo 3 caracteres').required('Campo obrigatório')
})

export default function Cadastro() {
  const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = async formData => {
    try {
      const { data } =  await api.post(`/users`, formData)

      if(data.length && data[0].id) {
        navigate('/feed')
        return
      }
    } catch(error) {
      alert("Erro ao enviar dados", error);
    }
  }

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
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" leftIcon={<MdLock />} />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Description>As clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Description>
            <Row>
              já tenho conta.<LoginText>Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
