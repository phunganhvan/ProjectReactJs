import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './Home.css'
function DeleteQuestion(props) {
    const { item, onReload } = props;
    const handleDelete = () => {
        // console.log(item.id);
        Swal.fire({
            title: "Are you sure to delete it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3002/giai_tich/${item.id}`, { // đổi thành `` thì mới gán được thêm id vào
                    method: "DELETE", // đổi phương thức từ post thành patch thành delete
                    // headers: {
                    //     Accept: "application/json",
                    //     "Content-Type": "application/json"
                    // },
                    // body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(() => {

                        onReload();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your question has been deleted.",
                            icon: "success"
                        });

                    })
            }
        });
    }
    return (
        <>
            <button id='delete' onClick={handleDelete}>Delete</button>
        </>
    )
}
export default DeleteQuestion;
