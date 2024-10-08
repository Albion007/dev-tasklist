import { Booking } from "@/app/types";
import BookingItem from "./components/BookingItem";
import Link from "next/link";

async function getBookings(): Promise<Array<Booking>> {
  try {
    const res = await fetch("http://localhost:5000/api/bookings");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  if (!bookings.length) {
    return <div>No bookings found</div>;
  }

  return (
    <div>
      <h1>Bookings List</h1>
      <div className="page-container">
        {bookings.map((booking) => (
          <BookingItem booking={booking} key={booking.id} />
        ))}
      </div>
      <div>
        <Link href="/booking/create">Create New Booking</Link>
      </div>
      <div>
        <Link href="/booking">Back to Main Page</Link>
      </div>
    </div>
  );
};

export default Home;
