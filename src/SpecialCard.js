import DeliveryIcon from './assets/Basket.svg';

function SpecialCard(props) {
    return (
      <div className="card b-radius-top-lr">
        <img src={props.image} width="100%" height="204" />
        <h3 className="flex margin-top-10 padding-lr-20">{props.title} <span className="price">${props.price}</span></h3>
        <p className="padding-lr-20">{props.children}</p>
        <a className="margin-bottom-10 padding-lr-20 flex" href="#orderOnline">
          Order a delivery
          <img src={DeliveryIcon} width="20" />
        </a>
      </div>
    );
  }

  export default SpecialCard;