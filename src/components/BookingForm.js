import { useState, useLayoutEffect } from 'react';
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

  const [dateError, setDateError] = useState('');

  const handleChange = (event) => {
    setFormData(prevData => ({...prevData, [event.target.name]: event.target.value}));
    if(event.target.name === 'date') {
      validateDate(event);
      let formDate = {'date': event.target.value}
      props.dispatch(formDate);
    }
  };

  const validateDate = (event) => {
    const target = event.target[0] || event.target;
    if (target.value === '') {
      setDateError('Date is required');
      return false;
    }
    setDateError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = validateDate(e);
    if (noErrors) {
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/reservation-details');
    }
  }

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date <span className="required">*</span></label>
      <input
        type="date"
        name="date"
        id="date"
        className={`${dateError ? 'field-error' : ''}`}
        value={formData.date}
        onChange={(e) => handleChange(e)}
        onBlur={validateDate} />
      {dateError &&
        <span className="field-error-msg">{dateError}</span>
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
        value={formData.guests}
        onChange={(e) => handleChange(e)} />
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
      <Button type="submit" variant="primary" text="Make your reservation" />
    </form>
  );
}

export default BookingForm;