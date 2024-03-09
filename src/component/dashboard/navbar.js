// import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src="logo.svg" alt="" />
        <span>lamadmin</span> */}
        <a href="/" className="logo" >
                        <img src="/assets/images/logo/logo-dark.png" alt="" style={{height: '50px'}} />
                    </a>
      </div>
      <div className="icons">
        {/* <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div> */}
        {/* <nav>
          <ul>
          

            <li>
              <img src="/settings.svg" alt="" className="icon" />
              <ul>
                <li><a href="#">Information</a></li>
              
              </ul>
            </li>
            
          </ul>

        </nav> */}

        {/* <div className="user">
          <img
            src="/img/profile.png"
            alt="profile"
          />
          <span>John</span>
        </div> */}
       
        {/* <img src="/dashboard.svg" alt="" className="icon" /> */}
        
      </div>
    </div>
  );
};

export default Navbar;
