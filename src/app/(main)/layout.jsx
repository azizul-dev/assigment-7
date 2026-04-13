import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}