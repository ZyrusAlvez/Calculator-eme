import Button from "./component/Button.jsx"

export default function App () {

  function clicked (){
    alert("button clicked!")
  }

  return (
    <div>
        <Button title="7" onClick={clicked}/>
        <Button title="8" onClick={clicked}/>
        <Button title="9" onClick={clicked}/>
        <Button title="÷" onClick={clicked}/>
        
        <Button title="4" onClick={clicked}/>
        <Button title="5" onClick={clicked}/>
        <Button title="6" onClick={clicked}/>
        <Button title="x" onClick={clicked}/>

        <Button title="1" onClick={clicked}/>
        <Button title="2" onClick={clicked}/>
        <Button title="3" onClick={clicked}/>
        <Button title="-" onClick={clicked}/>

        <Button title="0" onClick={clicked}/>
        <Button title="." onClick={clicked}/>
        <Button title="=" onClick={clicked}/>
        <Button title="+" onClick={clicked}/>
    </div>
  );
}