"use client";

import { createContext, useState } from "react";

export const DestinationCordiContext = createContext<any>(null);

export function DestinationCordiProvider({ children }: any) {
  const [destinationCordinates, setDestinationCordinates] = useState<{
    lng: number | null;
    lat: number | null;
  }>({
    lng: null,
    lat: null,
  });

  return (
    <DestinationCordiContext.Provider
      value={{ destinationCordinates, setDestinationCordinates }}
    >
      {children}
    </DestinationCordiContext.Provider>
  );
}
