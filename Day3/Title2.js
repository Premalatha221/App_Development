import React from 'react';

const Title2 = () => {
    
    const styles = {
        container: {
            position: "relative",
            display: "inline-block",
            padding: "20px 40px",
            backgroundColor: "#ffeb3b", 
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "4px",
            margin: "20px 0",
            border: "4px dotted white",
            width: "100%",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            boxSizing: "border-box",
        },
        ribbon: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "0",
            height: "0",
            borderStyle: "solid",
            zIndex: 1,
        },
        ribbonLeft: {
            left: "-20px",
            borderWidth: "20px 30px 20px 0",
            borderColor: "transparent #ffeb3b transparent transparent"
        },
        ribbonRight: {
            right: "-20px",
            borderWidth: "20px 0 20px 30px",
            borderColor: "transparent transparent transparent #ffeb3b"
        },
        wrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyl8GBZXZiXtYZY03D2lH34PYHY09zyLLRzSKlv09EOj2tkjbx")', // Background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            padding: "20px", 
            width: "100%", 
        }
    };


    const mediaStyles = `
        @media (max-width: 1200px) {
            .container {
                font-size: 1.5rem;
                padding: 15px 30px;
            }
            .ribbon {
                border-width: 15px 25px;
            }
        }
        @media (max-width: 768px) {
            .container {
                font-size: 1.2rem;
                padding: 10px 20px;
            }
            .ribbon {
                border-width: 10px 20px;
            }
        }
        @media (max-width: 480px) {
            .container {
                font-size: 1rem;
                padding: 5px 10px;
            }
            .ribbon {
                border-width: 5px 15px;
            }
        }
    `;

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={{ ...styles.ribbon, ...styles.ribbonLeft }}></div>
                <div style={{ ...styles.ribbon, ...styles.ribbonRight }}></div>
                Choose by Age
            </div>
            <style>{mediaStyles}</style> 
        </div>
    );
}

export default Title2;
