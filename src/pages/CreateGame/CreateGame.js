import classes from "./CreateGame.module.scss";
import { logo } from "../../assets/images";
import Button from "../../components/Button/Button";

function CreateGame() {
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="logo" />
      <h2>What are you up to</h2>
      <Button outline medium>
        Dashboard
      </Button>
      <Button primary medium>
        Create a game
      </Button>
    </div>
  );
}

export default CreateGame;
