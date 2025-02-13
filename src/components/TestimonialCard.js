import DeliveryIcon from '../assets/Basket.svg';

function TestimonialCard(props) {
    return (
      <div className="card padding-20 bg-white">
        <h4 className="margin-bottom-10">{props.rating} stars</h4>
        <div className="flex-container jc-start center">
          <img src={props.image} width="100" alt="Reviewer" />
          <p>{props.name}</p>
        </div>
        <p>{props.children}</p>
      </div>
    );
  }

  export default TestimonialCard;