"use client";
import Image from "next/image";

import { personsOptions, dateOptions, timeOptions } from "./utils";
import MapOnOptions from "./MapOnOptions";
import { useState } from "react";
import { CustomButton } from "..";

function Booking() {
  const [reservation, setReservation] = useState<object>({
    persons: "",
    date: "",
    time: "",
  });
  const handleReservationData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.currentTarget;
    setReservation({ ...reservation, [id]: value });
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="border border-mainText p-12 ">
          <div className="w-fit mx-auto">
            <h3 className="text-white text-2xl">Reservation</h3>
            <Image
              src="/spoon.png"
              alt="spoon"
              width={30}
              height={30}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <h3 className="text-mainText font-primary text-center text-8xl py-6">
            Book A Table
          </h3>
          <div className="flex items-center flex-wrap">
            <select
              id="persons"
              onChange={handleReservationData}
              className="text-white w-full md:w-1/2 xl:w-1/3 bg-transparent border border-gray-500 p-2 outline-none"
            >
              <MapOnOptions options={personsOptions} />
            </select>
            <select
              id="date"
              onChange={handleReservationData}
              className="text-white w-full md:w-1/2 xl:w-1/3 bg-transparent border border-gray-500 p-2 outline-none"
            >
              <MapOnOptions options={dateOptions} />
            </select>
            <select
              id="time"
              onChange={handleReservationData}
              className="text-white w-full xl:w-1/3 bg-transparent border border-gray-500 p-2 outline-none"
            >
              <MapOnOptions options={timeOptions} />
            </select>
          </div>
          <div className="w-fit mx-auto mt-6 ">
            <CustomButton
              customName="Book Now"
              customEffect="custom-button-bg-effect"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
