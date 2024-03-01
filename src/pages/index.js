import Navbar from '@/component/navbar'
import { base_url } from '@/util/baseUrl'
import axios from 'axios'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'
// import ProtectedPage from '@/Authentication/protected-page'
import { Field, Form, Formik, useFormik } from 'formik'
// import "@lottiefiles/lottie-player";
import Script from 'next/script'
// import { NextApiRequest, NextApiResponse } from 'next';
// import WGEasyWrapper from 'wg-easy-wrapper';
const WGEasyWrapper = require('wg-easy-wrapper');
import image from "../../public/img/background5.jpg"
import Footer from '@/component/footer'

export default function Home() {
  const { currentUser } = useContext(AuthContext)
  const user = [currentUser]
  const router = useRouter()

  const [isVpnon, setIsVpnon] = useState("")
  // console.log(isVpnon)

  const formik = useFormik({
    initialValues: {


      vpn_status: false,

    },
    // validationSchema: schema,
    onSubmit: async (values) => {
      // console.log(values.vpn_status)
      setIsVpnon(values.vpn_status);

      if (values.vpn_status === true) {
        const response = await axios.post(`${base_url}user/wireguardapi`);
        console.log(response.data.config1)

        // start new 

        const serverConfContent = `[Interface]\nAddress = ${response.data.config1.wgInterface.address[0]}\n\nPrivateKey = ${response.data.config1.wgInterface.privateKey}\n\n[Peer]\nPublicKey = ${response.data.config1.peers[0].publicKey}\nEndpoint = ${response.data.config1.peers[0].endpoint}\nPersistentKeepalive = ${response.data.config1.peers[0].persistentKeepalive}\nAllowedIPs = ${response.data.config1.peers[0].allowedIps[0]}\nPresharedKey = ${response.data.config1.preSharedKey}`;

        // Create a blob and temporary URL
        const blob = new Blob([serverConfContent], { type: 'text/plain' });
        const downloadUrl = window.URL.createObjectURL(blob);

        // Create hidden anchor element and trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.download = 'server.conf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Revoke the temporary URL after download
        window.URL.revokeObjectURL(downloadUrl);
      }
      else {

        console.log("off")
      }

    },
  });


  const handleCheckboxChange = () => {
    // Ma the form submissionually triggern when the checkbox changes
    formik.handleSubmit();
  };
  const handleclick = async () => {
    const wgEasy = new WGEasyWrapper('https://localhost:3000', 'sfrwerfwe');
    await wgEasy.create('newClient');

    console.log(await wgEasy.getRelease())
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        
        <meta name="author" content="Secure Dns" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Cyberpeace Secure Dns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ProtectedPage ></ProtectedPage> */}

      {/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div> */}
      {/* <!-- ***** Preloader End ***** --> */}



      <Navbar />
      {/* <!-- ***** Header Area End ***** --> */}

      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                {/* <h6>Welcome</h6> */}
                <h2>Your Shield Against Cyber Threats</h2>
                <p>CyberPeace Secure DNS is a secure, cutting-edge Domain Name System (DNS) infrastructure designed to prevent cyber threats and protect against attacks such as phishing, malware distribution, and ransomware with the aim of DNS resolution based threat investigation and monitoring, keeping the security as first priority in mind to provide a real time DNS based secure Cyberspace.</p>
                <div className="buttons">
                  {/* <div className="border-button">
                <a href="explore.html">Explore Top NFTs</a>
              </div> */}
                  {/* <div className="main-button">
                    <a href='#download' style={{ textDecoration: 'none' }} >Download</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              {/* <div className="owl-banner owl-carousel"> */}
              {/* <div className="item">
              <img src="assets/images/banner-01.png" alt="" />
            </div> */}
              <div className="item">
                <img src="assets/images/banner-02.png" alt="" style={{width: '100%'}}/>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area End ***** --> */}



      <div className="create-nft " id='about' >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec first-item"></div>
                <h2>About us</h2>
                <p>CyberPeace Secure DNS Team is composed of seasoned experts in the field of cybersecurity and network infrastructure. With a collective passion for technological innovation and a commitment to safeguarding digital assets, we strive to empower our users with the tools they need to navigate the digital landscape securely.</p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="item first-item">
                {/* <div className="number">
              <h6>1</h6>
            </div> */}
                {/* <div className="icon">
              <img src="assets/images/icon-02.png" alt=""/>
            </div> */}
                <h2> Our Mission</h2>
                <p>Our mission is to elevate the standards of digital security by offering state-of-the-art DNS services. We aim to provide a unified solution towards peaceful cyberspace against a wide range of threats, ransomware, phishing, and malware attacks, by utilizing cutting-edge technologies with AI-powered real-time threat intelligence. We are committed to combat against illegal distribution of non-prescribed drugs and CSAM and to ensure the safety and security of our clients' networks and data.</p>
              </div>
            </div>
            <span style={{ height: '50px' }}></span>
            {/* <div className="col-lg-6">
              <div className="item second-item ">
                <div className="number">
           
                </div>
                <div className="icon">
                  <img src="assets/images/icon-04.png" alt="" />
                </div>
                <h4>About us</h4>
                <p>CyberPeace Secure DNS Team is composed of seasoned experts in the field of cybersecurity and network infrastructure. With a collective passion for technological innovation and a commitment to safeguarding digital assets, we strive to empower our users with the tools they need to navigate the digital landscape securely.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item second-item">
                <div className="icon">
                  
                  <img src="assets/images/icon-06.png" alt="" />
                </div>
                <h4> Our Mission</h4>
                <p>Our mission is to elevate the standards of digital security by offering state-of-the-art DNS services. We aim to provide a unified solution towards peaceful cyberspace against a wide range of threats, ransomware, phishing, and malware attacks, by utilizing cutting-edge technologies with AI-powered real-time threat intelligence. We are committed to combat against illegal distribution of non-prescribed drugs and CSAM and to ensure the safety and security of our clients' networks and data.</p>
             </div>
            </div> */}
  <div className="col-lg-6" >
              <div className="item  ">
                <div className="number">

                </div>

                <img src='/img/feature.jpg' alt='feature' height='350px' style={{ borderRadius: '20px',width: '100%' }}></img>

              </div>
            </div>
            <div className="col-lg-6" style={{paddingLeft:'50px',textAlign:'left'}}>
              <div className="item second-item "style={{textAlign:'left'}} >
                <div className="number">

                </div>

                <h2>Features</h2>
                <ui className='feature mt-2'  >
                  <li > DNSSEC Enabled </li>
                  <li> Malicious url and Phishing Protection</li>
                  <li> Ransomware mitigation</li>
                  <li> Encrypted DNS Queries 
                    {/* - DoT, DoH, DNS Crypt */}
                    </li>
                  <li> NX-Domain redirect</li>
                  <li> DDoS Protection</li>
                  <li> Preventing Illegal Distribution of Non-Prescribed Drugs</li>
                  <li> Combatting CSAM & Incitements to Violence Prevention</li>
                  <li> Real-time Threat Intelligence Powered by AI</li>


                </ui>
              </div>
            </div>
          


          </div>
        </div>
      </div>
      <div className="categories-collections" id='download'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h2> Download your   <em>app.</em> </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src="assets/images/icon-10.png" alt="" />
                      </div>
                      <h4>For Windows</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src="assets/images/icon-13.png" alt="" />
                      </div>
                      <h4>For Android app</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="item">
                      <div className="icon">
                        <img src="assets/images/icon-12.png" alt="" />
                      </div>
                      <h4>For ios app</h4>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-2 col-sm-6">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon-04.png" alt="" />
                  </div>
                  <h4>Virtual World</h4>
                  <div className="icon-button">
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div> */}
                  {/* <div className="col-lg-2 col-sm-6">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon-05.png" alt="" />
                  </div>
                  <h4>Valuable</h4>
                  <div className="icon-button">
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div> */}
                  {/* <div className="col-lg-2 col-sm-6">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon-06.png" alt="" />
                  </div>
                  <h4>Triple NFT</h4>
                  <div className="icon-button">
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12">
          <div className="collections">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <div className="line-dec"></div>
                  <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="owl-collection owl-carousel">
                  <div className="item">
                    <img src="assets/images/collection-01.jpg" alt="" />
                    <div className="down-content">
                      <h4>Mutant Bored Ape Yacht Club</h4>
                      <span className="collection">Items In Collection:<br/><strong>310/340</strong></span>
                      <span className="category">Category:<br/><strong>Digital Crypto</strong></span>
                      <div className="main-button">
                        <a href="explore.html">Explore Mutant</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/images/collection-01.jpg" alt="" />
                    <div className="down-content">
                      <h4>Bored Ape Kennel Club</h4>
                      <span className="collection">Items In Collection:<br/><strong>324/324</strong></span>
                      <span className="category">Category:<br/><strong>Visual Art</strong></span>
                      <div className="main-button">
                        <a href="explore.html">Explore Bored Ape</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/images/collection-01.jpg" alt="" />
                    <div className="down-content">
                      <h4>Genesis Collective Statue</h4>
                      <span className="collection">Items In Collection:<br/><strong>380/394</strong></span>
                      <span className="category">Category:<br/><strong>Music Art</strong></span>
                      <div className="main-button">
                        <a href="explore.html">Explore Genesis</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/images/collection-01.jpg" alt="" />
                    <div className="down-content">
                      <h4>Worldwide Artwork Ground</h4>
                      <span className="collection">Items In Collection:<br/><strong>426/468</strong></span>
                      <span className="category">Category:<br/><strong>Blockchain</strong></span>
                      <div className="main-button">
                        <a href="explore.html">Explore Worldwide</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div> */}
          </div>
        </div>
      </div>



      {/* <div className="currently-market">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <div className="line-dec"></div>
            <h2><em>Items</em> Currently In The Market.</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="filters">
            <ul>
              <li data-filter="*"  className="active">All Items</li>
              <li data-filter=".msc">Music Art</li>
              <li data-filter=".dig">Digital Art</li>
              <li data-filter=".blc">Blockchain</li>
              <li data-filter=".vtr">Virtual</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row grid">
            <div className="col-lg-6 currently-market-item all msc">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}}/>
                </div>
                <div className="right-content">
                  <h4>Music Art Super Item</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}}/>
                    <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>2.03 ETH</strong><br><em>($8,240.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>4D 08H 15M 42S</strong><br><em>(July 24th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all dig">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}} />
                </div>
                <div className="right-content">
                  <h4>Digital Crypto Artwork</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}} />
                    <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>2.03 ETH</strong><br><em>($7,200.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>2D 06H 30M 25S</strong><br><em>(July 26th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all blc">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}} />
                </div>
                <div className="right-content">
                  <h4>Blockchain Item One</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}} />
                    <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>3.64 ETH</strong><br><em>($6,600.00)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>6D 05H 40M 50S</strong><br><em>(July 28th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all vtr">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}} />
                </div>
                <div className="right-content">
                  <h4>Virtual Currency Art</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}} />
                    <h6>Liberty Artist<br><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>2.44 ETH</strong><br><em>($8,800.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>3D 05H 20M 58S</strong><br><em>(July 14th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all vrt dig">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}} />
                </div>
                <div className="right-content">
                  <h4>Digital Art Item</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}} />
                    <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>2.50 ETH</strong><br><em>($8,400.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>4D 08H 32M 18S</strong><br><em>(July 16th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all msc blc">
              <div className="item">
                <div className="left-image">
                  <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}} />
                </div>
                <div className="right-content">
                  <h4>Blockchain Music Design</h4>
                  <span className="author">
                    <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}} />
                    <h6>Liberty Artist<br><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec"></div>
                  <span className="bid">
                    Current Bid<br><strong>2.44 ETH</strong><br><em>($8,200.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br><strong>5D 10H 22M 24S</strong><br><em>(July 18th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
{/* 
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>© CyberPeace 2023. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer/>


      {/* <!-- Scripts --> */}
      {/* <!-- Bootstrap core JavaScript --> */}
      <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
      
      <Script src="/assets/js/isotope.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/owl-carousel.js" strategy="beforeInteractive" />

      <Script src="/assets/js/tabs.js" strategy="beforeInteractive" />
      <Script src="/assets/js/popup.js" strategy="beforeInteractive" />
      <Script src="/assets/js/custom.js" strategy="beforeInteractive" />
    

    </>
  )
}
