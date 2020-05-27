import React, { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px"
  });
  const [shown, setIsShown] = useState(false);

  function changeValues(event) {
    if (event.target.value < 0) {
      return;
    }
    let newValue = event.target.value + "px";
    setValues({
      ...values,
      [event.target.name]: newValue
    });
  }

  function copyCssToClipboard() {
    let css = "\"border-radius: " + values.borderTopLeftRadius + " " + values.borderTopRightRadius + " " + values.borderBottomRightRadius + " " + values.borderBottomLeftRadius + ";\"";
    navigator.clipboard.writeText(css)
  }

  return (
    <div className="App">
      <label for="borderTopLeftRadius"> Top left </label>
      <input type="number" name="borderTopLeftRadius" onChange={changeValues} min="1"/>
      <label for="borderTopRightRadius"> Top right </label>
      <input type="number" name="borderTopRightRadius" onChange={changeValues} min="1"/>
      <label for="borderBottomLeftRadius"> Bottom left </label>
      <input type="number" name="borderBottomLeftRadius" onChange={changeValues} min="1"/>
      <label for="borderBottomRightRadius"> Bottom right </label>
      <input type="number" name="borderBottomRightRadius" onChange={changeValues} min="1"/>
      <div className="box" style={values} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={copyCssToClipboard}>
        {shown && <strong> Click to copy CSS </strong>}
      </div>
    </div>
  );
}

export default App;
