import { Layout, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes } from 'react';

const HeaderContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Layout>
      <Header>
        <div style={{ color: "white" }}>Pearl</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} />
      </Header>
      {props.children}
    </Layout>
  )
}

export default HeaderContainer;
