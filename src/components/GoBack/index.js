import { useNavigate } from "react-router-dom";

function GoBack(){
    const navigate= useNavigate();
    const handleClick = ()=>{
        navigate(-1);
    }
    return (
        <>
            <button onClick={handleClick}>Return Prev</button>
        </>
    )
}
export default GoBack;