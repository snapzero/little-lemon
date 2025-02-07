import { Link } from "react-router";

function Button(props) {
    return (
      <>
        <Link to={`/${props.route}`}>
          <button type={props.type} className={`bttn bttn-${props.variant}`}>{props.text}</button>
        </Link>
      </>
    );
  }

  export default Button;