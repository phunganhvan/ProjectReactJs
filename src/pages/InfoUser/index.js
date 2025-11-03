import React, { useEffect, useState } from "react";
import { getCookies, setCookie } from "../../helpers/cookie";
import image from "../../assets/image/z.jpg";
const API_DOMAIN = "http://localhost:3002/";

function InfoUser() {
    const id = getCookies("id");
    const [fullName, setFullName] = useState(getCookies("fullName") || "");
    const [email, setEmail] = useState(getCookies("email") || "");
    const [username, setUsername] = useState(getCookies("username") || "");
    const [password, setPassword] = useState(getCookies("password") || "");
    const role = getCookies("role") || "student"; // Default to student if not set
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3002/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImageUrl(data.image_url);
                console.log(imageUrl);
            });
    }, []);
    const handleSave = async () => {
        try {
            const response = await fetch(`${API_DOMAIN}users/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, email, username, password }),
            });

            if (!response.ok) throw new Error("Cập nhật thất bại");
            setCookie("fullName", fullName, 7);
            setCookie("email", email, 7);
            setCookie("username", username, 7);
            setCookie("password", password, 7);
            setIsEditing(false);
            alert("Cập nhật thông tin thành công!");
        } catch (error) {
            console.error("Lỗi:", error);
            alert("Có lỗi xảy ra khi cập nhật.");
        }
    };

    const renderField = (label, value, setValue, type = "text", isPassword = false) => (
        <div style={styles.fieldRow}>
            <label style={styles.label}>{label}</label>
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                {isEditing ? (
                    <input
                        type={isPassword && !showPassword ? "password" : "text"}
                        value={value}
                        onChange={(e) => e.target.name="role" ? alert("Không thể chỉnh sửa vai trò") : setValue(e.target.value)}
                        style={styles.input}
                    />
                ) : (
                    <span style={styles.valueText}>
                        {isPassword && !showPassword ? "*".repeat(value.length) : value}
                    </span>
                )}
                {isPassword && (
                    <button onClick={() => setShowPassword(!showPassword)} style={styles.toggleButton}>
                        {showPassword ? "Ẩn" : "Hiện"}
                    </button>
                )}
            </div>
        </div>
    );

    return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <div>
                        <h2 style={{ margin: 0 }}>Personal Information</h2>
                        <p style={{ color: '#555' }}>
                            Store information to do something right now
                        </p>
                    </div>
                    <img
                        src={imageUrl != null ? imageUrl : image}
                        alt="avatar"
                        style={styles.avatar}
                    />
                </div>

                <hr style={{ margin: '20px 0' }} />

                {renderField("Full name", fullName, setFullName)}
                {renderField("Email", email, setEmail)}
                {renderField("Username", username, setUsername)}
                {renderField("Password", password, setPassword, "password", true)}
                {renderField("Role", role, null)}
                <div style={styles.buttonRow}>
                    {isEditing ? (
                        <>
                            <button onClick={handleSave} style={styles.button}>Lưu</button>
                            <button onClick={() => setIsEditing(false)} style={styles.cancelButton}>Hủy</button>
                        </>
                    ) : (
                        <button onClick={() => setIsEditing(true)} style={styles.button}>Chỉnh sửa</button>
                    )}
                </div>
            </div>
        );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    fieldRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    label: {
        width: '120px',
        fontWeight: 'bold'
    },
    valueText: {
        fontSize: '16px'
    },
    input: {
        padding: '8px',
        fontSize: '14px',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    toggleButton: {
        marginLeft: '10px',
        fontSize: '12px',
        background: 'none',
        border: 'none',
        color: '#007bff',
        cursor: 'pointer'
    },
    buttonRow: {
        marginTop: '30px',
        textAlign: 'right'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px'
    },
    cancelButton: {
        marginLeft: '10px',
        padding: '10px 20px',
        backgroundColor: '#6c757d',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px'
    },
    img: {
        objectFit: "cover"
    }
};

export default InfoUser;
