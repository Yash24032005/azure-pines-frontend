// import {useState} from "react";
// import {createBooking} from "../services/api";
// import {createOrder} from "../services/payment";

// export default function Booking(){
//   const [form,setForm]=useState({});

//   const book=async()=>{
//     await createBooking(form);
//     const order=await createOrder(5000);

//     const rzp=new window.Razorpay({
//       key:"YOUR_KEY",
//       order_id:order.id,
//       handler:()=>alert("Payment Done 🎉")
//     });

//     rzp.open();
//   };

//   return(
//     <div>
//       <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
//       <button onClick={book}>Book Now</button>
//     </div>
//   );
// }

import { useState } from "react";
import { createBooking } from "../services/api";
import { createOrder } from "../services/payment";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    room: "",
    checkIn: "",
    checkOut: ""
  });

  const book = async () => {
    try {
      // 1. create payment order
      const order = await createOrder(5000);

      const rzp = new window.Razorpay({
        key: "YOUR_KEY",
        order_id: order.id,

        handler: async (response) => {
          // 2. SAVE BOOKING AFTER PAYMENT SUCCESS
          await createBooking({
            ...form,
            paymentId: response.razorpay_payment_id
          });

          alert("Booking Done 🎉");
        }
      });

      rzp.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Room" onChange={e => setForm({ ...form, room: e.target.value })} />

      <button onClick={book}>Book Now</button>
    </div>
  );
}