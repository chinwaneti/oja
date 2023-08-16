import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div
      style={{
        background: "#F4F4F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Welcome</h2>
          <button
            style={{
              backgroundColor: "#3A1C71",
              color: "white",
              border: "none",
              padding: "0.5rem 2rem",
              cursor: "pointer",
              borderRadius: "5px",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => {
              alert("Signed In");
            }}
          >
            <FaGoogle
              style={{
                marginRight: "10px",
              }}
            />
            Sign In with Google
          </button>
          <button
            style={{
              backgroundColor: "#FFAF7B",
              color: "white",
              border: "none",
              padding: "0.5rem 2rem",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Sign Up
          </button>
          <p
            style={{
              marginTop: "1rem",
              color: "gray",
            }}
          >
            <a href="/Contact">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
