
import { useEffect, useState } from "react"
import axios from "axios"
function FetchDataFromApi() 
{
    const [picture , setpicture] = useState("")
    const [name , setname] = useState("")
    
    useEffect(()=>
    {
        async function fetchData(){
            const result = await axios.get("https://randomuser.me/api/")
            // console.log(result.data.results[0])
            setpicture(result.data.results[0].picture.large)
            setname(result.data.results[0].name.first)
            
            }
            fetchData()
    } , [])
    
    // function getdatafromapi(){
    //     // fetch('https://randomuser.me/api/')
    //     // .then((response)=>{
    //     //     return response.json()
    //     // })
    //     // .then ((result)=>{
    //     //     console.log(result.results[0])
    //     // })
    
    // }
    return (
        <>
        <h1>Fetching Data In React</h1>
        <img src={picture} alt="" />
        <h3>{name}</h3>
        </>
    )
}
export default FetchDataFromApi