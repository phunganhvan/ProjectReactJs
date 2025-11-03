import "./LayoutDefault.scss"
import { NavLink, Outlet } from "react-router-dom";
import { getCookies } from "../../helpers/cookie";
import { FaRegUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { useSelector } from "react-redux";
function LayoutDefault() {

    const navLinkActive = (e) => {
        if (e.isActive) {
            return `menu_link--active`;
        }
        else return `menu_link`;
    }
    const token = getCookies("token");
    const role = getCookies("role");

    const isLogin = useSelector((state) => state.loginReducer);
    return (
        <>
            <div className="LayoutDefault">
                <header className="LayoutDefault_header">
                    <div className="LayoutDefault_logo"> <NavLink className="nav-link" to="/"> WEB</NavLink> </div>
                    <div className="menu">
                        <ul>
                            {token ? (
                                role === "teacher" ? (
                                    <>
                                        <li>
                                            <NavLink className={navLinkActive} to="/">Home</NavLink>
                                        </li>

                                        <li>
                                            <NavLink className={navLinkActive} to="DaiSoTeacher"> Đại Số</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={navLinkActive} to="GiaiTichTeacher"> Giải tích</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink className={navLinkActive} to="/">Home</NavLink>
                                        </li>

                                        <li>
                                            <NavLink className={navLinkActive} to="DaiSo"> Đại Số</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={navLinkActive} to="GiaiTich"> Giải tích</NavLink>
                                        </li>
                                    </>
                                )
                            ) : (<>
                                <li>
                                    <NavLink className={navLinkActive} to="/">Home</NavLink>
                                </li>

                            </>)}
                        </ul>
                    </div>
                    <div className="LayoutDefault_account">
                        {token ? (<>
                            {/* <FaBell style={{ margin: "5px", fontSize: "20px" }} /> */}
                            <NavLink to={"/InfoUser"}><FaRegUser style={{ margin: "5px 15px", fontSize: "20px" }} /></NavLink>
                            <NavLink to={"/Logout"} style={{ position: "relative", top: "-10px", fontSize: "20px" }}>Sign out</NavLink>
                        </>) : (<>
                            <NavLink className="nav-link" to={"/Login"}>Login</NavLink>
                            <NavLink className="nav-link" to={"/Register"}>Register</NavLink>
                        </>)}
                    </div>
                </header>
                <main className="LayoutDefault_main">
                    {/* Nội dung chính.... */}
                    <Outlet />
                </main>
                <footer className="LayoutDefault_footer">
                    Copyright by PAV
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;