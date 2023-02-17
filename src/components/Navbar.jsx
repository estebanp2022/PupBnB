import dog1 from "../assets/dog1.svg";
import dog2 from "../assets/dog2.svg";
import dog3 from "../assets/dog3.svg";

function Navbar() {
  return (
    <nav>
      <div className="brand-logo">
        <i className="fa-solid fa-dog"></i>
        <p className="brand-name">pupbnb</p>
      </div>
      <div className="svg-container">
        <div className="dog-btn">
          <img src={dog1} alt="" className="dog-svg" />
          <p>Small Dogs</p>
        </div>
        <div className="dog-btn">
          <img src={dog2} alt="" className="dog-svg" />
          <p>Big Dogs</p>
        </div>
        <div className="dog-btn">
          <img src={dog3} alt="" className="dog-svg" />
          <p>Fluffy Dogs</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
