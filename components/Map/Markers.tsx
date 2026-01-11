"use client";

import { Marker } from "react-map-gl";
import { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";

function isValidCoord(coord: any) {
  return (
    coord &&
    typeof coord.lng === "number" &&
    typeof coord.lat === "number" &&
    !isNaN(coord.lng) &&
    !isNaN(coord.lat)
  );
}

function Markers() {
  const { userLocation } = useContext(UserLocationContext);
  const { sourceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates } = useContext(DestinationCordiContext);

  return (
    <>
      {isValidCoord(userLocation) && (
        <Marker
          longitude={userLocation.lng}
          latitude={userLocation.lat}
          anchor="bottom"
        >
          <img src="/pin.png" width={30} height={30} alt="User" />
        </Marker>
      )}

      {isValidCoord(sourceCordinates) && (
        <Marker
          longitude={sourceCordinates.lng}
          latitude={sourceCordinates.lat}
          anchor="bottom"
        >
          <img src="/pin-red.png" width={30} height={30} alt="Source" />
        </Marker>
      )}

      {isValidCoord(destinationCordinates) && (
        <Marker
          longitude={destinationCordinates.lng}
          latitude={destinationCordinates.lat}
          anchor="bottom"
        >
          <img src="/pin-red.png" width={30} height={30} alt="Destination" />
        </Marker>
      )}
    </>
  );
}

export default Markers;
