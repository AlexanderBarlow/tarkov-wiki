import type { AppProps } from "next/app";
import "~/styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
export default MyApp;
