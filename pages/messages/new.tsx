import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import MessageForm from '../../components/messageForm';
import NavContainer from '../../components/navContainer';

const NewMessage: NextPage = () => {
  return (
    <NavContainer>
      <Title level={1}>Create a message</Title>
      <MessageForm />
    </NavContainer>
  )
}

export default NewMessage;
