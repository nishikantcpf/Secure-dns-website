// import { Link } from "react-router-dom";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
      <center>  <h2 className="size">{Math.floor(props.number/1000) } </h2> <span className="duration">In Thousands</span></center>
        {/* <a href="/" style={{ color: props.color }}>
          View all
        </a> */}
        
      </div>
      {/* <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}MB
          </span>
          <span className="duration">In Thousands</span>
        </div>
      </div> */}
    </div>
  );
};

export default ChartBox;
