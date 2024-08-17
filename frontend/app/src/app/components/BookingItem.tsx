import { Booking } from "@/app/types";
import Link from "next/link";

interface Props {
  booking: Booking;
}

export default function BookingItem({ booking }: Props) {
  return (
    <div className="booking-item">
      <Link href={`/booking/${booking.id}`}>
        <div>Doctor name: {booking.doctor_name || "N/A"}</div>
        <div>Service: {booking.service || "N/A"}</div>
        <div>Start Time: {booking.start_time || "N/A"}</div>
        <div>End Time: {booking.end_time || "N/A"}</div>
      </Link>
    </div>
  );
}
