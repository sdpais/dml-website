import ContactMessages from "./components/ContactMessages";
import Navbar from "./components/Navbar";
function ContactUsMessages () {
  return (
    <div className="container flex flex-col">
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div className="flex  flex-col">
        <ContactMessages />
      </div>
    </div>
  )
}

export default ContactUsMessages