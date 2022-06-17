import classNames from "classnames/bind";

import classes from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(classes);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  medium = false,
  children,
  onClick,
}) {
  let Comp = "button";

  const props = { onClick };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const btnStyles = cx("wrapper", { primary, outline, medium });

  return (
    <Comp className={btnStyles} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
