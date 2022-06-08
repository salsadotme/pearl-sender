import { Button, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';

const Home: NextPage = () => {
  const router = useRouter();
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    // TODO: fetch messages from backend
  });

  return (
    <Layout>
      <Header>
        <div style={{ color: "white" }}>Pearl</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} />
      </Header>
      <Layout style={{ flexDirection: "row" }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: "24px" }}>
            {firstTime && <div>
              <Title level={1}>Welcome! 👏</Title>

              <p>
                You can now draft and schedule Discord announcements to your community.
              </p>
              <Button type="primary" onClick={() => router.push("/dashboard/new")}>Create your first message</Button>
            </div>}

            {!firstTime && <div>
              <Title level={1}>Welcome back! 🤟</Title>

              <p>
                You've sent a total of <Text strong>12 messages</Text> to your community.
              </p>
              <p>
                You have <Text strong>0 scheduled messages</Text>.
              </p>
              <Button type="primary" onClick={() => router.push("/dashboard/new")}>Create a message</Button>
            </div>}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home;
