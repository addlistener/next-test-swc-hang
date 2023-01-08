import { AppProps } from 'next/app';
import {ReactNode, useEffect, useState} from "react";

function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  const content: ReactNode = (typeof window !== 'undefined' && showChild) ? <Component {...pageProps} /> : false;

  return content;
}

export default App;
