import data from "./data.js"
import Box from "./box.jsx"
import  "./hideshow.css"
import { useState } from "react"


function Home() {

    const [arr , setArr] = useState(data)
    function toggleContent(idClicked)
    {
        // console.log(id)
       setArr( arr.map((obj)=>{
           return  obj.id ===idClicked? { ...obj , hidden: !obj.hidden} : obj
        }))
    }
   
    return(
    <>
    <main>
        {
            arr.map((obj) => {
                return <Box key={obj.id} 
                id={obj.id} 
                name ={obj.personname} 
                img ={obj.personimage}
                toggleContent ={toggleContent}
                hidden ={obj.hidden}    />
            })
            
        }
        </main>
        </>)   
}
export default Home 