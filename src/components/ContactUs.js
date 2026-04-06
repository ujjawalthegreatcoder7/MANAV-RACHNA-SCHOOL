import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919971289376"
      target="_blank"
      rel="noopener noreferrer"
      className="call-button"
    >
      <FaWhatsapp />
    </a>
  );
}

export default ContactUs;