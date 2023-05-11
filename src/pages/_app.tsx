import "@styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import { CustomProvider } from "rsuite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import ReactGA from "react-ga4";

const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID!;
ReactGA.initialize(GOOGLE_MEASUREMENT_ID);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: document.title,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (!hydrated) return <></>;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7H3GVPPD7N"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7H3GVPPD7N', {
              page_path: window.location.pathname,
            });
            `,
        }}
      />

      <CustomProvider theme="light">
        <Component {...pageProps} />
      </CustomProvider>
    </>
  );
}
