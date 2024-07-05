import ChartBox from "@/component/dashboard/box/ChartBox";
import TopBox from "@/component/dashboard/box/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "@/component/dashboard/data";
import Menu from "@/component/dashboard/menu";
import Navbar from "@/component/dashboard/navbar";
import PieChartBox from "@/component/dashboard/box/pichart";
import BigChartBox from "@/component/dashboard/box/BigChartBox";
// import BarChartBox from "@/component/dashboard/box/BarChartBox";
import Footer from "@/component/dashboard/footer";
// import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import ProtectedPage from "@/Authentication/protected-page";

import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import { base_url } from "@/util/baseUrl";
import axios from "axios";


const Layout = () => {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]

    const jwtSecret = 'your-secret-key';
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const fetchArticle = async () => {

            
            let id;
            if (typeof window !== 'undefined') {
                id = JSON.parse(localStorage.getItem("user"));

            }
            const token = id.token
            // console.log(token)

            const decoded = jwtDecode(token, jwtSecret);
            const uid = decoded.uid
            try {
                axios.get(`${base_url}user/statdata/${uid}`, 
                     
                ).then((Response) => {
             
                 
                    setUserData(Response.data.data)
                   
                });
              } catch (error) {
                throw new Error('No user data found');
              }
           
        //     const usersCollection = query(collection(db, "vpn_stats"), where("uid", "==", uid));
        //     const querySnapshot = await getDocs(usersCollection);
           
        //     const array = querySnapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         ...doc.data(),
        //     }))
        //     let sumKey1 = 0;
        //     let sumKey2 = 0;

            
        //     let data = null;
        // if (!querySnapshot.empty) {
           
        //     array.forEach(obj => {
        //         sumKey1 +=  Math.floor(obj.totaldownload);
        //         sumKey2 +=  Math.floor(obj.totalupload);
        //     });
        //     // console.log(sumKey1 , sumKey2)

        //     const userData = querySnapshot.docs[0].data();
        //     data = {
        //         "downloaddata": sumKey1,
        //         "reciveddata": sumKey2,
        //         "totaldata": sumKey1 + sumKey2,
        //     };
        // }


           

        };

        fetchArticle();

    }, []);



    const totaldata = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Packets ",
        number: userData ? userData.totaldata : 0,
        dataKey: "data",
    };
    const reciveddata = {
        color: "skyblue",
        icon: "/productIcon.svg",
        title: "Packets Recived",
        number: userData ? userData.downloaddata : 0,
        dataKey: "products",
    };
    const sentdata = {
        color: "gold",
        icon: "/conversionIcon.svg",
        title: "Packets sent",
        number: userData ?  userData.reciveddata : 0,
        dataKey: "ratio",
    };

    console.log(sentdata)


    return (
        <>
            {user[0] === null ? <ProtectedPage /> : <>
           

                <div className="main">
                    <Navbar />
                    <div className="container2">
                        <div className="menuContainer">
                            <Menu />
                        </div>

                        <div className="contentContainer">
                            <div className="home">
                                <div className="box box1">

                                    <TopBox />
                                </div>
                                <div className="box box2">
                                    {userData === null ? <><div className="center_loader" ><div className="loader"></div></div></> : <>

                                        <ChartBox {...totaldata} />
                                    </>}
                                </div>
                                <div className="box box4">
                                    <PieChartBox />
                                </div>
                                <div className="box box7">
                                    <BigChartBox />
                                </div>
                                <div className="box box3">
                                    {userData === null ? <><div className="center_loader" ><div className="loader"></div></div></> : <>
                                        <ChartBox {...reciveddata} />
                                    </>}
                                </div>

                                <div className="box box5">
                                    {userData === null ? <><div className="center_loader" ><div className="loader"></div></div></> : <>
                                        <ChartBox {...sentdata} />
                                    </>}
                                </div>
                               

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>}
        </>
    );
};

export default Layout