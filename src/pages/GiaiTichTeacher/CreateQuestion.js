import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function CreateQuestion(props) {
  const {onReload} =props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
  text: "",
  chapter: "",
  options: [
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ],
  answerCorrect: "",
  chapter:""
});
  const [chapterGiaiTich, setChapterGiaiTich] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3002/ChapterGiaiTich")
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          setChapterGiaiTich(data);
        })
    }
    fetchApi();
  }, []);
  // console.log(ChapterDaiSo);
  const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // console.log(e);
        switch (name) {
            case "OptionA":
                const updatedOptionsA = [...data.options];
                updatedOptionsA[0].text = value;

                setData({
                    ...data,
                    options: updatedOptionsA,
                });
                break;

            case "OptionB":
                const updatedOptionsB = [...data.options];
                updatedOptionsB[1].text = value;

                setData({
                    ...data,
                    options: updatedOptionsB,
                });
                break;

            case "OptionC":
                const updatedOptionsC = [...data.options];
                updatedOptionsC[2].text = value;

                setData({
                    ...data,
                    options: updatedOptionsC,
                });
                break;
            case "OptionD":
                const updatedOptionsD = [...data.options];
                updatedOptionsD[3].text = value;

                setData({
                    ...data,
                    options: updatedOptionsD,
                });
                break;
            default:
                setData({
                    ...data,
                    [name]: value
                });
                break;
        }
    }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const openModal = () => {
    setShowModal(true);
  }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }

  const closeModal = () => {
    setShowModal(false);
  }
  let a = data.answerCorrect;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/giai_tich",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data =>{
      if(data){
        setShowModal(false);
        onReload();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Completed create new question",
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
    // console.log(data);
  }
  return (
    <>
      <button id='create' onClick={openModal}> Create new question</button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Question Content
                                </td>
                                <td>
                                    <textarea rows={4} name='text' onChange={handleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Chapter
                                </td>
                                <td>
                                    <select name='chapter' defaultValue={data.chapter} onChange={handleChange} >
                                        {chapterGiaiTich.map((item, index) => (
                                            <option value={item.name} key={index}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Đáp án A:
                                </td>
                                <td>
                                    <textarea rows={4} name='OptionA' onChange={handleChange} required> </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Đáp án B:
                                </td>
                                <td>
                                    <textarea rows={4} name='OptionB' onChange={handleChange} required></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Đáp án C:
                                </td>
                                <td>
                                    <textarea rows={4} name='OptionC' onChange={handleChange} required ></textarea>                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Đáp án D:
                                </td>
                                <td>
                                    <textarea rows={4} name='OptionD' onChange={handleChange} required></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Đáp án đúng là:
                                </td>
                                <td>
                                    <input name='answerCorrect' onChange={handleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Create" />
                                </td>
                                <td>
                                    <button onClick={closeModal}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
      </Modal>
    </>
  )
}
export default CreateQuestion;