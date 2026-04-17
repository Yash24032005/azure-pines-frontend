// import { motion } from "framer-motion";
// import { useState } from "react";

// const rooms = [
//   {
//     name: "Deluxe Room",
//     price: 5500,
//     img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
//   },
//   {
//     name: "Suite",
//     price: 9200,
//     img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
//   },
//   {
//     name: "Villa",
//     price: 14500,
//     img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
//   },
// ];

// export default function Rooms() {
//   const [loadingIndex, setLoadingIndex] = useState(null);

//   const handlePayment = async (amount, index) => {
//     try {
//       setLoadingIndex(index);

//       const res = await fetch( "https://azure-pines-backend.onrender.com/api/payment/order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       const options = {
//         key: "rzp_test_SdSxoD7G2ZOTo5",
//         amount: data.amount,
//         currency: "INR",
//         name: "Azure Pines Resort",
//         description: "Luxury Booking Experience ✨",
//         order_id: data.id,

//         handler: async function (response) {
//           alert("✅ Payment Successful!");

//           await fetch("https://azure-pines-backend.onrender.com/api/bookingss", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               room: amount,
//               paymentId: response.razorpay_payment_id,
//             }),
//           });
//         },

//         modal: {
//           ondismiss: function () {
//             alert("⚠️ Payment cancelled");
//           },
//         },

//         theme: {
//           color: "#c9a84c",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.log(err);
//       alert("❌ Payment Failed");
//     } finally {
//       setLoadingIndex(null);
//     }
//   };

//   return (
//     <section
//       style={{
//         padding: "80px 20px",
//         background: "linear-gradient(to right, #0f172a, #020617)",
//         color: "white",
//         minHeight: "100vh",
//       }}
//     >
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         style={{
//           textAlign: "center",
//           fontSize: "48px",
//           marginBottom: "60px",
//           fontWeight: "bold",
//           letterSpacing: "1px",
//         }}
//       >
//         Luxury Rooms
//       </motion.h1>

//       {/* Cards */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "40px",
//           flexWrap: "wrap",
//         }}
//       >
//         {rooms.map((room, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.08, rotate: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             style={{
//               width: "320px",
//               borderRadius: "20px",
//               overflow: "hidden",
//               backdropFilter: "blur(20px)",
//               background: "rgba(255,255,255,0.05)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
//             }}
//           >
//             {/* Image */}
//             <div style={{ overflow: "hidden" }}>
//               <motion.img
//                 src={room.img}
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ duration: 0.4 }}
//                 style={{
//                   width: "100%",
//                   height: "220px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>

//             {/* Content */}
//             <div style={{ padding: "25px" }}>
//               <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
//                 {room.name}
//               </h2>

//               <p
//                 style={{
//                   color: "#c9a84c",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 ₹{room.price}/night
//               </p>

//               {/* Button */}
//               <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => handlePayment(room.price, index)}
//                 disabled={loadingIndex === index}
//                 style={{
//                   marginTop: "20px",
//                   width: "100%",
//                   padding: "14px",
//                   border: "none",
//                   borderRadius: "10px",
//                   background: "linear-gradient(45deg, #c9a84c, #f5d98c)",
//                   color: "#000",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                   transition: "0.3s",
//                 }}
//               >
//                 {loadingIndex === index ? "Processing..." : "Book Now"}
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useState } from "react";

const rooms = [
  {
    name: "Deluxe Room",
    price: 5500,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
  },
  {
    name: "Suite",
    price: 9200,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    name: "Villa",
    price: 14500,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  },
];

export default function Rooms() {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const BASE_URL = "https://azure-pines-backend.onrender.com/api";

  const handlePayment = async (roomData, index) => {
    try {
      setLoadingIndex(index);

      // 1. Backend se Razorpay Order ID lena
      const res = await fetch(`${BASE_URL}/payment/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: roomData.price }),
      });

      const orderData = await res.json();

      if (!orderData.id) {
        alert("Server error: Order ID not found");
        return;
      }

      // 2. Razorpay Checkout Options
      const options = {
        key: "rzp_test_SdSxoD7G2ZOTo5",
        amount: orderData.amount,
        currency: "INR",
        name: "Azure Pines Resort",
        description: `Luxury Stay - ${roomData.name}`,
        order_id: orderData.id,
        handler: async function (response) {
          alert("✅ Payment Successful!");

          // 3. Database mein data save karna (Corrected URL: /bookings)
          const saveRes = await fetch(`${BASE_URL}/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Yash Bansal", // Aap isey baad mein form se dynamic kar sakte hain
              email: "yash@example.com",
              room: roomData.name, // Pass the name, not price
              checkIn: new Date(),
              checkOut: new Date(),
              paymentId: response.razorpay_payment_id,
            }),
          });

          if (saveRes.ok) {
            console.log("✅ Data saved in MongoDB");
          }
        },
        modal: {
          ondismiss: function () {
            alert("⚠️ Payment cancelled");
          },
        },
        theme: {
          color: "#c9a84c",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("❌ Payment Failed: Connection issue");
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #020617, #0f172a)",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "60px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Luxury Rooms
      </motion.h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            style={{
              width: "320px",
              borderRadius: "24px",
              overflow: "hidden",
              // Premium Glassmorphism UI
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.img
                src={room.img}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "25px" }}>
              <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
                {room.name}
              </h2>

              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                ₹{room.price}/night
              </p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePayment(room, index)}
                disabled={loadingIndex === index}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  background: "linear-gradient(45deg, #c9a84c, #f5d98c)",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 4px 15px rgba(201, 168, 76, 0.3)",
                }}
              >
                {loadingIndex === index ? "Processing..." : "Book Now"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}