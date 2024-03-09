import { db } from "@/firebase/firebase";
import { collection,  getDocs, query, where } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import "./pieChartBox.scss";

// const data = [
//   { name: "Android", value: 20, color: "#0088FE" },
//   { name: "Windows", value: 10, color: "#00C49F" },
//   { name: "ios", value: 3, color: "#FFBB28" },
//   { name: "others", value: 0, color: "#FF8042" },

// ];

const PieChartBox = () => {
  const jwtSecret = 'your-secret-key';
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
      const usersCollection = query(collection(db, "conf_log"), where("uid", "==", uid),where("device", "==", 'android'));
      const querySnapshot = await getDocs(usersCollection);
      const usersCollection2 = query(collection(db, "conf_log"), where("uid", "==", uid),where("device", "==", 'ios'));
      const querySnapshot2 = await getDocs(usersCollection2);
      const usersCollection3 = query(collection(db, "conf_log"), where("uid", "==", uid),where("device", "==", 'windows'));
      const querySnapshot3 = await getDocs(usersCollection3);
  //  console.log(querySnapshot)
      // const usersData = querySnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }));
      // const data1 = usersData[0]
      // console.log[data1]

  //  console.log(querySnapshot.size,querySnapshot2.size,querySnapshot3.size)
   const data = [
    { name: "Android", value: querySnapshot.size, color: "#0088FE" },
    { name: "Windows", value: querySnapshot2.size, color: "#00C49F" },
    { name: "ios", value: querySnapshot3.size, color: "#FFBB28" },
    { name: "others", value: 0, color: "#FF8042" },
  
  ];
      setUserData(data)

    };

    fetchArticle();

  }, []);
    // console.log(userData)
  return (
    <div className="pieChartBox">
      <h2>Device used</h2>

      {userData === null ? <><div className="center_loader" style={{height: '100%'}}><div className="loader"></div></div></> : <>
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
