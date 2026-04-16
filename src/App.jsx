// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Rooms from "./components/Rooms";
// import Booking from "./components/Booking";
// import Chatbot from "./components/Chatbot";
// import Footer from "./components/Footer";

// export default function App(){
//   return(
//     <>
//       <Navbar/>
//       <Hero/>
//       <Rooms/>
//       <Booking/>
//       <Chatbot/>
//       <Footer/>
//     </>
//   );
// }

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Parallax from "./components/Parallax";
import ChatBot from "./components/chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Parallax />
      <Rooms />
      <ChatBot />
      <Footer/>
    </>
  );
}

export default App;