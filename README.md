# 🌿 Azure Pines Resort

> A premium, full-stack web application designed for a luxury resort experience.

Azure Pines Resort features a modern, immersive UI built with **React** and **Framer Motion**, integrated with a secure payment gateway for seamless room bookings.

---

## ✨ Features

- **Immersive Hero Experience** — High-quality video backgrounds with smooth, physics-based animations using `framer-motion`.
- **Real-time Booking** — Integrated booking system that handles user information and reservation details.
- **Secure Payments** — Integrated with Razorpay to process secure transactions before confirming bookings.
- **Interactive UI** — Parallax scrolling effects and a "Glassmorphism" styled navigation bar.
- **Admin Dashboard** — A dedicated interface for staff to monitor and manage guest bookings.
- **Customer Support** — Floating chatbot interface to assist guests during their browsing experience.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Framer Motion |
| Styling | Modern CSS (Glassmorphism), Inline Styles |
| Payments | Razorpay SDK |
| State Management | React Hooks (`useState`, `useEffect`) |

---

## 📦 Project Structure

```
├── src/
│   ├── components/
│   │   ├── chatbot.jsx    # Floating support button
│   │   ├── Hero.jsx       # Video hero section with animations
│   │   ├── Navbar.jsx     # Sticky glassmorphism nav
│   │   ├── Rooms.jsx      # Room listings (Imported in App)
│   │   └── Footer.jsx     # Minimalist footer
│   ├── services/
│   │   ├── api.js         # API calls for bookings
│   │   └── payment.js     # Razorpay order logic
│   ├── Admin.jsx          # Admin management view
│   ├── App.jsx            # Main application entry
│   └── main.jsx           # React DOM rendering
├── index.html             # Entry HTML with Razorpay script
└── .gitignore             # Environment and node_modules protection
```

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/azure-pines-resort.git
   cd azure-pines-resort
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (this is ignored by Git) and add your Razorpay credentials:
   ```
   VITE_RAZORPAY_KEY_ID=your_key_here
   ```

4. **Update Razorpay Key:**
   In `Booking.jsx`, ensure you replace `"YOUR_KEY"` with your actual Razorpay Key ID or use the environment variable.

5. **Run the application:**
   ```bash
   npm run dev
   ```

---

## 💳 Booking Workflow

1. **Selection** — The user fills out the booking form with their details (Name, Email, Room).
2. **Order Creation** — The system calls `createOrder()` via the backend to initiate a transaction.
3. **Payment** — The Razorpay checkout modal opens. Upon successful payment, a `paymentId` is generated.
4. **Confirmation** — Only after payment success is the booking data saved to the database via `createBooking()`.

---

## 📝 License

© Azure Pines Resort. All rights reserved.
