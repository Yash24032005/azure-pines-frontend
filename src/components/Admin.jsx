import {useEffect,useState} from "react";

export default function Admin(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/admin/bookings")
      .then(res=>res.json())
      .then(setData);
  },[]);

  return data.map(b=><div key={b._id}>{b.name}</div>);
}