import { IoMdArrowDropdownCircle } from "react-icons/io";

function Box(props)
{
    return<div className="box">
        <h2 onClick={() =>props.toggleContent(props.id)}>{props.name} <IoMdArrowDropdownCircle className={props.hidden? "round": "" }/> </h2>

        <div className = {props.hidden? "gayab": ""}>
        <img src={props.img} alt="Random Pic" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti ipsum libero expedita, dolores dicta sequi temporibus commodi nisi incidunt tenetur eum omnis deserunt, aliquid tempore, qui possimus obcaecati harum.</p>
    </div>
    </div>
}
export default Box  