import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import { ContactMap } from "./ContactMap";
import { ContactSocial } from "./ContactSocial";

 
 
export default function Home() {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactMap />
      <ContactSocial />
       
    </>
  );
}