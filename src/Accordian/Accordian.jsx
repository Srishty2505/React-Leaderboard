import { IoMdArrowDropdownCircle } from "react-icons/io";
import data from "./data.js"

import "./accordian.css"
import { useState } from "react";

// Ternary Operator ? :

function Accordian() {

    const [arr, setArr] = useState(data);

    function toggleAccordion(idClicked) {
        setArr(arr.map((obj) => {
            if (obj.id === idClicked) {
                return { ...obj, active: !obj.active } // {id:3, title: Accordion 3, para: ....., active: true}
            }
            else {
                return obj
            }
        }))
    }

    return (
        <>
            {
                arr.map((obj) => {
                    return (
                        <div key={obj.id} className="main">
                            <h1>{obj.title} <IoMdArrowDropdownCircle className={obj.active? "round": "" } onClick={() => toggleAccordion(obj.id) } /></h1>
                            <p className={obj.active === true ? "active" : ""}>{obj.paragraph}</p>
                        </div>)

                })
            }

        </>
    )
}
export default Accordian 