import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-luxury-resort-1573/1080p.mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.6)"
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "72px", fontWeight: "bold" }}
        >
          Azure Pines Resort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "20px", fontSize: "20px" }}
        >
          Luxury • Nature • Peace
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "linear-gradient(45deg,#c9a84c,#e6c76e)",
            border: "none",
            borderRadius: "40px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Book Your Stay
        </motion.button>
      </div>
    </div>
  );
}