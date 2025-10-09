import Hero from "../components/Header.jsx";
import HeroCTA from "../components/HomeCTA.jsx";
import ServicesSnapshot from "../components/ServicesSnapshot.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Contact from "../components/Contact.jsx";
import ServicesContact from "@/components/ServicesContact";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ServicesSnapshot />
      <ServicesContact />
    </div>
  );
}
