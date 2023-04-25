import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "../src/components/PageTitle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Head>Alura - HOME</Head>
      <Component {...pageProps} />
    </>
  );
}
