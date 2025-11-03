import BankQuestion from "./BankQuestion";
import { useState } from "react";
import CreateQuestion from "./CreateQuestion";
function GiaiTichTeacher(){
    const [reload, setReload] =useState(false);
    const handleReload =() =>{
        setReload(!reload);
    }
    return (
        <>  
            <h1>
                Danh sách câu hỏi ôn tập môn
            </h1>
            <CreateQuestion onReload={handleReload}/>
            <BankQuestion reload = {reload}/>
        </>
    )
}
export default GiaiTichTeacher;