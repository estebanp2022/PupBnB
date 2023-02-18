import dog2 from "../assets/dog2.svg";

function PupBtn(props) {
  return (
    <div className="svg-container">
      <button onClick={props.handleClick} className="dog-btn">
        <img src={dog2} alt="" className="dog-svg" />
        <p>Get More Pictures!</p>
      </button>
    </div>
  );
}

export default PupBtn;
