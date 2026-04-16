export const createOrder = async (amount)=>{
  const res = await fetch("http://localhost:5000/api/payment/order",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({amount})
  });
  return res.json();
};