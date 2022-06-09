import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import MessageForm from '../../../components/messageForm';
import NavContainer from '../../../components/navContainer';

const EditMessage: NextPage = () => {
  // TODO: fetch message based on route id, pass to MessageForm component
  return (
    <NavContainer>
      <Title level={1}>Edit message</Title>
      <MessageForm />
    </NavContainer>
  )
}

export default EditMessage;
