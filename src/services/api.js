// const BASE_URL = "https://azure-pines-backend.onrender.com/api";

// export const createOrder = async (amount) => {
//   const res = await fetch(`${BASE_URL}/payment/order`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ amount }),
//   });
//   return res.json();
// };

// export const createBooking = async (data) => {
//   const res = await fetch(`${BASE_URL}/bookings`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

const BASE_URL = "https://azure-pines-backend.onrender.com/api";
// const BASE_URL = "http://localhost:5000/api";
export const createBooking = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    console.log("Booking API Response:", result);

    if (!res.ok) {
      throw new Error(result.message || "Booking failed");
    }

    return result;

  } catch (err) {
    console.error("Booking Error:", err);
    throw err;
  }
};