"use client";

import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>(null);
  const[sourceCordinates,setSourceCordinates] = useState<any>([]);
  const[destinationCordinates,setDestinationCordinates] = useState<any>(false);
  const[directionData,setDirectionData] = useState<any>([]);


  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    };

    getUserLocation();
  }, []);

  return (
    <div className="p-6">
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordiContext.Provider value={{sourceCordinates,setSourceCordinates}}>
        <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
        <div className="grid grid-cols-1 md:grid-cols-5">
          
          <div className="md:col-span-2">
            <Booking />
          </div>

          <div className="md:col-span-3 rounded-lg overflow-hidden h-ful">
            <MapBoxMap />
          </div>

        </div>
        </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
