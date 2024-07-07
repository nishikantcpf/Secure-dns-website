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
import { jwtDecode } from "jwt-decode";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";


const Traffics = () => {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]

    const jwtSecret = 'your-secret-key';
    const [userData, setUserData] = useState(null);

    let id;
    useEffect(() => {
        const fetchArticle = async () => {



            if (typeof window !== 'undefined') {
                id = JSON.parse(localStorage.getItem("user"));

            }
            const token = id ? id.token : null


            const decoded = jwtDecode(token, jwtSecret);
            const uid = decoded.uid


            const usersCollection = query(collection(db, "traffic_log"), where("uid", "==", uid));
            const querySnapshot = await getDocs(usersCollection);

            const array = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))


            setUserData(array)

        };

        fetchArticle();

    }, [id]);



    console.log(userData)
    const columns = [
        {
            field: 'time_stamp', headerName: 'Time', width: 150,
            valueFormatter: params => params?.value ? moment(params?.value.toDate()).format("DD/MM/YYYY hh:mm") : "",
        },
        { field: 'isBlocked', headerName: 'Blocked', width: 130 },
        { field: 'domain', headerName: 'Domain', width: 500, editable: true },
    ];
    const rowClassName = (params) => {
        return params.id % 2 === 0 ? 'even-row' : 'odd-row';
    };

    return (
        <>
            {user[0] === null ? <ProtectedPage /> : <>

                <div className="main">
                    <Navbar />
                    <div className="container2">
                        <div className="menuContainer">
                            <Menu />
                        </div>
                        {userData === null ? <></> : <>
                            <div className="contentContainer" style={{ borderRadius: '20px', }}>
                                <div style={{ backgroundColor: "#EADEDA", borderRadius: '20px', padding: '20px' }}>
                                    <div className="myTable" style={{ height: 600, width: "100%" }}>
                                        <DataGrid
                                            rows={userData}
                                            columns={columns}
                                            hideScrollbar={true}
                               

                                        />
                                      

                                    </div>


                                </div>
                                {/* <h1>{userData[0].time_stamp.toDate().toLocaleString()}</h1> */}
                            </div>
                        </>}
                    </div>
                    <Footer />
                </div>
            </>}
        </>
    );
};

export default Traffics