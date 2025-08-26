import React from "react";
import { useAuth } from "../authcontext/authcontext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";

function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Dashboard</h1>
            <p style={styles.text}>You are logged in as: <strong>{user?.email}</strong></p>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
    );
}

const styles = {
    container: {
        padding: "2rem",
        textAlign: "center",
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "1rem",
    },
    text: {
        fontSize: "1.2rem",
        marginBottom: "1rem",
    },
    button: {
        padding: "0.5rem 1rem",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    }
};

export default Dashboard;
