/* eslint-disable react/jsx-no-undef */
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

import {
  Container,
  Column,
  Title,
  TitleHighlight
} from './styles';
 
export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={35} nome="Carlos Thompson" image="https://avatars.githubusercontent.com/u/33129027?v=4"/>
          <UserInfo percentual={35} nome="Eduardo Thompson" image="https://avatars.githubusercontent.com/u/33129027?v=4"/>
          <UserInfo percentual={35} nome="Carlos Thompson" image="https://avatars.githubusercontent.com/u/33129027?v=4"/>
          <UserInfo percentual={35} nome="Carlos Thompson" image="https://avatars.githubusercontent.com/u/33129027?v=4"/>
          <UserInfo percentual={35} nome="Carlos Thompson" image="https://avatars.githubusercontent.com/u/33129027?v=4"/>
        </Column>
      </Container>
    </>
  );
}
