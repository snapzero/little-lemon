import Confirmed from '../assets/confirmed-green.jpg';
import Button from './Button';

function ConfirmedBooking() {
    return (
    <section className="booking">
        <h2 className="text-center">Confirmed</h2>
        <p className="margin-bottom-10 padding-bottom-10 text-center">Your reservation has been made.</p>
        <img className="img-center" src={Confirmed} style={{maxWidth: '300px'}} alt="Confirmed" />
        <div className="flex-container jc-center">
            <Button route="/" variant="primary" text="View our menu" />
        </div>
    </section>
    );
  }

  export default ConfirmedBooking;