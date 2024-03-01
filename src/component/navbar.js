import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/router"
import { useContext } from "react"

const Navbar =()=>{

  const { currentUser } = useContext(AuthContext)
  const user = [currentUser]
  const router = useRouter()

  const handleLogout = () => {

    // signOut(auth).then(() => {
    window.localStorage.clear();
    alert("loged out")
    window.location.reload();


    // }).catch((error) => {

    //   alert(error)
    // });
  }

  return(
    <header className="header-area header-sticky ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                        <img src="/assets/images/logo/logo.png" alt="" />
                    </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                {/* <h2 style={{ color: '#7453fc', paddingTop: '7px', fontSize:'10px' }}>CyberPeace Secure DNS</h2> */}
                <ul className="nav">
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="#download">Download</a></li>
                  <li><a href="#about">About</a></li>
                  {user[0] === null?<li><a  href="/login" >Login</a></li>:<li><a  href="/dashboard" >Dashboard</a></li>}

                  {/* <li><a href="#">Author</a></li> */}
                  {/* <li><a href="#"><button type="button" className="btn btn-danger btn-sm"></button></a></li> */}
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar;