import { useState } from "react";

function YesNo() {
  const [resultText, setResultText] = useState("");
  function handleYesClick() {
    setResultText("Yes");
  }
  function handleNoClick() {
    setResultText("No");
  }
  return (
    <div>
      {" "}
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>
      <p>{resultText}</p>
    </div>
  );

  //   const [state, setState] = useState("Yes");
  //   const textDiv = document.getElementById("textDiv");
  //   const ChangeText = () => {
  //     textDiv.innerText = state;
  //   };
  //   return (
  //     <div>
  //       <input
  //         onClick={ChangeText}
  //         id="button1"
  //         type="button"
  //         value="Change to yes"></input>
  //       <input
  //         onClick={() => {
  //           setState("No");
  //           ChangeText();
  //         }}
  //         id="button2"
  //         type="button"
  //         value="Change to no"></input>
  //       <div id="textDiv"></div>
  //     </div>
  //   );
}

export default YesNo;
