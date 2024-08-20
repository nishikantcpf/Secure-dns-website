import Menu from "@/component/dashboard/menu";
import Navbar from "@/component/dashboard/navbar";
import Footer from "@/component/dashboard/footer";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import ProtectedPage from "@/Authentication/protected-page";



const Traffics = () => {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]

   

    return (
        <>
            {user[0] === null ? <ProtectedPage /> : <>

                <div className="main">
                    <Navbar />
                    <div className="container2">
                        <div className="menuContainer">
                            <Menu />
                        </div>
                        {/* {userData === null ? <></> : <> */}
                        <div className="contentContainer" style={{ borderRadius: '20px'}}>
                            <div style={{ backgroundColor: "white", borderRadius: '20px', padding: '20px' }}>
                                <div className="myTable" style={{ height: 550, width: "100%" }}>
                                    {/* <DataGrid
                                            rows={userData}
                                            columns={columns}
                                            hideScrollbar={true}
                               

                                        /> */}
                                    <div class="container">
                                        
                                       
                                        <table class="table" style={{paddingTop:"20px"}}>
                                            <thead>
                                                <tr>
                                                    <th>Unique Domain</th>
                                                    <th>Status</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td >sb.scorecardresearch.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>www.googletagmanager.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>

                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>tunnel.googlezip.net</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>encrypted-tbn2.gstatic.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>www-bikedekho-com.cdn.ampproject.org</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>connect.facebook.net</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>www.bikewale.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>www.gstatic.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#dff0d8" }}>
                                                    <td>www.youtube.com</td>
                                                    <td style={{ color: "green" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                
                                                <tr style={{ backgroundColor: "#f2dede" }}>
                                                    <td>downloadfilmyzilla.com</td>
                                                    <td style={{ color: "red" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#f2dede" }}>
                                                    <td>probiv.in</td>
                                                    <td style={{ color: "red" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#f2dede" }}>
                                                    <td>offerintro.com</td>
                                                    <td style={{ color: "red" }}><i class="fa fa-circle" aria-hidden="true"></i></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>


                            </div>
                            {/* <h1>{userData[0].time_stamp.toDate().toLocaleString()}</h1> */}
                        </div>
                        {/* </>} */}
                    </div>
                    <Footer />
                </div>
            </>}
        </>
    );
};

export default Traffics