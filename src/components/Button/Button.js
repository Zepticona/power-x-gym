import {Link} from 'react-router-dom';

const Button = (props) => (
    <Link  onClick={props.btnClicked} className="primary-button">{props.children}</Link>
)

export default Button;