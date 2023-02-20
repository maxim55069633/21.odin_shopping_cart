
import {  NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MainLayout = ()=>{

    return (
        <div className="main-layout">
            <nav className="navigation-bar">
                <NavLink to='/aboutus'>About Us</NavLink>
                <NavLink to='/shoppage'>Shop Page</NavLink>
                <NavLink to='/cart'>My Cart</NavLink>
            </nav>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout;