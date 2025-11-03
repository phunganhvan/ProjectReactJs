import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from "react";
import { MathJax } from 'better-react-mathjax';
import { MathJaxContext } from 'better-react-mathjax';
import "./Home.css";
function BankQuestion() {
    const [daiSo, setDaiSo] = useState([]);
    const [answers, setAnswers] = useState([]);
    // câu trả lời
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3002/dai_so")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                // setdaiSo(data.daiSo);
                setDaiSo(data);
                setAnswers(Array(data.length).fill(null));
                setLoading(false);
                // console.log(daiSo);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    // console.log(daiSo);
    if (loading) return <p>Đang tải câu hỏi...</p>;
    if (error) return <p>Lỗi: {error}</p>;
    const config = {
        loader: { load: ['[tex]/ams'] }, // Ví dụ: tải gói ams cho LaTeX
        tex: {
            packages: { '[+]': ['ams'] },
            inlineMath: [['$', '$'], ['\\(', '\\)']], // Cấu hình cho inline math
            displayMath: [['$$', '$$'], ['\\[', '\\]']] // Cấu hình cho display math
        },
        svg: {
            fontCache: 'global' // Cải thiện hiệu suất render SVG
        }
    };
    const array = [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" }
    ]
    const handleSelect = (index, index1) => {
        // index là chỉ số của câu hỏi, index1 là chỉ số của đáp án
        console.log(`Câu hỏi ${index + 1}, Đáp án đã chọn: ${index1}`);
        const updatedAnswers = [...answers];
        updatedAnswers[index] = index1; // Lưu đáp án đã chọn
        setAnswers(updatedAnswers);

    };
    console.log(answers);
    const handleSubmit = () => {
        let answerIncorrect ="";
        const correctCount = answers.reduce((score, answer, idx) => {
            if(answer != daiSo[idx].answerCorrect) {
                let a = daiSo[idx].answerCorrect;
                console.log(a);
                answerIncorrect += `Câu ${idx + 1} sai, đáp án đúng là: ${array[a].name}\n`;
                console.log(`Câu ${idx + 1} sai, đáp án đúng là: ${array[a].name}`);
            }
            
            return answer == daiSo[idx].answerCorrect ? score + 1 : score;
        }, 0);
        alert(`Bạn trả lời đúng ${correctCount}/${daiSo.length} câu.\n ${answerIncorrect}`);
    };
    return (
        <>
            <h1>Đại số</h1>
            <MathJaxContext version={3} config={config}>
                {daiSo.map((item, index) => (
                    <div className='question' key={index}>Question {item.id}:
                        <MathJax>{item.text}</MathJax>
                        <ul className="answer">
                            {item.options.map((items, index1) => (
                                // index la chi số thể hiện câu hỏi, index1 là chỉ số thể hiện đáp án
                                <li key={index1}>
                                    <input type='radio' name={`q-${item.id}`} id={index1} value={index1} onChange={() => handleSelect(index, index1)} /> {array[index1].name}: <MathJax>{items.text}</MathJax>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </MathJaxContext>
            <button id='submit' onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Nộp bài
            </button>


        </>
    )
}
export default BankQuestion;