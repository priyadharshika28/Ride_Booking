"use client";

import Map from "react-map-gl";
import { useContext, useEffect, useRef, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import Markers from "./Markers";
import "mapbox-gl/dist/mapbox-gl.css";
import MapBoxRoute from "./MapBoxRoute";

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";

function MapBoxMap() {
  const mapRef = useRef<any>(null);

  const { userLocation } = useContext(UserLocationContext);
  const { sourceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates } = useContext(DestinationCordiContext);

  const [directionData, setDirectionData] = useState<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (destinationCordinates) {
      mapRef.current.flyTo({
        center: [
          destinationCordinates.lng,
          destinationCordinates.lat,
        ],
        zoom: 14,
        duration: 2500,
      });
    } else if (sourceCordinates || userLocation) { // fallback to userlocation
      mapRef.current.flyTo({
        center: [
          sourceCordinates?.lng || userLocation?.lng,
          sourceCordinates?.lat || userLocation?.lat,
        ],
        zoom: 14,
        duration: 2500,
      });
    }

    if ((sourceCordinates || userLocation) && destinationCordinates) {
      getDirectionRoute();
    }
  }, [sourceCordinates, destinationCordinates, userLocation]);

  const getDirectionRoute = async () => {
    const sourceLng = sourceCordinates?.lng || userLocation?.lng;
    const sourceLat = sourceCordinates?.lat || userLocation?.lat;

    if (!sourceLng || !sourceLat || !destinationCordinates) return;

    const url =
      `${MAPBOX_DRIVING_ENDPOINT}` +
      `${sourceLng},${sourceLat};` +
      `${destinationCordinates.lng},${destinationCordinates.lat}` +
      `?overview=full&geometries=geojson&access_token=` +
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    setDirectionData(result);
  };

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>

      <div className="rounded-lg overflow-hidden mt-3 relative">
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation?.lng || -122.4, // Default value if null
            latitude: userLocation?.lat || 37.8,    // Default value if null
            zoom: 14,
          }}
          style={{
            width: "100%",
            height: 450,
            borderRadius: 10,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Markers />
          {directionData?.routes && (
            <MapBoxRoute coordinates={directionData?.routes[0]?.geometry?.coordinates} />
          )}
        </Map>
        {directionData?.routes?.[0]?.distance && (
          <div className="absolute bottom-5 right-5 bg-yellow-400 p-3 rounded-lg border-black border-[1px]">
            <span className="font-bold text-black border-b-[1px] border-black pb-1 mb-1 block">Distance</span>
            <h2 className="font-bold text-xl text-black"> {(directionData.routes[0].distance * 0.000621371).toFixed(2)} Miles</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default MapBoxMap;
