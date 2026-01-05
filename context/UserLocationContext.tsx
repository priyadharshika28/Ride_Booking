"use client";

import { createContext, useState } from "react";

export const UserLocationContext = createContext<any>(null);

export function UserLocationProvider({ children }: any) {
  const [userLocation, setUserLocation] = useState<{
    lng: number | null;
    lat: number | null;
  }>({
    lng: null,
    lat: null,
  });

  return (
    <UserLocationContext.Provider
      value={{ userLocation, setUserLocation }}
    >
      {children}
    </UserLocationContext.Provider>
  );
}
