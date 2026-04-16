import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="glass"
      style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "90%",
        margin: "10px 5%",
        zIndex: 100
      }}
    >
      <h2>🌿 Azure Pines</h2>
      <button className="btn">Book Now</button>
    </motion.div>
  );
}