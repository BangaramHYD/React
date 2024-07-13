
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {
//   const [count, setCount] = useState(0)
  
//   function  update(){
//     setCount(count+1);
//   }
//   return (
//    <div>
//      <Custombutton count={count} setCount={setCount}>Counter {count}</Custombutton>
//      <Custombutton count={count+10} setCount={setCount}>Counter {count}</Custombutton>
//    </div>
   
//   )
// }

// function Custombutton(props){
//   function onclickhandler(){
//     props.setCount(props.count+1);
//   }
//   return <button onClick={onclickhandler}>
//     Counter {props.count}
//   </button>
// console.log("jai mahism")
const [todo,setTodo] = useState(
  [
    {
      title:"go to gym",
      text:"7am to 8am"
    },
    {
      title:"Love Bangaram",
      text:"Forever"
    }
  ]
)
function todos(){
  setTodo(
    [...todo,{
      title:"Srija",
      text:"She is gold"
    }]
  )
 }
  return(
    <div>
      <button onClick={todos}>click me</button>
      {todo.map(function(k){
        return <Todo title={k.title} text={k.text}></Todo>
      })}
    </div>
    
    
  )
}
 function Todo(probs){
  return(
    <div>
      <h1>{probs.title}</h1>
      <h1>{probs.text}</h1>
    </div>
  )
 }


export default App
