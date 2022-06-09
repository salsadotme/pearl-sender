import { Result } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavContainer from '../../../components/navContainer';

const Home: NextPage = () => {
  const router = useRouter();
  // sent vs scheduled
  const [alreadySent, setAlreadySent] = useState(false);

  useEffect(() => {
    // TODO: fetch message based on route id
  });

  return (
    <NavContainer selectedTab={alreadySent ? "sent" : "schduled"}>
      {alreadySent && <Result
        status="success"
        title="Your message was posted to #announcements"
      />}

      {!alreadySent && <Result
        status="success"
        title="Your message will be posted to #announcements in 24 hours"
      />}
    </NavContainer >
  )
}

export default Home;
