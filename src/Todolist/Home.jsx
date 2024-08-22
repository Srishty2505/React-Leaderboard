import { useState } from "react"
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

function Home()
{
    const [inp , setinp] = useState("")
    const [tasks ,settasks] = useState([])
    const [isediting , setisediting] = useState(false)
    const [editid , seteditid] = useState(null)
    function addtask()
    {
        if(!isediting){
        const obj ={id: Date.now(), task: inp ,complete: false}
        settasks([...tasks ,obj])
        }
        else
        {
        settasks(tasks.map((obj)=>
{
    return obj.id=== editid?    {...obj , task:inp}:obj
})
        )
        setisediting(false)
        seteditid(null)
        }
        setinp ("")
    }

    // console.log(tasks)
    // function changeinp(e)
    // {
    //     setinp(e.target.value)
    // }
    function deletetask(e , id)
    {
        const indextodelete =tasks.findIndex((obj)=>
            {return obj.id === id})
        settasks(tasks.filter((obj , index)=> {return index !== indextodelete})
)
    }
    function edittask(e, id)
    {
       const tasktoedit = tasks.find((task)=>
        {return task.id === id})
       setinp (tasktoedit.task)
       setisediting(true)
       seteditid(id)
    }
    function markascomplete(e, id)
    {
        settasks(tasks.map((obj)=>
        {
            return obj.id=== id?{...obj, completed:!obj.completed}:obj
        })
    )
    }
    console.log(tasks)

    return(
    <>
    <div id="todo">
    <h1>TO DO APP</h1>
    <input type="text" placeholder="Enter the task" value={inp} onChange={(e)=> setinp(e.target.value)} />
    <button on onClick={addtask}>
        {!isediting? "Add Task" :" Edit Task"}</button>
    </div>

    <ul>
        {
            tasks.map ((obj, index)=>
            {
                return <li key={index}><span>{obj.task}</span>
                <MdDelete onClick={(e)=> deletetask (e, obj.id)}/>
                <CiEdit onClick={(e)=> edittask (e, obj.id)}/>
                <FaCheck onClick ={(e)=> markascomplete (e, obj.id)}/>
                
                </li>
            })  
        }
    </ul>
    
    
    
    </> 

   
    )
}
export default Home