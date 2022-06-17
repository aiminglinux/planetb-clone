import classNames from "classnames/bind";

import { logo, downicon } from "../../assets/images";
import Form from "./component/Form";
import styles from "./Organization.module.scss";

const cx = classNames.bind(styles);

function Organization() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2 className={cx("text")}>Describe the organization</h2>
      </div>
      <div className={cx("form")}>
        <Form />
      </div>
    </div>
  );
}

export default Organization;
