import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/login";
function Logout(){
    const navigate = useNavigate();
    const disPatch = useDispatch();
    deleteAllCookies();
    useEffect(() =>{
        disPatch(checkLogin(false));
        alert("Đăng xuất thành công");
        navigate("/Login");
    },[])
    return (
        <>
        </>
    );
}
export default Logout;