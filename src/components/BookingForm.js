import { useState, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import Button from './Button';

function BookingForm(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    'date': '',
    'time': props.timeOptions[0],
    'guests': 1,
    'occassion': 'No occassion'
  });

  useLayoutEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const [dateError, setDateError] = useState(false);
  const [guestsError, setGuestsError] = useState(false);

  const dateInput = useRef(null);
  const guestsInput = useRef(null);

  const handleChange = (event) => {
    setFormData(prevData => ({...prevData, [event.target.name]: event.target.value}));
    if(event.target.name === 'date') {
      let formDate = {'date': event.target.value}
      props.dispatch(formDate);
      validateDate(event);
      return false;
    }
    validateGuests(event);
  };

  const validateDate = () => {
    if (dateInput.current.name !== 'date') return;
    const errors = dateInput.current.name === 'date' && dateInput.current.value === '';
    errors ? setDateError(true) : setDateError(false);
    return errors ? false : true;
  };

  const validateGuests = () => {
    if (guestsInput.current.name !== 'guests') return;
    const errors = (guestsInput.current.name === 'guests') && (
      guestsInput.current.value === undefined ||
      guestsInput.current.value === '' ||
      guestsInput.current.value < 1 ||
      guestsInput.current.value > 10
    );

    errors ? setGuestsError(true) : setGuestsError(false);
    return errors ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = validateGuests() && validateDate();
    if (noErrors) {
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/reservation-details');
    }
  }

  return (
    <form className="bookingForm" onSubmit={handleSubmit} aria-label="Make a reservation">
      <label htmlFor="date">Choose date <span className="required">*</span></label>
      <input
        type="date"
        name="date"
        id="date"
        ref={dateInput}
        className={`${dateError ? 'field-error' : ''}`}
        value={formData.date}
        onChange={(e) => handleChange(e)}
        onBlur={validateDate} />
      {dateError &&
        <span className="field-error-msg">Date is required</span>
      }
      <label htmlFor="time">Choose time</label>
      <select
        id="time "
        name="time"
        value={formData.time}
        onChange={(e) => handleChange(e)}>
          {props.timeOptions.map((hour, i) => {
            return <option key={i} value={hour}>{hour} PM</option>
          })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        name="guests"
        id="guests"
        min="1"
        max="10"
        ref={guestsInput}
        className={`${guestsError ? 'field-error' : ''}`}
        value={formData.guests}
        onChange={(e) => handleChange(e)}
        onBlur={validateGuests} />
      {guestsError &&
        <span className="field-error-msg">Guests must be 1 to 10</span>
      }
      <label htmlFor="occassion">Occassion</label>
      <select
        id="occassion"
        name="occassion"
        value={formData.occassion}
        onChange={(e) => handleChange(e)}>
          <option>No occassion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <Button type="submit" variant="primary" text="Make your reservation" aria-label="Submit reservation details" />
    </form>
  );
}

export default BookingForm;