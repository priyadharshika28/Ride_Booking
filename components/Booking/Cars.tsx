"use client";

import React, { useState } from "react";
import Image from "next/image";
import CarList from "@/data/CarList";

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-3">Select Car</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CarList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCar(index)}
            className={`
              border rounded-lg p-2 cursor-pointer
              transition-all
              hover:border-yellow-400 border-1
              hover:scale-110 transition-all
              ${
                selectedCar === index
                  ? "border-yellow-500 border-2"
                  : "border-gray-300"
              }
            `}
          >
            {/* Car Image */}
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={70}
              className="mx-auto object-contain"
            />

            {/* Name + Price */}
            <div className="flex justify-between items-center mt-2 px-1">
              {/* ✅ Car Name (GRAY) */}
              <p className="text-sm font-medium text-gray-400">
                {item.name}
              </p>

              {/* ✅ Price (UNCHANGED) */}
              <span className="text-sm text-gray-700 font-semibold">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
