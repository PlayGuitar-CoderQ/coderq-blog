// ts静态类型
import type { AppProps } from 'next/app';

// 静态资源
import '../styles/globals.scss';
import '../styles/test.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
