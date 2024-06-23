import Button from "./component/Button.jsx"
import { useState } from "react";
import './App.css'

export default function App () {
  const [input, setInput] = useState("")

  function clicked (number){
    setInput((i) => i + String(number))
  }

  function delete_input (){
    setInput((i) => i.split("").slice(0, i.length - 1).join(""))
  }

  function equal () {
    setInput((i) => "Miss na kita")
  }

  return (
    <div className="main-div">
      <nav className="answer-container">
        <span className="answer">{input}</span>
      </nav>
        <div className="grid-button-container">
          <Button title="7" onClick={() => clicked(7)} className="btn"/>
          <Button title="8" onClick={() => clicked(8)} className="btn"/>
          <Button title="9" onClick={() => clicked(9)} className="btn"/>
          <Button title="÷" onClick={() => clicked("÷")} className="btn"/>
          <Button title="=" onClick={equal} className="btn"/>

          <Button title="4" onClick={() => clicked(4)} className="btn"/>
          <Button title="5" onClick={() => clicked(5)} className="btn"/>
          <Button title="6" onClick={() => clicked(6)} className="btn"/>
          <Button title="x" onClick={() => clicked("x")} className="btn"/>

          <Button title="1" onClick={() => clicked(1)} className="btn"/>
          <Button title="2" onClick={() => clicked(2)} className="btn"/>
          <Button title="3" onClick={() => clicked(3)} className="btn"/>
          <Button title="-" onClick={() => clicked("-")} className="btn"/>

          <Button title="0" onClick={() => clicked(0)} className="btn"/>
          <Button title="." onClick={() => clicked(".")} className="btn"/>
          <Button title="Del" onClick={delete_input} className="btn"/>
          <Button title="+" onClick={() => clicked("+")} className="btn"/>
        </div>
    </div>
  );
}