
import { useRouter } from "next/router"
import { topDealUsers } from "../data"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { useField } from "formik"
import axios from "axios"
import { base_url } from "@/util/baseUrl"
import Jwt from "jsonwebtoken"
import { jwtDecode } from "jwt-decode"



const TopBox = () => {

  // const jwtSecret = 'your-secret-key';
  const jwtSecret = process.env.JWT_SECRET
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
    
      try {
      
        axios.get(`${base_url}user/userdetail/${uid}`, 
       
        ).then((Response) => {
          
          setUserData(Response.data.userData);

        });


      } catch (error) {
        throw new Error('No user data found');
      }

    };

    fetchArticle();

  }, []);




 
  return (
    <div className="topBox">
      <h2>User Details</h2>
      {userData === null ? <><div className="center_loader" ><div className="loader"></div></div></> : <>


        <div className="list">

          <div className="listItem" >
            <div className="user">
              <img src='/img/profile.png' alt="" />
              <div className="userTexts">
                <span className="username">{userData.firstname} {userData.lastname}</span>
                <span className="email">{userData.email}</span>
              </div>
            </div>
            <span className="amount">{userData.mobile}</span>

          </div>

        </div>
      </>}
    </div>
  )
}

export default TopBox