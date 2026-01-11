"use client";

import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { useContext, useEffect, useState } from "react";

const session_token = "f06e7531-6373-4d5a-8614-b6f313488050";
const MAPBOX_RETRIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";

type ActiveInput = "source" | "destination" | null;

export default function AutoCompleteAddress({ source, setSource, destination, setDestination }: any) {
  // const [source, setSource] = useState("");
  // const [destination, setDestination] = useState("");
  const [addressList, setAddressList] = useState<any>(null);
  const [activeInput, setActiveInput] = useState<ActiveInput>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [sourceChange, setSourceChange] = useState(false);
  const [destinationChange, setDestinationChange] = useState(false);

  const { setSourceCordinates } = useContext(SourceCordiContext);
  const { setDestinationCordinates } = useContext(DestinationCordiContext);

  // ---------- FIRST EFFECT (DEBOUNCE) ----------
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [source, destination]);

  // ---------- FUNCTION 1 ----------
  const getAddressList = async () => {
    setAddressList([]);

    const query = sourceChange ? source : destination;
    if (!query) return;

    const res = await fetch("/api/search-address?q=" + query, {
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setAddressList(result);
  };

  // ---------- FUNCTION 2 (SOURCE CLICK) ----------
  const onSourceAddressClick = async (item: any) => {
    setSource(item.full_address);
    setAddressList([]);
    setSourceChange(false);

    const res = await fetch(
      MAPBOX_RETRIVE_URL +
      item.mapbox_id +
      "?session_token=" +
      session_token +
      "&access_token=" +
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();

    setSourceCordinates({
      lng: result.features[0].properties.coordinates.longitude,
      lat: result.features[0].properties.coordinates.latitude,
    });

  };

  // ---------- FUNCTION 3 (DESTINATION CLICK) ----------
  const onDestinationAddressClick = async (item: any) => {
    setDestination(item.full_address);
    setAddressList([]);
    setDestinationChange(false);

    const res = await fetch(
      MAPBOX_RETRIVE_URL +
      item.mapbox_id +
      "?session_token=" +
      session_token +
      "&access_token=" +
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );

    const result = await res.json();

    setDestinationCordinates({
      lng: result.features[0].properties.coordinates.longitude,
      lat: result.features[0].properties.coordinates.latitude,
    });

  };

  // ---------- SECOND EFFECT ----------
  useEffect(() => {
    const value =
      activeInput === "source"
        ? source
        : activeInput === "destination"
          ? destination
          : "";

    if (!value || isSelected) return;

    const timer = setTimeout(() => {
      fetchAddress(value);
    }, 400);

    return () => clearTimeout(timer);
  }, [source, destination, activeInput]);

  // ---------- FUNCTION 4 ----------
  const fetchAddress = async (text: string) => {
    const res = await fetch("/api/search-address?q=" + text);
    const data = await res.json();
    setAddressList(data);
  };

  // ---------- FUNCTION 5 ----------
  const handleSelect = (item: any) => {
    if (activeInput === "source") setSource(item.full_address);
    if (activeInput === "destination") setDestination(item.full_address);

    setAddressList(null);
    setIsSelected(true);
    setActiveInput(null);
  };

  // ---------- FUNCTION 6 ----------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ActiveInput
  ) => {
    if (type === "source") {
      setSource(e.target.value);
      setSourceChange(true);
      setDestinationChange(false);
    }

    if (type === "destination") {
      setDestination(e.target.value);
      setDestinationChange(true);
      setSourceChange(false);
    }

    setActiveInput(type);
    setIsSelected(false);
  };

  // ---------- DROPDOWN ----------
  const Dropdown = () => (
    <div className="absolute left-0 right-0 top-full z-50 bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto">
      {addressList?.suggestions?.map((item: any, index: number) => (
        <div
          key={index}
          className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
          onClick={() => {
            handleSelect(item);
            activeInput === "source"
              ? onSourceAddressClick(item)
              : onDestinationAddressClick(item)
          }}
        >
          {item.full_address}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* WHERE FROM */}
      <div className="relative mb-4">
        <label className="block text-gray-400 mb-1">Where From?</label>

        <input
          type="text"
          className="bg-white p-2 border border-gray-200 w-full rounded-md outline-none focus:border-yellow-300"
          value={source}
          onChange={(e) => handleChange(e, "source")}
        />

        {activeInput === "source" && addressList?.suggestions && <Dropdown />}
      </div>

      {/* WHERE TO */}
      <div className="relative">
        <label className="block text-gray-400 mb-1">Where To?</label>

        <input
          type="text"
          className="bg-white p-2 border border-gray-200 w-full rounded-md outline-none focus:border-yellow-300"
          value={destination}
          onChange={(e) => handleChange(e, "destination")}
        />

        {activeInput === "destination" && addressList?.suggestions && (
          <Dropdown />
        )}
      </div>
    </div>
  );
}
