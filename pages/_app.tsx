import { WalletModalProvider } from '@solana/wallet-adapter-ant-design';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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

  return <WalletProvider wallets={wallets} autoConnect>
    <WalletModalProvider>
      <Head>
        <title>Pearl: NFT Announcements</title>
        <meta name="description" content="Schedule and send verified announcements to your holders." />
        <link rel="icon" href="/pearl_100.jpg" />
      </Head>
      <Component {...pageProps} />
    </WalletModalProvider>
  </WalletProvider>

}

export default MyApp
