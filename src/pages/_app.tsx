import "@styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import { CustomProvider, Loader } from "rsuite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import ReactGA from "react-ga4";
import { useAuthState } from "@hooks/useAuthState";
import { useAuthStore } from "@utils/store";
import { Toaster } from "react-hot-toast";

const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID!;
ReactGA.initialize(GOOGLE_MEASUREMENT_ID);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { user, loading } = useAuthState();
  const { getUserResumes } = useAuthStore();

  async function appLoadingFetchAction() {
    if (user) {
      localStorage.setItem("token", user.uid);
      await getUserResumes();
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (!loading) appLoadingFetchAction();
  }, [loading]);

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

  if (isLoading || loading) return <Loader backdrop size="md" vertical />;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PRDRFKT1Q6"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PRDRFKT1Q6', {
              page_path: window.location.pathname,
            });
            `,
        }}
      />

      <Toaster position="top-center" reverseOrder={false} />

      <CustomProvider theme="light">
        <Component {...pageProps} />
      </CustomProvider>
    </>
  );
}
