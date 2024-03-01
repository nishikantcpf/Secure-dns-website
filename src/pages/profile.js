import ChartBox from "@/component/dashboard/box/ChartBox";
import TopBox from "@/component/dashboard/box/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "@/component/dashboard/data";
import Menu from "@/component/dashboard/menu";
import Navbar from "@/component/dashboard/navbar";
import PieChartBox from "@/component/dashboard/box/pichart";
import BigChartBox from "@/component/dashboard/box/BigChartBox";
import BarChartBox from "@/component/dashboard/box/BarChartBox";
import Footer from "@/component/dashboard/footer";
import Single from "@/component/dashboard/single";
import { singleUser } from "../component/dashboard/data"

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="container2">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                    <div className="user">
                        <Single {...singleUser} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout