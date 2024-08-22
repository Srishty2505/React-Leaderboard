import { useState } from "react";

function Leaderboard() {

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [myleaderboard, setLeaderBoard] = useState([]);

  function submitted(e) {
    e.preventDefault();
    const obj = { fname, lname, country, score };
    setLeaderBoard(viewscore([...myleaderboard,obj]));
  }

  console.log(myleaderboard);
  function viewscore(board) 
  {
    return board.length  ? board.sort((x, z) => z.score - x.score) : board;
  }
  const scoreadd = (record) => {
    let newscoreadd = myleaderboard.map((item) => {
        return (item.id == record.id ? { ...item, score: Number (item.score + 5) } : item)
    })
    setLeaderBoard(viewscore(newscoreadd));
  };

  const scoresubtract = (record) => {
    const newscoresubtract = myleaderboard.map((item) =>
      item.id === record.id ? { ...item, score: item.score - 5 } : item
    );
    setLeaderBoard(viewscore(newscoresubtract));
  };

  const del = (record) => {
    const newdel = myleaderboard.filter((item) => item.id !== record.id);
    setLeaderBoard(newdel);
  };


  return (
    <>
      <h1>Leaderboard</h1>

      <form action="" onSubmit={submitted}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="South Africa">South Africa</option>
          <option value="west indies">West Indies</option>
          <option value="England">England</option>
        </select>
        <input
          type="text"
          placeholder="Enter Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Add Record</button>
      </form>
      <div id="leaderboard">
        {myleaderboard.map((record) => {
          return (
            <div key={record.id}>
              <p>{record.fname  +" " + record.lname}</p>
              <p>{record.country}</p>
              <p>{record.score}</p>
              <p>
                <p onClick={() => scoreadd(record)}>+5</p>
                <p onClick={() => scoresubtract(record)}>-5</p>
                <button  onClick={()=> del}>Remove</button>
              </p>
            </div>
          );  
        })}
        
      </div>
    </>
  );
}
export default Leaderboard