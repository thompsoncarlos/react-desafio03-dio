
import { Container, NameText, Progress, UserPicture} from './styles';
import { IUserInfo } from './types';

export default function UserInfo({nome,image, percentual}: IUserInfo) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}