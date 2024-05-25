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

  return (
    <div>
      <nav className="answer-container">
        <span className="answer">{input}</span>
      </nav>
      <main className="button-container">
        <div className="grid-button-container">
          <Button title="7" onClick={() => clicked(7)}/>
          <Button title="8" onClick={() => clicked(8)}/>
          <Button title="9" onClick={() => clicked(9)}/>
          <Button title="÷" onClick={() => clicked("÷")}/>

          <Button title="4" onClick={() => clicked(4)}/>
          <Button title="5" onClick={() => clicked(5)}/>
          <Button title="6" onClick={() => clicked(6)}/>
          <Button title="x" onClick={() => clicked("x")}/>

          <Button title="1" onClick={() => clicked(1)}/>
          <Button title="2" onClick={() => clicked(2)}/>
          <Button title="3" onClick={() => clicked(3)}/>
          <Button title="-" onClick={() => clicked("-")}/>

          <Button title="0" onClick={() => clicked(0)}/>
          <Button title="." onClick={() => clicked(".")}/>
          <Button title="Del" onClick={delete_input}/>
          <Button title="+" onClick={() => clicked("+")}/>
        </div>
        <div className="equal-container">
          <Button title="=" onClick={() => clicked("=")} className="equal"/>
        </div>
      </main>
    </div>
  );
}