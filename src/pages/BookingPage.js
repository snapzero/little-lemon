import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import BookingHeading from '../components/BookingHeading';


function BookingPage() {
  const getInitialTimes = (date = new Date()) => {
    try {
      // eslint-disable-next-line no-unused-vars, no-undef
      const times = fetchAPI(new Date(date));
      return times;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  const updateTimes = (state, action) => {
    if (action.date) {
        state = getInitialTimes(action.date);
        return state;
    };
  };

  const initializeTimes = getInitialTimes();

  const [timeOptions, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
      <section className="booking">
        <BookingHeading
          heading={'Reserve Table'}
          subHeading={'Your table reservation is almost ready'}
        />
        <div className="flex-container jc-center">
          <BookingForm timeOptions={timeOptions} dispatch={dispatch} />
        </div>
      </section>
    );
  }

  export default BookingPage;