import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Booking from './Booking';
import CreateAccount from './CreateAccount';
import Login from './Login';

function Main() {
    return (
      <>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </>
    );
  }

  export default Main