import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import AI from "./pages/AI";
import Scenario from "./pages/Scenario";
import Technology from "./pages/Technology";
import BusinessModel from "./pages/BusinessModel";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements";
import FuturePlans from "./pages/FuturePlans";
import Contact from "./pages/Contact";



// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import BecomeMember from './components/BecomeMember';
import BankPayment from './components/BankPayment';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <main style={{ paddingTop: "70px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/future-plans" element={<FuturePlans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-member" element={<BecomeMember />} />
          <Route path="/bank-payment" element={<BankPayment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          

          {/* 🔑 Auth Routes */}
          
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminPanel />} />


        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
