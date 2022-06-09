import { Button } from 'antd';
import Title from 'antd/lib/typography/Title';
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
    <NavContainer selectedTab={alreadySent ? "sent" : "scheduled"}>
      {alreadySent && <div>
        <Title level={1}>Congratulations! 🎉</Title>
        <p>
          Your message has been posted to #announcements
        </p>
        <Button onClick={() => router.push("/messages/sent")}>View all sent messages</Button>
      </div>
      }

      {!alreadySent && <div>
        <Title level={1}>Congratulations! 🎉</Title>
        <p>
          Your message will be posted to #announcements in 24 hours
        </p>
        <Button onClick={() => router.push("/messages/scheduled")}>View all scheduled messages</Button>
      </div>}
    </NavContainer >
  )
}

export default Home;
