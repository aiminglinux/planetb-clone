import { useNavigate } from "react-router-dom";

import classes from "./CreateGame.module.scss";
import { logo } from "../../assets/images";
import Button from "../../components/Button/Button";

function CreateGame() {
  let navigate = useNavigate();

  const handleCreateGameClick = (event) => {
    navigate("/organization");
  };

  const handleDashboardClick = (event) => {
    navigate("/dashboard");
  };

  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="logo" />
      <h2>What are you up to</h2>
      <Button onClick={handleDashboardClick} outline medium>
        Dashboard
      </Button>
      <Button onClick={handleCreateGameClick} primary medium>
        Create a game
      </Button>
    </div>
  );
}

export default CreateGame;
