import { IconName } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import image from '../../assets/image/imageLogin.png';
import "./login.scss";
import Register from "../Register";
import { NavLink, Outlet } from "react-router-dom";
import { login } from "../../services/usersServices";
import {useNavigate} from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/login";
function Login() {

    const navigate = useNavigate();

    const disPatch = useDispatch();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const username= e.target[0].value;
        const password= e.target[1].value;
        const response= await login(username, password);
        if(response.length>0){
            // console.log(response);
            alert("Đăng nhập thành công");
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("username", response[0].username, 1);
            setCookie("email", response[0].email, 1);
            setCookie("password", response[0].password, 1);
            setCookie("token", response[0].token, 1);
            setCookie("role", response[0].role, 1);
            disPatch(checkLogin(true));
            navigate("/");
        }else{
            alert("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại");
        }
        // console.log(e.target[0].value);
    }
    return (
        <>
            <div className="container">
                <div className="Imagine">
                    <img src={image} style={{ width: "100%", objectFit: "cover", height: "100%" }} />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="input-box">
                            <input id="username" type="text" placeholder="Username" required />
                            <FaCircleUser style={{ position: "absolute", right: "60px", top: "19.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="input-box">
                            <input id="pass" type="password" placeholder="Password" required />
                            <FaLock style={{ position: "absolute", right: "60px", top: "31.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="forgot-link">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button id="loginBtn" type="submit" className="btn">Login</button>
                        <p>or login with social platforms</p>
                        <div className="social-icons">
                            <a className="icons_fb" href="#"><FaFacebook style={{ color: "blue", fontSize: "30px", margin: "10px" }} /></a>
                            <a href="icons_google"><FaGoogle style={{ color: "blue", fontSize: "30px", margin: "10px" }} /></a>
                        </div>
                        <span>Don't have an acout? </span>
                        <div className="SignUp">
                            <NavLink to={"/Register"}>Register</NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;