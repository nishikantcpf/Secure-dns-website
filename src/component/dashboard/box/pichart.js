import { db } from "@/firebase/firebase";
import { base_url } from "@/util/baseUrl";
import { collection, getDocs, query, where } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import axios from "axios"

const PieChartBox = () => {
  const jwtSecret = process.env.JWT_SECRET;
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchArticle = async () => {

      // find token
      let id;
      if (typeof window !== 'undefined') {
        id = JSON.parse(localStorage.getItem("user"));

      }
      const token = id.token

      // decode token
      const decoded = jwtDecode(token, jwtSecret);
      const uid = decoded.uid

      // write query for data
      try {

        axios.get(`${base_url}user/device/${uid}`, 
       
        ).then((Response) => {
          
        
          // console.log(Response.data)

       

          const data = [
            { name: "Android", value: Response.data.andriodcount, color: "#0088FE" },
            { name: "Windows", value: Response.data.windowscount, color: "#00C49F" },
            { name: "ios", value: Response.data.ioscount, color: "#FFBB28" },
            { name: "others", value: 0, color: "#FF8042" },
    
          ];
          
          
          setUserData(data);
          
        });


      } catch (error) {
      
      }
     

    };

    fetchArticle();

  }, []);
  // console.log(userData)
  return (
    <div className="pieChartBox">
      <h2>Device used</h2>

      {userData === null ? <><div className="center_loader" style={{ height: '100%' }}><div className="loader"></div></div></> : <>
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>

              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={userData}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {userData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}

              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {userData.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </>}
    </div>
  );
};

export default PieChartBox;
