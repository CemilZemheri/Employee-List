import React from "react";
import data from "./helper/data";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const prevPage = () => {
    setStartIndex((startIndex) => Math.max(startIndex - 5, 0));
  };
  const nextPage = () => {
    if (startIndex <= 14) {
      setStartIndex((startIndex) => Math.min(startIndex + 5, data.length - 1));
    }
  };

  return (
   
      <div className="container">
        <div className="main">
          <h3>EMPLOYEE LIST</h3>
          <h5>
            <span>(Employee {startIndex + 1}</span> to{" "}
            <span> {startIndex + 5}</span>)
          </h5>
        </div>
        <List data={data} startIndex={startIndex} />
        <div className="btns">
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    
  );
}

export default App;
