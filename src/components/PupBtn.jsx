import dog2 from "../assets/dog2.svg";

function PupBtn(props) {
  return (
    <div className="svg-container">
      <button onClick={props.handleClick} className="btn_center">
        <img src={dog2} alt="" className="dog-svg" />
        <p>GET MORE PICTURES!</p>
      </button>
    </div>
  );
}

export default PupBtn;
