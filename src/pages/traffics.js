import Menu from "@/component/dashboard/menu";
import Navbar from "@/component/dashboard/navbar";
import Footer from "@/component/dashboard/footer";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import ProtectedPage from "@/Authentication/protected-page";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import styles from '../styles/style.module.css';
import { base_url } from "@/util/baseUrl";
import axios from "axios";

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

            try {
             axios.get(`${base_url}user/checkDomains/${uid}`).then((Response) => {
             
                 console.log(Response.data)
                    setUserData(Response.data)
                   
                });
              } catch (error) {
                throw new Error("error");
              }
         

          

        };

        fetchArticle();
        console.log() 
    }, [id]);

     

    
    const columns = [
        { field: 'id', headerName: '', width: 100 ,align: 'center',
        //     cellStyle: {
        //     marginRight: 20, 
        //     paddingLeft: 200, 
        //     textAlign:'center',
        //   },
        },
        { field: 'domain', headerName: 'Domain', width: 700 },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
            renderCell: (params) => (
                <i
                    className={`fa fa-circle ${styles['status-icon']} ${
                        params.value === 'valid' ? styles.green : styles.red
                    }`}
                    aria-hidden="true"
                ></i>
            ),
        },
        {field:'timestamp', headerName:'Time',  
        valueFormatter: (params) => 
            moment.utc(params.value).format('MMMM Do YYYY, h:mm:ss a')
        // moment(params.value).startOf('day').fromNow()
        
         , 
        width: 300,},
    ];

    // add id to add data 
   const userdata1=  userData?.map((item, index) => ({
        ...item,
        id: index + 1 // You can start from 1 or 0, depending on your preference
      }));
    const rows = userdata1
    // const rows = [
    //     { id: 1, domain: 'sb.scorecardresearch.com', status: 'active' },
    //     { id: 2, domain: 'www.googletagmanager.com', status: 'active' },
    //     { id: 3, domain: 'tunnel.googlezip.net', status: 'active' },
    //     { id: 4, domain: 'encrypted-tbn2.gstatic.com', status: 'active' },
    //     { id: 5, domain: 'www-bikedekho-com.cdn.ampproject.org', status: 'active' },
    //     { id: 6, domain: 'connect.facebook.net', status: 'active' },
    //     { id: 7, domain: 'www.bikewale.com', status: 'active' },
    //     { id: 8, domain: 'www.gstatic.com', status: 'active' },
    //     { id: 9, domain: 'www.youtube.com', status: 'active' },
    //     { id: 10, domain: 'downloadfilmyzilla.com', status: 'inactive' },
    //     { id: 11, domain: 'probiv.in', status: 'inactive' },
    //     { id: 12, domain: 'offerintro.com', status: 'inactive' },
        
    //     // Add more rows as needed
    // ];
    

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
                                <div style={{ 
                                    // backgroundColor: "#FFFFFF",
                                     borderRadius: '20px', padding: '20px' }}>
                                    <div className="myTable" style={{ height: 600, width: "100%",backgroundColor:"#ffffff",borderRadius:"30px" }}>
                                        
                                        <DataGrid
                                            // rows={userData}
                                            rows={rows}
                                            columns={columns}
                                            hideScrollbar={true}
                                            getRowClassName={(params) => {
                                                return params.row.status === 'valid' ? styles['active-row'] : styles['inactive-row'];
                                            }}
                                          
                                            hideFooterSelectedRowCount={true}
                                            // showCellVerticalBorder={true}
                                            // columnHeaderFilterIconButton
                                            // autoPageSize={true}
                                            sx={{
                                                border: '1px solid transparent', // change the color to your desired color
                                              }}
                                      
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