import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-ant-design';
import '@solana/wallet-adapter-ant-design/styles.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FunctionComponent, HTMLAttributes, useMemo } from 'react';

const HeaderContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
  const network = WalletAdapterNetwork.Devnet;
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter({ network }),
      new SlopeWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
    ],
    [network]
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Layout className="pearl-container" style={{ padding: "16px" }}>
          <Header style={{ height: "54px", display: "flex", padding: "0 20px", marginBottom: "16px", justifyContent: "space-between", alignItems: "center", background: "white", borderRadius: "8px" }}>
            <div style={{ fontSize: "20px" }}>Pearl</div>
            <WalletMultiButton />
          </Header>
          {props.children}
        </Layout>
      </WalletModalProvider>
    </WalletProvider>
  )
}

export default HeaderContainer;
