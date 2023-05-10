import "@styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import { CustomProvider } from "rsuite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FB_PIXEL_ID!);
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  if (!hydrated) return <></>;

  return (
    <CustomProvider theme="light">
      <Component {...pageProps} />
    </CustomProvider>
  );
}
