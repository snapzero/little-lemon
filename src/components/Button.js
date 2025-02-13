import { Link } from "react-router";

function Button(props) {
    return (
      <>
        {props.route ?
          <Link to={`${props.route}`} className={`bttn bttn-${props.variant}`}>
            {props.text}
          </Link>
        :
          <button type={props.type} className={`bttn bttn-${props.variant}`} onClick={props.handleClick}>{props.text}</button>
        }
      </>
    );
  }

  export default Button;