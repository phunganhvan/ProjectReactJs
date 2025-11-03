import image from '../../assets/image/ss.jpg'

function Home() {
    const styles = {
        body: {
            padding: '60px 20px',
            maxWidth: '1100px',
            margin: '0 auto',
            fontFamily: 'Segoe UI, Arial, sans-serif',
            lineHeight: 1.6,
            color: '#333',
        },
        intro: {
            marginBottom: '60px',
            textAlign: 'center',
        },
        title: {
            fontSize: '36px',
            marginBottom: '15px',
            color: '#2c3e50',
            fontWeight: 700,
        },
        description: {
            fontSize: '18px',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto',
        },
        features: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '40px',
            marginBottom: '60px',
        },
        featureItem: {
            backgroundColor: '#fafafa',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 3px 12px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        },
        featureItemHover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
        },
        featureTitle: {
            fontSize: '20px',
            color: '#007bff',
            marginBottom: '10px',
            fontWeight: 600,
        },
        aboutSection: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '20px',
        },
        image: {
            flex: '0 0 400px',
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
        textContent: {
            flex: '1 1 400px',
            minWidth: '300px',
        },
        heading: {
            textAlign: 'center',
            color: '#6a1b9a',
            fontSize: '1.9rem',
            marginBottom: '1rem',
            fontWeight: 700,
        },
        paragraph: {
            marginBottom: '15px',
        },
        quote: {
            borderLeft: '4px solid #8e24aa',
            paddingLeft: '16px',
            fontStyle: 'italic',
            color: '#555',
            marginTop: '25px',
            backgroundColor: '#f9f6fc',
            borderRadius: '6px',
        },
        divider: {
            margin: '50px 0',
            border: 'none',
            borderTop: '2px solid #eee',
        },
    };

    // Hiệu ứng hover thủ công vì inline style không hỗ trợ pseudoclass
    const handleMouseEnter = (e) => {
        Object.assign(e.currentTarget.style, styles.featureItemHover);
    };
    const handleMouseLeave = (e) => {
        Object.assign(e.currentTarget.style, styles.featureItem);
    };

    return (
        <div style={styles.body}>
            {/* Phần giới thiệu */}
            <section style={styles.intro}>
                <h2 style={styles.title}>Chào mừng đến với Ngân Hàng Đề Toán</h2>
                <p style={styles.description}>
                    Đây là nền tảng giúp bạn tìm kiếm, luyện tập và ôn luyện môn Giải Tích và Đại Số, hỗ trợ sinh viên chuẩn bị kỹ lưỡng cho kỳ thi
                    theo chủ đề — tiện lợi cho cả học sinh, giáo viên và phụ huynh.
                </p>
            </section>

            {/* Các tính năng chính */}
            <section style={styles.features}>
                <div
                    style={styles.featureItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.featureTitle}>📚 Câu hỏi đa dạng</h3>
                    <p>Hàng ngàn câu hỏi từ cơ bản đến nâng cao, giúp sinh viên củng cố kiến thức và tự tin trước kỳ thi.</p>
                </div>
                <div
                    style={styles.featureItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.featureTitle}>🧮 Luyện tập trực tuyến</h3>
                    <p>Làm bài trực tiếp, chấm điểm tự động, hiển thị đáp án và kết quả tức thì.</p>
                </div>
                <div
                    style={styles.featureItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.featureTitle}>🔍 Làm bài thông minh</h3>
                    <p>Đề thi được phân loại theo độ khó, chương, chủ đề — linh hoạt và cập nhật thường xuyên.</p>
                </div>
            </section>

            <hr style={styles.divider} />

            {/* Giới thiệu chi tiết */}
            <section style={styles.aboutSection}>
                <img style={styles.image} src={image} alt="Project preview" />

                <div style={styles.textContent}>
                    <h2 style={styles.heading}>🌐 Algebra & Calculus Practice Website</h2>

                    <p style={styles.paragraph}>
                        The <strong>Algebra & Calculus Practice Website</strong> was developed by
                        <strong> Phùng Anh Văn</strong>, a student of
                        <em> Multimedia Technology, Class D22 – Posts and Telecommunications Institute of Technology (PTIT)</em>.
                    </p>

                    <p style={styles.paragraph}>
                        With a solid foundation in mathematics and technology, along with strong discipline and perseverance gained through
                        competitive chess (<strong>FIDE Elo 1580</strong>) and as the
                        <strong> Runner-up of the PTIT Sports Festival Chess Tournament</strong>, Văn built this platform to support the
                        learning community and enhance Algebra & Calculus studies.
                    </p>

                    <p style={styles.paragraph}>
                        As the <strong>Deputy Head of the Technical Department of SWPTIT Club</strong>, Văn combines academic excellence with
                        practical application. The website not only provides comprehensive and regularly updated exercises but also serves as
                        a valuable self-study tool.
                    </p>

                    <p style={styles.paragraph}>
                        His outstanding achievements in courses such as
                        <strong> Basic Web Design (A+)</strong>,
                        <strong> Research Methodology (A+)</strong>,
                        <strong> Network Programming with C++ (A+)</strong>,
                        <strong> Advanced Mathematics I & II (A+)</strong>,
                        <strong> Database Systems (A)</strong>, and
                        <strong> Computer Graphics (A)</strong> demonstrate a strong technical foundation that contributes to this website’s
                        educational quality.
                    </p>

                    <p style={styles.paragraph}>
                        🎯 <strong>Mission:</strong> To create an active, intuitive, and effective digital learning environment — supporting
                        both teaching and self-study in <strong>Algebra and Calculus</strong> in the digital era.
                    </p>

                    <blockquote style={styles.quote}>
                        🧠 “Knowledge never comes from luck — it is the result of persistence, learning, and daily practice.”<br />
                        — Inspired by the academic and personal journey of <strong>Phùng Anh Văn</strong>
                    </blockquote>
                </div>
            </section>
        </div>
    );
}

export default Home;
