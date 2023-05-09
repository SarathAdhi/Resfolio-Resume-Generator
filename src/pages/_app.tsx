import "@styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import { CustomProvider } from "rsuite";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;

  return (
    <CustomProvider theme="light">
      <Component {...pageProps} />
    </CustomProvider>
  );
}
