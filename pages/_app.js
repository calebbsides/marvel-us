import Layout from "../components/Layout";
import "../styles/globals.css";
import { MarvelCharacterProvider } from "../context/MarvelCharacters";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <MarvelCharacterProvider>
          <Component {...pageProps} />
        </MarvelCharacterProvider>
      </Layout>
    </>
  );
}

export default MyApp;
