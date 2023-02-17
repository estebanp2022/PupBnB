import dog1 from "../assets/dog1.svg";
import dog2 from "../assets/dog2.svg";
import dog3 from "../assets/dog3.svg";

function NavBtns() {
  return (
    <div className="svg-container">
      <button className="dog-btn">
        <img src={dog1} alt="" className="dog-svg" />
        <p>Small Dogs</p>
      </button>
      <button className="dog-btn">
        <img src={dog2} alt="" className="dog-svg" />
        <p>Big Dogs</p>
      </button>
      <button className="dog-btn">
        <img src={dog3} alt="" className="dog-svg" />
        <p>Fluffy Dogs</p>
      </button>
    </div>
  );
}

export default NavBtns;
