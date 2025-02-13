import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import BookingHeading from './BookingHeading';
import Button from './Button';
import Loading from '../assets/loading.gif';

function BookingDetails() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useLayoutEffect(() => {
      const storedData = localStorage.getItem('formData');
      if (storedData) {
        setData(JSON.parse(storedData));
        setIsLoading(false);
      }
    }, []);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timeZone: "UTC",
    };

    const handleBack = () => {
        navigate('/reservations');
    };

    const fakeApiCall = (data, shouldReject) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldReject) {
                    reject(`Error: ${data} operation failed.`);
                } else {
                    resolve(`Success: ${data} operation completed.`);
                }
            }, 5000);
        });
    }

    const handleConfirm = () => {
        setIsLoading(true);
        // eslint-disable-next-line no-unused-vars, no-undef
        const submit = submitAPI(data);
        fakeApiCall(submit, false)
            .then((submit) => {
                console.log("Promise resolved: ", submit);
            })
            .catch((error) => {
                console.error("Promise rejected:", error);
            });
        navigate('/reservation-confirmed');
    };

    return (
        <>
            {(!isLoading && data) && (
                <section className="booking">
                    <BookingHeading
                        heading={'Review Details'}
                        subHeading={'Is everything correct before confirming?'}
                    />
                    <div className="text-center">
                        <dl>
                            <dt>Date</dt>
                            <dd>{new Date(data.date).toLocaleDateString('en-US', options)}</dd>
                            <dt>Time</dt>
                            <dd>{data.time} PM</dd>
                            <dt>Guests</dt>
                            <dd>{data.guests}</dd>
                            <dt>Occassion</dt>
                            <dd>{data.occassion}</dd>
                        </dl>
                        <div>
                            <Button
                                type="button"
                                variant="secondary"
                                text="Go back"
                                handleClick={handleBack} />
                            <Button
                                type="button"
                                variant="primary margin-l-20"
                                text="Confirm"
                                handleClick={handleConfirm} />
                        </div>
                    </div>
                </section>
            )}
            {(!data || isLoading) && <img src={Loading} className="img-center" alt="Loading" />}
        </>
    );
  }

  export default BookingDetails;