import { useState } from "react"

function Home()
{

const [first , setnum1] =useState("")
const [second , setnum2] =useState("")
const [output , setoutput] =useState("")



const change = (e) => {
   if (e.target.value === "+") {
     setoutput(Number(first) + Number(second));
   } else if (e.target.value === "-") {
      setoutput(Number(first) - Number(second));
   } else if (e.target.value === "*") {
      setoutput(Number(first) * Number(second));
   } else if (e.target.value === "/") {
      setoutput(Number(first) / Number(second));
   }
 };
 return (
    <>
    <input type="text"
    placeholder=" Enter First Value" 
    value={first} 
    onChange={(e) => setnum1(e.target.value)}/>

    <input type="text"
    placeholder=" Enter Second Value" 
     value={second} 
     onChange={(e)=> setnum2 (e.target.value)}/>

    <select name="" id="" onChange={change}>
    <option value>Select</option>
    <option value="+">ADD</option>
    <option value="-">Subtract</option>
    <option value="*">Multiply</option>
    <option value="/">Divide</option>
    </select>
    <p>{output}</p>
    </>
 )
}
export default Home