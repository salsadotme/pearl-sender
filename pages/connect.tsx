import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-ant-design';
import '@solana/wallet-adapter-ant-design/styles.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import HeaderContainer from '../components/headerContainer';

const ConnectWallet: NextPage = () => {
  const router = useRouter();

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

  useEffect(() => {
    // TODO: fetch message based on route id
  });

  return (
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
        <HeaderContainer>
          <WalletMultiButton />
        </HeaderContainer>
      </WalletModalProvider>
    </WalletProvider>
  )
}

export default ConnectWallet;
