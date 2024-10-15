import { Outlet } from "react-router-dom"
import App from "./App"
import Footer from "./Footer"
export default function Layout(){
    return(
        <>
        <App />
        <Outlet />
        <Footer />
        </>
    )
}