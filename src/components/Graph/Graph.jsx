import React from "react";
import CardinalAreaChart from "../GraphComponent/CardinalAreaChart";
import "./Graph.css";

const Graph = () => {
  return (
    <section className="graphSection">
      <ul className="graphNavigation">
        <li className="active">Day</li>
        <li>Week</li>
        <li>Month</li>
        <li>Year</li>
      </ul>
      <div className="graphWrapper">
        <div className="lowandhigh">
            <div className="point"><span>Lower:</span><span>$4.895</span></div>
            <div className="point green"><span>Higher:</span><span>$6.857</span></div>
        </div>
        <div>
         <CardinalAreaChart/>
        </div>
      </div>
    </section>
  );
};

export default Graph;
