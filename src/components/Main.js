import { Routes, Route } from "react-router";
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Specials from '../pages/Specials';
import Testimonials from '../pages/Testimonials';
import BookingPage from '../pages/BookingPage';
import BookingDetails from './BookingDetails';
import ConfirmedBooking from './ConfirmedBooking';
import OrderOnline from '../pages/OrderOnline';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';

function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/reservation-details" element={<BookingDetails />} />
          <Route path="/reservation-confirmed" element={<ConfirmedBooking />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default Main