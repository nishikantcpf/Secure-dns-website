// import { Link } from "react-router-dom";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

// type Props = {
//   color: string;
//   icon: string;
//   title: string;
//   dataKey: string;
//   number: number | string;
//   percentage: number;
//   chartData: object[];
// };

const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
      <center>  <h2 >{props.number} </h2></center>
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
          <span className="duration">this month</span>
        </div>
      </div> */}
    </div>
  );
};

export default ChartBox;
