import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

const options = [
  {
    id: 1,
    name: "Public",
  },
  {
    id: 2,
    name: "Professional",
  },
];

function Form() {
  const [checked, setChecked] = useState();

  console.log(checked);
  return (
    <form className={cx("wrapper")}>
      <div className={cx("org")}>
        <input type="text" placeholder="Organization" />
      </div>
      <div className={cx("options")}>
        {options.map((option) => (
          <label key={option.id}>
            <input
              type="radio"
              checked={checked === option.id}
              onChange={() => setChecked(option.id)}
            />
            {option.name}
          </label>
        ))}
      </div>
      <div className={cx("text-area")}>
        <textarea
          rows="10"
          placeholder="Description (Maximum 200 characters)"
        ></textarea>
      </div>
    </form>
  );
}

export default Form;
