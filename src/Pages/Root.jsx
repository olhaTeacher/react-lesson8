import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"

const Root = ()=>{
    return (
        <div className='container'>
        <Header />
        <Sidebar />
        <Outlet />
</div>
    )
}
export default Root