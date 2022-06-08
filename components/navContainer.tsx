import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes } from 'react';
import HeaderContainer from './headerContainer';
import Sidebar from './sidebar';

const NavContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <HeaderContainer>
      <Layout style={{ flexDirection: "row" }}>
        <Sidebar />
        <Layout>
          <Content style={{ maxWidth: "720px", padding: "24px" }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </HeaderContainer>
  )
}

export default NavContainer;
