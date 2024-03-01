
import {topDealUsers} from "../data"

const TopBox = () => {
  return (
    <div className="topBox">
      <h2>User Details</h2>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src='/img/profile.png' alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.mobile}</span>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox