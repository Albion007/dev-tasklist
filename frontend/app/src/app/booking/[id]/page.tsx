import BookingItem from "@/app/components/BookingItem";
import { Booking } from "@/app/types";
import Link from "next/link";

async function getCurrentBooking(id: string): Promise<Booking | null> {
  try {
    const res = await fetch("http://localhost:5000/api/bookings");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const allBookings: Booking[] = await res.json();

    return allBookings.find((item) => item.id === +id) ?? null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const currentBooking = await getCurrentBooking(params.id);

  if (!currentBooking) {
    return <div>Current Booking not found</div>;
  }

  return (
    <div>
      <h2>Current Booking </h2>
      <BookingItem booking={currentBooking} />
      <div>
        <Link href="/booking">Back</Link>
      </div>
    </div>
  );
}
