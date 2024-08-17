"use client";

import { Booking } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [service, setService] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const submit = async (e) => {
    e.preventDefault();

    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];

    const createBooking: Omit<Booking, "id"> = {
      service,
      doctor_name: doctor,
      start_time: startTime + " AM",
      end_time: endTime + " PM",
      date: `${formattedDate}`,
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(createBooking),
      });
      router.push("/booking");
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div>
      <h2>Create Booking Page</h2>
      <div>
        <Link href="/booking">Back</Link>
      </div>

      <div className="create-booking">
        <form onSubmit={submit}>
          <fieldset>
            <label htmlFor="Doctor">Doctor</label>
            <input
              required
              type="text"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="Service">Service</label>
            <input
              required
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="start_time">Start Time</label>

            <input
              required
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="start_time">End Time</label>
            <input
              required
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
