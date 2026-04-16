const handlePayment = async () => {
  const res = await fetch("http://localhost:5000/api/payment/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: 5000, // dynamic amount later
    }),
  });

  const data = await res.json();

  const options = {
    key: "rzp_test_SdSxoD7G2ZOTo5",
    amount: data.amount,
    currency: data.currency,
    name: "Azure Pines Resort",
    description: "Room Booking",
    order_id: data.id,

    handler: async function (response) {
      alert("Payment Successful 🎉");

      // 🔥 Save booking
      await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: response.razorpay_payment_id,
        }),
      });
    },

    theme: {
      color: "#c9a84c",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};