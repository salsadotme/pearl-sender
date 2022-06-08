import { Result } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../../components/navContainer';

const Home: NextPage = () => {
  const router = useRouter();
  // sent vs scheduled
  const [alreadySent, setAlreadySent] = useState(true);

  useEffect(() => {
    // TODO: fetch message based on route id
  });

  return (
    <NavContainer>
      {alreadySent && <Result
        status="success"
        title="You've sent your first message!"
        extra="Your message was posted to #announcements"
      />}

      {!alreadySent && <Result
        status="success"
        title="You've scheduled your first message!"
        extra="Your message will be posted to #announcements in 24 hours"
      />}
    </NavContainer >
  )
}

export default Home;
