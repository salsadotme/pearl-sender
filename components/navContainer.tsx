import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes } from 'react';
import HeaderContainer from './headerContainer';
import Sidebar from './sidebar';

interface NavContainerProps {
  selectedTab: string;
}

const NavContainer: FunctionComponent<HTMLAttributes<HTMLDivElement> & NavContainerProps> = (props) => {
  return (
    <HeaderContainer className="pearl-container">
      <Layout style={{ flexDirection: "row", background: "none" }}>
        <Sidebar selectedTab={props.selectedTab} />
        <Layout style={{ background: "none" }}>
          <Content style={{ padding: "24px", background: "white", marginLeft: "16px", borderRadius: "8px", flex: "unset" }}>
            <div style={{ maxWidth: "720px" }}>
            {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </HeaderContainer>
  )
}

export default NavContainer;
