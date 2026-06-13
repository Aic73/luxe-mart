import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useToast } from "./contexts/ToastContext";

function App() {
  const { toasts } = useToast();

  return (
    <div className="bg-dark min-h-screen">
      <Toast toasts={toasts} />
      <Navbar />
      <div className="pt-28">
        <Hero />
        <ProductGrid />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;