import ProtectedPage from "@/Authentication/protected-page"
import Anavbar from "@/component/admin/anavbar"
import Footer from "@/component/footer"
import { AuthContext } from "@/context/AuthContext"
import Head from "next/head"
import { useRouter } from "next/router"
import Script from "next/script"
import React, { useContext } from "react"

const Dashboard = () => {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]
    const router = useRouter()
    console.log(currentUser)
    return (

        <>
       {user[0] === null?<ProtectedPage />:<>
            <Head>
                <meta charset="utf-8" />
                <meta name="author" content="Secure Dns" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Cyberpeace Secure Dns</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Anavbar/>
                            {/* <nav className="main-nav">
                             
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>
                               
                                <ul className="nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="explore.html">Explore</a></li>
                                    <li><a href="details.html">Item Details</a></li>
                                    <li><a href="author.html">Author</a></li>
                                    <li><a href="create.html">Create Yours</a></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                               
                            </nav> */}
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            {/* <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6>Dashboard</h6>
                            <h2>Dashboard</h2>
                            <span>Home  . <a href="#">Author</a></span>
                            <div className="buttons">
                                <div className="main-button">
                                    <a href="explore.html">Explore Our Items</a>
                                </div>
                                <div className="border-button">
                                    <a href="create.html">Create Your NFT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="author-page normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 " >
                            <div className="author" style={{justifyContent: "center"}}>
                                <img src="img/profile.png" alt="" style={{ borderRadius: "50%", maxWidth: " 170px" }} />
                                <h4>Welcome to Dashboard <br /> 
                                {/* <a href="#">Name:nishikant</a><br /> <a href="#"> Email:nishikant</a><br /> <a href="#">Mobile number:nishikant</a> */}
                                </h4>
                            </div>
                        </div>
                        {/* <div className="col-lg-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h2>Profile <em>Details </em></h2>
                            
                            </div>
                        </div> */}
                        <div className="col-lg-12" >
                            <div className="right-info " style={{marginTop:'100px'}} >
                                <div className="mb-2">
                                <h2>Your Gateway to Safe and Reliable Browsing</h2>
                                </div>
                           <p> At CyberPeace Secure DNS, we prioritize your online security and privacy. Our cutting-edge Domain Name System (DNS) services ensure a safer and more secure internet experience for you. Whether you're a casual internet user or a business professional, our CyberPeace Secure DNS service is designed to provide fast, reliable, and private domain resolution.
</p> 
                            {/* <div className="row" style={{justifyContent: "center"}} >
                                   
                                    <div className="col-6" >
                                        <div className="info-item">
                                            <i className="fa fa-hand"></i>
                                            <h6>Name <em>Nishikant</em></h6>
                                       
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="info-item">
                                            <i className="fa fa-dollar"></i>
                                            <h6>Name <em>Nishikantt</em></h6>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* <div className="row">
                                    <div className="col-2">
                                        <h5>559 Followers</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="main-button">
                                            <a href="#">Follow @melanie32</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="author">
                                            <img src="assets/images/author.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                                        </span>
                                        <img src="assets/images/discover-03.jpg" alt="" style={{ borderRadius: "20px" }} />
                                        <h4>Mutant Ape Bored</h4>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="line-dec"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                                            </div>
                                            <div className="col-6">
                                                <span>Ends In: <br /> <strong>25th Nov</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="author">
                                            <img src="assets/images/author-02.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                                        </span>
                                        <img src="assets/images/discover-06.jpg" alt="" style={{ borderRadius: "20px" }} />
                                        <h4>Mutant Ape Bored</h4>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="line-dec"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                                            </div>
                                            <div className="col-6">
                                                <span>Ends In: <br /> <strong>25th Nov</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="author">
                                            <img src="assets/images/author.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                                        </span>
                                        <img src="assets/images/discover-05.jpg" alt="" style={{ borderRadius: "20px" }} />
                                        <h4>Mutant Ape Bored</h4>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="line-dec"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                                            </div>
                                            <div className="col-6">
                                                <span>Ends In: <br /> <strong>25th Nov</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="author">
                                            <img src="assets/images/author-03.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                                        </span>
                                        <img src="assets/images/discover-04.jpg" alt="" style={{ borderRadius: "20px" }} />
                                        <h4>Mutant Ape Bored</h4>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="line-dec"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                                            </div>
                                            <div className="col-6">
                                                <span>Ends In: <br /> <strong>25th Nov</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="create-nft">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h2>Create Your NFT & Put It On The Market.</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-button">
                                <a href="create.html">Create Your NFT Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item first-item">
                                <div className="number">
                                    <h6>1</h6>
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icon-02.png" alt="" />
                                </div>
                                <h4>Set Up Your Wallet</h4>
                                <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item second-item">
                                <div className="number">
                                    <h6>2</h6>
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icon-04.png" alt="" />
                                </div>
                                <h4>Add Your Digital NFT</h4>
                                <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="icon">
                                    <img src="assets/images/icon-06.png" alt="" />
                                </div>
                                <h4>Sell Your NFT &amp; Make Profit</h4>
                                <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer></Footer>

            {/* <!-- Scripts --> */}
            {/* <!-- Bootstrap core JavaScript --> */}
            <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
            <Script src="/vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />

            <Script src="/assets/js/isotope.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/owl-carousel.js" strategy="beforeInteractive" />

            <Script src="/assets/js/tabs.js" strategy="beforeInteractive" />
            <Script src="/assets/js/popup.js" strategy="beforeInteractive" />
            <Script src="/assets/js/custom.js" strategy="beforeInteractive" />
</> }
        </>
    )
}

export default Dashboard