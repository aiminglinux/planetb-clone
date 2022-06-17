import { useNavigate } from "react-router-dom";

import classes from "./LoginForm.module.scss";
import { logo } from "../../assets/images";
import Button from "../Button/Button";

function LoginForm() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/create-game");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Host Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <Button primary>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
