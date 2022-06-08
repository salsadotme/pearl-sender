import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes } from 'react';
import Sidebar from './sidebar';

const NavContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Layout>
      <Header>
        <div style={{ color: "white" }}>Pearl</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} />
      </Header>
      <Layout style={{ flexDirection: "row" }}>
        <Sidebar />
        <Layout>
          <Content style={{ maxWidth: "720px", padding: "24px" }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default NavContainer;
