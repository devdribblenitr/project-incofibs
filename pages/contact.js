import Contactus from "../components/Contact.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactCards from "../components/ContactCards.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function contactUs() {
  return (
    <>
      <Navbar />
      <ContactInfo />
      <Contactus />
      <ContactCards />
      <Footer />
    </>
  );
}

export default contactUs;
