import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import { AppProps } from "next/app";

import "../styles.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ZeitProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ZeitProvider>
    </>
  );
};

export default App;
