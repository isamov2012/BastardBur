import { useState } from "react";

function BastardBurger() {
  // Nils commit
  const price = 179;

  const namesAdd = ["Vegan Patty", "Fejkon", "Vegan cheese", "Jalapeno"];

  const pricesAdd = {
    "Vegan Patty": 40,
    Fejkon: 15,
    "Vegan cheese": 15,
    Jalapeno: 10,
  };

  const [countAdd, setCountAdd] = useState({
    "Vegan Patty": 0,
    Fejkon: 0,
    "Vegan cheese": 0,
    Jalapeno: 0,
  });

  const sumCountAdd = () => {
    let sumCount = 0;
    for (let key in countAdd) {
      sumCount += countAdd[key];
    }
    return sumCount;
  };

  const add_add = (item) => {
    if (countAdd[item] < 3 && sumCountAdd() < 4)
      setCountAdd((countAdd) => {
        const clonedCountAdd = { ...countAdd };
        clonedCountAdd[item] = clonedCountAdd[item] + 1;
        return clonedCountAdd;
      });
  };

  const add_remove = (item) => {
    if (countAdd[item] !== 0) {
      setCountAdd((countAdd) => {
        const clonedCountAdd = { ...countAdd };
        clonedCountAdd[item] = clonedCountAdd[item] - 1;
        return clonedCountAdd;
      });
    }
  };

  const calcPrice = () => {
    let sum = 0;
    for (let key in countAdd) {
      sum += countAdd[key] * pricesAdd[key];
    }
    return sum + price;
  };

  const addMenu = (item) => {
    return (
      <>
        <div className="mt-3">
          <input
            key={"remove" + item}
            type="button"
            className="add-btn-remove"
            value="-"
            id={item}
            onClick={() => add_remove(item)}
          />
          <input
            key={"add" + item}
            className="add-btn-add"
            type="button"
            value="+"
            id={item}
            onClick={() => add_add(item)}
          />
          <label className="add-btn-text" htmlFor={item}>
            {item} {"("}
            {countAdd[item]}
            {")"}
          </label>
          <span style={{ float: "right", color: "gray" }}>
            +sek {pricesAdd[item]}
          </span>
        </div>
      </>
    );
  };
  // Slut på nils commit

  const [state, setState] = useState(0);

  function Increment() {
    setState(state + 1);
  }

  function Decrement() {
    state > 1 ? setState(state - 1) : setState(0);
  }

  return (
    <article className="box mb-3">
      <div className="container mb-3">
        <div className="mb-3">
          <img
            id="burgerPic"
            alt="burger"
            src="https://i.imgur.com/cUK1f0E.png"
          />
          <h1>Vegan Norrköping meal</h1>
          <p style={{ fontSize: 12, color: "grey  " }}>
            Bastard Barbeque, rödlök, krispsallad, vegansk ost, chipotledressing
          </p>
        </div>
        <div>
          <p className="h4">Adapt</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required*</p>
          <input type="radio" id="radio1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Vegan Norrköping
          </label>
        </div>
        <div>
          <br />
          <p className="h4">Add</p>

          <p style={{ fontSize: 13, color: "grey  " }}>
            Choose up to 4 and max 3 of each
          </p>
          <div id="ingr"></div>

          {/* Nils commit  */}
          {namesAdd.map(addMenu)}
          <p className="mt-3">Totalt pris: {calcPrice()}</p>
          {/* Slut på Nils commit  */}

          {/* <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Vegan Patty
          </label>
          <br />
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2" style={{ paddingLeft: "6px" }}>
            Vegan Cheese
          </label>
          <br />
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3" style={{ paddingLeft: "6px" }}>
            Salad
          </label>
          <br />
          <input type="checkbox" id="checkbox4" />
          <label htmlFor="checkbox4" style={{ paddingLeft: "6px" }}>
            Red Onion
          </label> */}
        </div>
        <div>
          {/* <br /> */}
          <p className="h4">Remove</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 4</p>
          <input type="checkbox" id="checkbox5" />
          <label htmlFor="checkbox5" style={{ paddingLeft: "6px" }}>
            Vegan Patty
          </label>
          <br />
          <input type="checkbox" id="checkbox6" />
          <label htmlFor="checkbox6" style={{ paddingLeft: "6px" }}>
            Vegan Cheese
          </label>
          <br />
          <input type="checkbox" id="checkbox7" />
          <label htmlFor="checkbox7" style={{ paddingLeft: "6px" }}>
            Salad
          </label>
          <br />
          <input type="checkbox" id="checkbox8" />
          <label htmlFor="checkbox8" style={{ paddingLeft: "6px" }}>
            Red Onion
          </label>
          <br />
        </div>
        <div>
          <br />
          <p className="h4">Change</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 1</p>
          <input type="radio" id="radio2" />
          <label htmlFor="radio2" style={{ paddingLeft: "6px" }}>
            Gluten free bread
          </label>
        </div>
        <div>
          <br />
          <p className="h4">Choose Your Side</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required</p>
          <input type="radio" id="radio3" name="group1" />
          <label htmlFor="radio3" style={{ paddingLeft: "6px" }}>
            Shack Fries
          </label>
          <br />
          <input type="radio" id="radio4" name="group1" />
          <label htmlFor="radio4" style={{ paddingLeft: "6px" }}>
            Shack Fries Large
          </label>
          <br />
          <input type="radio" id="radio5" name="group1" />
          <label htmlFor="radio5" style={{ paddingLeft: "6px" }}>
            Sweet Potato
          </label>
          <br />
          <input type="radio" id="radio6" name="group1" />
          <label htmlFor="radio6" style={{ paddingLeft: "6px" }}>
            Sweet Potato Large
          </label>
        </div>
        <div>
          <br />
          <p className="h4">Add a plant based dip</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 1</p>
          <input type="checkbox" id="checkbox12" />
          <label htmlFor="checkbox12" style={{ paddingLeft: "6px" }}>
            Bastard original Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox9" />
          <label htmlFor="checkbox9" style={{ paddingLeft: "6px" }}>
            Bastard aioli Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox10" />
          <label htmlFor="checkbox10" style={{ paddingLeft: "6px" }}>
            Truffle mayo Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox11" />
          <label htmlFor="checkbox11" style={{ paddingLeft: "6px" }}>
            Chipotle Dip
          </label>
        </div>
        <div>
          <br />
          <p className="h4">Choose Your Drink</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required</p>
          <input type="radio" id="radio7" name="group2" />
          <label htmlFor="radio7" style={{ paddingLeft: "6px" }}>
            Coca Cola
          </label>
          <br />
          <input type="radio" id="radio8" name="group2" />
          <label htmlFor="radio8" style={{ paddingLeft: "6px" }}>
            Coca Cola Zero
          </label>
          <br />
          <input type="radio" id="radio9" name="group2" />
          <label htmlFor="radio9" style={{ paddingLeft: "6px" }}>
            Fanta
          </label>
          <br />
        </div>
        <br />
        <input
          type="button"
          className="btn btn-primary"
          value=" Add to order"
        />
        <div>
          <br />
          <input
            onClick={Increment}
            type="button"
            className="button3"
            value="+"
          />
          <span style={{ padding: 15 }}>{state}</span>
          <input
            onClick={Decrement}
            type="button"
            className="button3"
            value="-"
          />
        </div>
      </div>
    </article>
  );
}
export default BastardBurger;
