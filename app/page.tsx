import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import Portofolios from "../components/pages/Portofolios";
import "animate.css";

export default function IndexPage() {
  return (
    <>
      <Header />

      <section className="mb-14 block">
        {/* Home Section */}
        <section id="home-section" className="relative px-3">
          <Home />
        </section>

        {/* About Section */}
        <section id="about-section" className="px-10 py-10 lg:px-20 lg:py-20">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="px-10 py-10 lg:px-20 lg:py-20">
          <Contact />
        </section>

        {/* Portofolion Section */}
        <section
          id="portofolios-section"
          className="px-10 py-10 lg:px-20 lg:py-20"
        >
          <Portofolios />
        </section>
      </section>

      <Footer />
    </>
  );
}
