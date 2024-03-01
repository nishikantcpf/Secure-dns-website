import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
// import '../../public/assets/css/templatemo-liberty-market.css'
import "@/styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
    <AuthContextProvider>
      
    <Component {...pageProps} />
 </AuthContextProvider>
    </>
    
    )
}
