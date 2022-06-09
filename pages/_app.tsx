import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>Pearl: NFT Announcements</title>
      <meta name="description" content="Schedule and send verified announcements to your holders." />
      <link rel="icon" href="/pearl_100.jpg" />
    </Head>
  <Component {...pageProps} />
  </div>

}

export default MyApp
