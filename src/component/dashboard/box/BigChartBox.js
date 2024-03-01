import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
//   import "./bigChartBox.scss";
  
  const data = [
    {
      name: "Android",
      Recived: 4000,
      Send: 2400,
      Total: 2400,
    },
    {
      name: "Windos",
      Recived: 3000,
      Send: 1398,
      Total: 2210,
    },
    {
      name: "ios",
      Recived: 2000,
      Send: 9800,
      Total: 2290,
    },
    {
      name: "Others",
      Recived: 2780,
      Send: 3908,
      Total: 2000,
    },
    // {
    //   name: "Thu",
    //   books: 1890,
    //   Send: 4800,
    //   Total: 2181,
    // },
    // {
    //   name: "Fri",
    //   books: 2390,
    //   Send: 3800,
    //   Total: 2500,
    // },
    // {
    //   name: "Sat",
    //   books: 3490,
    //   Send: 4300,
    //   Total: 2100,
    // },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h2>Data Analytics</h2>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="Send"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="Recived"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;
  