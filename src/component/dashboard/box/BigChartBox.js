import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const data = [
  {
    name: "Current Month",
    Recived: 4000,
    Send: 2400,

  },
  {
    name: "Last Month",
    Recived: 3000,
    Send: 1398,

  },

];

const BigChartBox = () => {
  const jwtSecret = 'your-secret-key';
  const [userData, setUserData] = useState(null);
  const [userData2, setUserData2] = useState(null);


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


      // Get the current date
      const currentDate = new Date();

      // Get the current month's start date (1st day of the current month)
      const currentMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

      // Get the current month's end date (last day of the current month)
      const currentMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      // Get the previous month's start date (1st day of the previous month)
      const previousMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);

      // Get the previous month's end date (last day of the previous month)
      const previousMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);



      // write query for data
      const currentMonth = query(
        collection(db, "vpn_stats"),
        where("uid", "==", uid),
        where("timestamp", ">=", currentMonthStartDate),
        where("timestamp", "<=", currentMonthEndDate)
      );
      const previousMonth = query(
        collection(db, "vpn_stats"),
        where("uid", "==", uid),
        where("timestamp", ">=", previousMonthStartDate),
        where("timestamp", "<=", previousMonthEndDate)
      );



      const querySnapshot = await getDocs(currentMonth);
      const querySnapshot2 = await getDocs(previousMonth);

      const array1 = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      const array2 = querySnapshot2.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      let sumKey1 = 0;
      let sumKey2 = 0;
      let sumKey3 = 0;
      let sumKey4 = 0;


      let data = null;
      let data2 = null;
      if (!querySnapshot.empty) {
        // Iterate over each object in the array
        array1.forEach(obj => {
          sumKey1 += Math.floor(obj.totaldownload);
          sumKey2 += Math.floor(obj.totalupload);
        });
       
        data = {
          'name': "Current Month",
          'Recived':Math.floor(sumKey1/1000) ,
          'Send':Math.floor(sumKey2/1000),
         
        };
      }
      if (!querySnapshot2.empty) {
        // Iterate over each object in the array
        array2.forEach(obj => {
          sumKey3 += Math.floor(obj.totaldownload);
          sumKey4 += Math.floor(obj.totalupload);
        });
        
        data2 = {
          'name': "Last Month",
          'Recived': Math.floor(sumKey3/1000) ,
          'Send': Math.floor(sumKey4/1000) ,
         
        };
        
      }

      setUserData(data)
      setUserData2(data2)

    };

    fetchArticle();

  }, []);
  

  const newdata = [userData2,userData]


  return (
    <div className="bigChartBox">
      <h2>Usage Analytics</h2>
     {userData===null ? 
     <>
    <div className="center_loader" style={{height: '100%'}}><div className="loader"></div></div>
     </>
     :
     <>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={newdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend />
            <Bar dataKey="Recived" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="Send" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>

      </div>
     </>}
    </div>
  );
};

export default BigChartBox;
