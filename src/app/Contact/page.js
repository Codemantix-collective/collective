import ContactHero from "@/components/sections/ContactHero";
import ContactPage from "@/components/forms/Contactpage";
import { CodematixCTA } from "@/components/ui";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactPage />
      <CodematixCTA
        title="Let's Build Something Amazing Together"
        description="Your next breakthrough project is just a conversation away. We're excited to hear your ideas!"
        primaryText="Send Another Message"
        primaryHref="/contact"
        secondaryText="View Our Work"
        secondaryHref="/projects"
        variant="gradient"
      />
    </>
  );
}
