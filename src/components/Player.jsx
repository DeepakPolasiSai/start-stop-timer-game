import { useState,useRef } from "react";

export default function Player() {
  let playername=useRef();
  let [displayname, setdisplayname] = useState("unknown entity");
  function displaynamechange(){
    setdisplayname(playername.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {displayname}</h2>
      <p>
        <input type="text" ref={playername}/>
        <button onClick={displaynamechange}>Set Name</button>
      </p>
    </section>
   
  );
}
