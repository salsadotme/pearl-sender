import { WalletMultiButton } from '@solana/wallet-adapter-ant-design';
import '@solana/wallet-adapter-ant-design/styles.css';
import { Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes } from 'react';

const HeaderContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {

  return (
    <Layout className="pearl-container" style={{ padding: "16px" }}>
      <Header style={{ height: "54px", display: "flex", padding: "0 20px", marginBottom: "16px", justifyContent: "space-between", alignItems: "center", background: "white", borderRadius: "8px" }}>
        <div style={{ fontSize: "20px" }}>Pearl</div>
        <WalletMultiButton />
      </Header>
      {props.children}
    </Layout>
  )
}

export default HeaderContainer;
