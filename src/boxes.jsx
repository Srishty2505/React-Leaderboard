import "./basic.css"

function Boxes({myimage,myheading,mycontent})
{
    return<>
    <div className="data">
        <div className="cardoneimage">
            <img src={myimage} alt="" />
        </div>
        <h1>{myheading}</h1>
        <p>{mycontent}</p>
    </div>
    </>
}



export default Boxes