// const data =["Raman","Chaman","Mangu","Changu"]
import Child from "./Child.jsx"

const data =[
    {name:"Ritik" , age:25},
    {name:"Anjali" , age:25},
    {name:"Priya" , age:25},
    {name:"Srishty" , age:25},
    {name:"Pushkar" , age:25},
]

function Main()
{
    return( 
    <>
    <h1> How to print array of objects</h1>
    {/* IN  REACT , WHENEVER HTML ELEMENT ARE CREATEDVIA  A LOOP , A UNIQUE IDENTIFIER (KEY) HAS TO BE  ATTACHED WITH EACH ELEMENT , IN ORDER TO IDENTIFY EACH ELEMENT SEPERATELY */}
    {
        data.map((obj ,index)=>{
            // return <p key={name}>{age}</p>
            return(
               <Child key ={index} name ={obj.name} age = {obj.age}/>
                
            )
        })}
    </>
    )
}
export default Main