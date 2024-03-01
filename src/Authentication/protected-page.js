import { AuthContext } from "@/context/AuthContext";
import { base_url } from "@/util/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ProtectedPage() {

    const { currentUser } = useContext(AuthContext)
    const user = [currentUser]
    const router = useRouter()
  
  //  check user present or not 
    useEffect(() => {
     
      if (user[0] === null) {
        // console.log("no user")
        // console.log(user)
          
        router.push("/login")
      } else {
        const token = user[0].token;
        axios.get(base_url + 'user/protected-route', {
          headers: { Authorization: token }
        })
          .then(response => {
            console.log(response.data.user);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
            window.localStorage.clear();
           
            window.location.reload();
          });
  
      }
    }, [user]);

return

}

