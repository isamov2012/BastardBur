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
          <p style={{ fontSize: 12, color: "grey  " }}>Required*</p>
          <input type="radio" />
          <label>Vegan Norrköping</label>
        </div>
        <div>
          <br />
          <p class="h4">Add</p>
          <p style={{ fontSize: 12, color: "grey  " }}>Choose up to 4</p>
          <div id="ingr"></div>
          <input name="VeganPatty" type="checkBox" />
          <label htmlFor="VeganPatty">Vegan Patty</label>
          <br />
          <input name="VeganPatty" type="checkBox" />
          <label htmlFor="VeganPatty">Vegan Cheese</label>
          <br />
          <input name="VeganPatty" type="checkBox" />
          <label htmlFor="VeganPatty">Sallad</label>
          <br />
          <input name="VeganPatty" type="checkBox" />
          <label htmlFor="VeganPatty">Red</label>
        </div>
        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option>Remove</option>
            <option>California</option>
            <option>Florida</option>
            <option>Kentucky</option>
            <option>Texas</option>
          </select>
          <input type="checkBox" />
          <label>Vegan Patty</label>
          <br />
          <input type="checkBox" />
          <label>Vegan Cheese</label>
          <br />
          <input type="checkBox" />
          <label>Sallad</label>
          <br />
          <input type="checkBox" />
          <label>Red</label>
          <br />
          <input type="checkBox" />
          <label>Red</label>
          <br />
          <input type="checkBox" />
          <label>Red</label>
          <br />
        </div>
        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option>Remove</option>
            <option>California</option>
            <option>Florida</option>
            <option>Kentucky</option>
            <option>Texas</option>
          </select>
          <input type="radio" />
          <label>Gluten free bread</label>
        </div>
        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option>Remove</option>
            <option>California</option>
            <option>Florida</option>
            <option>Kentucky</option>
            <option>Texas</option>
          </select>
          {/*  */}
          <input name="ingredient" type="radio" />
          <label>Shack Fries</label>
          <br />
          <input name="ingredient" type="radio" />
          <label>Shack Fries Large</label>
          <br />
          <input name="ingredient" type="radio" />
          <label>Sweet Potato</label>
          <br />
          <input name="ingredient" type="radio" />
          <label>Sweet Potato Large</label>
        </div>
        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option>Add a plant based dip</option>
            <option>California</option>
            <option>Florida</option>
            <option>Kentucky</option>
            <option>Texas</option>
          </select>
          <input type="checkBox" />
          <label>Bastard original Dip</label>
          <br />
          <input type="checkBox" />
          <label>Bastard aioli Dip</label>
          <br />
          <input type="checkBox" />
          <label>Truffle mayo Dip</label>
          <br />
          <input type="checkBox" />
          <label>Chipotle Dip</label>
          <br />
        </div>
        <div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option>Choose your drink</option>
            <option>California</option>
            <option>Florida</option>
            <option>Kentucky</option>
            <option>Texas</option>
          </select>
          <input id="coca" name="ingredient1" type="radio" />
          <label htmlFor="coca">Coca Cola</label>
          <br />
          <input id="CocaColaZero" name="ingredient1" type="radio" />
          <label htmlFor="CocaColaZero">Coca Cola Zero</label>
          <br />
          <input id="Fanta" name="ingredient1" type="radio" />
          <label htmlFor="Fanta">Fanta</label>
          <br />
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value=" Add to order"
        />
        <div>
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
