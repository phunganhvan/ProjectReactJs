import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegFaceGrinWink } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import image from '../../assets/image/imageLogin.png';
import { NavLink } from "react-router-dom";
import "./register.scss";
import { checkExist, register } from "../../services/usersServices";
import { generateToken } from "../../helpers/generateToken";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const fullName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        const role = e.target[4].value;
        console.log(role);
        // console.log("Hello");
        const checkExistUsername = await checkExist("username", username);
        const checkExistEmail = await checkExist("email", email);
        if (checkExistUsername.length > 0 || checkExistEmail.length > 0) {
            console.log(checkExistUsername, checkExistEmail);
            alert("Tài khoản hoặc email đã tồn tại. Vui lòng thử lại");
        }
        else {
            const options = {
                "fullName": fullName,
                "username": username,
                "email": email,
                "password": password,
                "token": generateToken(20),
                "role": role
            }
            const response = await register(options);
            // console.log(response);
            if(response){
                navigate("/Login");
            }
            else{
                alert("Failed to sign up");
            }
        }

        // if(response.length>0){
        //     // console.log(response);
        //     alert("Đăng nhập thành công");
        //     setCookie("id", response[0].id, 1);
        //     setCookie("fullName", response[0].fullName, 1);
        //     setCookie("username", response[0].username, 1);
        //     setCookie("email", response[0].email, 1);
        //     setCookie("token", response[0].token, 1);
        //     disPatch(checkLogin(true));
        //     navigate("/");
        // }else{
        //     alert("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại");
        // }
    }
    const handleFocus =() => {
        alert("Bạn chỉ có thể tạo tài khoản với role là Student");
    }
    return (
        <>
            <div className="container">
                <div className="Imagine">
                    <img src={image} style={{ width: "100%", objectFit: "cover", height: "100%" }} />
                </div>
                <div className="form-box register">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className="input-box">
                            <input id="regName" type="text" placeholder="Username" required />
                            <FaCircleUser style={{ position: "absolute", right: "102px", top: "19.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="input-box">
                            <input id="regFull" type="text" placeholder="Fullname" required />
                            <FaRegFaceGrinWink style={{ position: "absolute", right: "102px", top: "31%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="input-box">
                            <input id="regEmail" type="email" placeholder="Email" required />
                            <AiOutlineMail style={{ position: "absolute", right: "102px", top: "42.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="input-box">
                            <input id="regPass" type="password" placeholder="Password" required />
                            <FaLock style={{ position: "absolute", right: "102px", top: "54.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <div className="input-box">
                            <input id="regRole" type="text" value="student" onChange={() => handleFocus()}/>
                             <HiOutlineUsers style={{ position: "absolute", right: "102px", top: "66.5%", transform: "translateY(-50%)", fontSize: "24px" }} />
                        </div>
                        <button id="regBtn" type="submit" className="btn">Register</button>
                        <p>or register with social platforms</p>
                        <div className="social-icons">
                            {/* <a className="icons_fb" href="#"><FaFacebook style={{ color: "blue", fontSize: "16px", margin: "10px" }} /></a>
                            <a href="icons_google"><FaGoogle style={{ color: "blue", fontSize: "16px", margin: "10px" }} /></a> */}
                        </div>
                        <span>Already have an acout? </span>
                        <div className="SignIn">
                            <NavLink to={"/Login"}>Sign In</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;