"use client";

import { useEffect } from "react";

export const ClientComponent = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        console.log(registrations);
        registrations.forEach((reg) => {
          reg.unregister();
        });
      });
    }
  }, []);

  return <></>;
};
