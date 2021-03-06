import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { wrapper } from '../redux/store';
import { Api } from '../utils/api';
import { setUserData } from '../redux/slices/user';
import { theme } from '../theme';

import '../styles/globals.scss';
import 'macro-css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();

    store.dispatch(setUserData(userData));
  } catch (err) {
    if (ctx.asPath === '/write') {
      ctx.res.writeHead(302, {
        Location: '/403',
      });
      ctx.res?.end();
    }
    console.log(err);
  }

  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
    },
  };
});

export default wrapper.withRedux(App);
