function Train() {
  const changeColor = (event) => {
    if (event.target.id === "roundTrip") {
      document.getElementById("box1").style.backgroundColor = "blue";
      document.getElementById("box2").style.backgroundColor = "white";
    } else {
      document.getElementById("box2").style.backgroundColor = "blue";
      document.getElementById("box1").style.backgroundColor = "white";
    }
  };
  return (
    <div className="center">
      <article className="box">
        <div id="radioCont" className=" bm-3">
          <div id="box1" className="radioDiv mt-3">
            <input
              onClick={changeColor}
              id="roundTrip"
              name="trip"
              type="radio"></input>
            <label htmlFor="roundTrip">Round trip</label>
          </div>

          <div id="box2" className="radioDiv mt-3">
            <input
              id="oneTrip"
              name="trip"
              type="radio"
              onClick={changeColor}></input>
            <label htmlFor="oneTrip">One way trip</label>
          </div>
        </div>
        <div id="dateFeilds">
          <div>
            <label htmlFor="Depart">Depart</label>
            <input id="Depart" type="date"></input>
          </div>
          <div>
            <label>Return</label>
            <input type="date"></input>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Search
        </button>
        <div></div>
      </article>
    </div>
  );
}

export default Train;
