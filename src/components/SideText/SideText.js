import classes from "./SideText.module.scss";
import { icon1, icon2, icon3, icon4 } from "../../assets/images";

function SideText() {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.items}>
        <li>
          <img src={icon1} alt="icon1" />
          Planting and protecting forests: A premise for sustainable
          development.
        </li>
        <li>
          <img src={icon2} alt="icon2" />
          The community joins hands to protect the green earth and preserve the
          environment.
        </li>
        <li>
          <img src={icon3} alt="icon3" />
          Protect the existence of the animal world to ensure the future of
          wildlife.
        </li>
        <li>
          <img src={icon4} alt="icon4" />
          Communication is very important in Team building and relationship
          development.
        </li>
      </ul>
    </div>
  );
}

export default SideText;
