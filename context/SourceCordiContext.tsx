"use client";

import { createContext, useState } from "react";

export const SourceCordiContext = createContext<any>(null);

export function SourceCordiProvider({ children }: any) {
  const [sourceCordinates, setSourceCordinates] = useState<{
    lng: number | null;
    lat: number | null;
  }>({
    lng: null,
    lat: null,
  });

  return (
    <SourceCordiContext.Provider
      value={{ sourceCordinates, setSourceCordinates }}
    >
      {children}
    </SourceCordiContext.Provider>
  );
}
