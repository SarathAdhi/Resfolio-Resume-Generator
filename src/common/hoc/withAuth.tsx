import { useAuthState } from "@hooks/useAuthState";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const withAuth = (Component: React.FC) =>
  function PageProp({ ...pageProps }) {
    const { user } = useAuthState();
    const router = useRouter();

    const isAuth = !!user;

    useEffect(() => {
      if (!isAuth) {
        router.replace("/");
        toast.error("Please Login to continue");
      }
    }, [isAuth]);

    return <Component {...pageProps} />;
  };

withAuth.displayName = "withAuth";
export default withAuth;
