function BookingHeading(props) {
    return (
    <>
        <h2 className="text-center">{props.heading}</h2>
        <p className="margin-bottom-10 padding-bottom-10 text-center">{props.subHeading}</p>
    </>
    );
  }

  export default BookingHeading;