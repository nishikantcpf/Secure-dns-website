import ChartBox from "@/component/dashboard/box/ChartBox";
import TopBox from "@/component/dashboard/box/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "@/component/dashboard/data";
import Menu from "@/component/dashboard/menu";
import Navbar from "@/component/dashboard/navbar";
import PieChartBox from "@/component/dashboard/box/pichart";
import BigChartBox from "@/component/dashboard/box/BigChartBox";
import BarChartBox from "@/component/dashboard/box/BarChartBox";
import Footer from "@/component/dashboard/footer";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import ProtectedPage from "@/Authentication/protected-page";
import axios from "axios";
import { base_url } from "@/util/baseUrl";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const Layout = () => {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]
    const router = useRouter()
    console.log(currentUser)
    let userid;
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    async function fetchData() {
        try {
            if (user[0] === null) {
                console.log("no user");
            } else {
                const token = user[0].token;
                const response = await axios.get(base_url + 'user/protected-route', {
                    headers: { Authorization: token }
                });
                userid = response.data.user.uid;
                // console.log(userid);
                
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            window.localStorage.clear();
            window.location.reload();
        }
    }

    // useEffect(() => {
    //     fetchData();
    //     console.log(userid);

    // }, [])
   
    
   
        const fetchUser = async () => {
            await fetchData()
            const usersCollection = collection(db, "users"); // Assuming "users" is the collection name
            // console.log(userid);
            // Define the query to search by name
            const name = userid; // Replace with the name you want to search for
            const nameQuery = query(usersCollection, where("uid", "==", name));

            // Get all documents in the collection
            const querySnapshot = await getDocs(nameQuery);

            // Iterate over each document in the collection
            // Iterate over each document in the query results
            querySnapshot.forEach((doc) => {
                // doc.data() is an object containing the document data
                // console.log( doc.data());
               const newfirstname =  doc.data().firstname
               const newlastname =  doc.data().lastname
               setFirstname(newfirstname);
               setLastname(newlastname)
          
                
            });


        }
        fetchUser();
    



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
                                    <h1> {firstname+" "+lastname}</h1>
                                    <TopBox />
                                </div>
                                <div className="box box2">
                                    <ChartBox {...chartBoxUser} />
                                </div>
                                <div className="box box4">
                                    <PieChartBox />
                                </div>
                                <div className="box box7">
                                    <BigChartBox />
                                </div>
                                <div className="box box3">
                                    <ChartBox {...chartBoxProduct} />
                                </div>

                                <div className="box box5">
                                    <ChartBox {...chartBoxConversion} />
                                </div>
                                {/* <div className="box box6">
                            <ChartBox {...chartBoxRevenue} />
                        </div>
                        
                        <div className="box box8">
                            <BarChartBox {...barChartBoxVisit} />
                        </div>
                        <div className="box box9">
                            <BarChartBox {...barChartBoxRevenue} />
                        </div> */}

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