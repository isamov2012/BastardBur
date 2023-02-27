import { useState } from "react";

function BastardBurger() {
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
          <p class="h4">Adapt</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required*</p>
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Vegan Norrköping
          </label>
        </div>
        <div>
          <br />
          <p class="h4">Add</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 4</p>
          <div id="ingr"></div>
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Vegan Patty
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Vegan Cheese
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Salad
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Red Onion
          </label>
        </div>
        <div>
          <br />
          <p class="h4">Remove</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 4</p>
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Vegan Patty
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Vegan Cheese
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Salad
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Red Onion
          </label>
          <br />
        </div>
        <div>
          <br />
          <p class="h4">Change</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 1</p>
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Gluten free bread
          </label>
        </div>
        <div>
          <br />
          <p class="h4">Choose Your Side</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required</p>
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Shack Fries
          </label>
          <br />
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Shack Fries Large
          </label>
          <br />
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Sweet Potato
          </label>
          <br />
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Sweet Potato Large
          </label>
        </div>
        <div>
          <br />
          <p class="h4">Add a plant based dip</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Choose up to 1</p>
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Bastard original Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Bastard aioli Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Truffle mayo Dip
          </label>
          <br />
          <input type="checkbox" id="checkbox1" name="group1" />
          <label htmlFor="checkbox1" style={{ paddingLeft: "6px" }}>
            Chipotle Dip
          </label>
        </div>
        <div>
          <br />
          <p class="h4">Choose Your Drink</p>
          <p style={{ fontSize: 13, color: "grey  " }}>Required</p>
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Coca Cola
          </label>
          <br />
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
            Coca Cola Zero
          </label>
          <br />
          <input type="radio" id="radio1" name="group1" />
          <label htmlFor="radio1" style={{ paddingLeft: "6px" }}>
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
          <span>{state}</span>
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
