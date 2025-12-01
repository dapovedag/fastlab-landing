"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface PayPalButtonProps {
  buttonId: string;
  clientId: string;
}

export default function PayPalButton({ buttonId, clientId }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (scriptLoaded && containerRef.current && !rendered) {
      // @ts-expect-error - PayPal SDK types
      if (window.paypal?.HostedButtons) {
        // @ts-expect-error - PayPal SDK types
        window.paypal.HostedButtons({
          hostedButtonId: buttonId,
        }).render(`#paypal-container-${buttonId}`);
        setRendered(true);
      }
    }
  }, [scriptLoaded, buttonId, rendered]);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${clientId}&components=hosted-buttons&disable-funding=venmo&currency=USD`}
        onLoad={() => setScriptLoaded(true)}
        strategy="lazyOnload"
      />
      <div
        id={`paypal-container-${buttonId}`}
        ref={containerRef}
        className="w-full min-h-[50px]"
      />
    </>
  );
}
