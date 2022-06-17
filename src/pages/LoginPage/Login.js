import { Fragment } from "react";
import classes from "./Login.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import SideText from "../../components/SideText/SideText";

function HomePage() {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div>
          <SideText />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
