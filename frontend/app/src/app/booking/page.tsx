import { Booking } from "@/app/types";
import BookingItem from "@/app/components/BookingItem";
import Link from "next/link";

async function getBookings(): Promise<Array<Booking>> {
  try {
    const res = await fetch("http://localhost:5000/api/bookings", {
      cache: "no-store", // Ensure fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log("Fetched bookings:", data); // Log fetched data
    return data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
}

const Home: React.FC = async () => {
  const bookings = await getBookings();
  console.log("Bookings in component:", bookings); // Log data in component

  if (bookings.length === 0) {
    return <div>No bookings found</div>;
  }

  return (
    <div>
      <div className="page-container">
        {bookings.map((booking) => (
          <BookingItem booking={booking} key={booking.id} />
        ))}
      </div>
      <div>
        <Link href="/booking/create">Create Booking</Link>
      </div>
      <div>
        <Link href="/booking">Back to main page</Link>
      </div>
    </div>
  );
};

export default Home;
