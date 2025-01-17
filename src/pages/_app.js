import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";

import '../../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
    <Script id="GTMAPI" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J01C3Q00KS" />
    <Script
      id="GTM"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J01C3Q00KS');
      `}}
    />
    <NextUIProvider><Component {...pageProps} /></NextUIProvider>
    </>
  )
}

export default MyApp
