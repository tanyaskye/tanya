import { useState } from "react";
const ContactForm = () => {
  console.log("API Key from env:", process.env.REACT_APP_API_KEY); // Add this line
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    messages: "",
  });
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const { name, email, messages } = contactData;

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || messages.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setError(false);
      setIsSubmitting(true);

      const formData = {
        name,
        email,
        message: messages,
        subject: "Contact Form Submission", // Default subject
        honeypot: "", // Anti-spam field
        replyTo: email, // Reply-to email
        apiKey: "sf_m9e57jik1189he12f4ich63i", // Replace with your actual API key 
      };

      try {
        const res = await fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();

        if (json.success) {
          setResponseMessage("Thank you for your message! We'll get back to you soon.");
          setContactData({ name: "", email: "", messages: "" });
        } else {
          setResponseMessage(json.message || "An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResponseMessage("An error occurred while submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      className="section section-bg section-parallax section-parallax-2"
      id="contact-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">Contact Me</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            {/* Section numbers */}
            <div className="numbers-items contacts-items">
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-phone" />
                </div>
                <div className="num">+44 7522-750413</div>
              </div>
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-at" />
                </div>
                <div className="num">contact@tanyaagrawal.in</div>
              </div>
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-location-arrow" />
                </div>
                <div className="num">Chelmsford, United Kingdom CM1 7DU</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* contact form */}
            <div className="contacts-form">
              <form id="cform" onSubmit={(e) => onSubmit(e)}>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  {error && !name && (
                    <label id="name-error" className="error" htmlFor="name">
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your email address"
                  />
                  {error && !email && (
                    <label id="email-error" className="error" htmlFor="email">
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Message
                  <textarea
                    name="messages"
                    value={messages}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your message here"
                  />
                  {error && !messages && (
                    <label id="message-error" className="error" htmlFor="messages">
                      This field is required.
                    </label>
                  )}
                </label>
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
              {responseMessage && (
                <div className={`alert ${responseMessage.includes("Thank you") ? "alert-success" : "alert-error"}`}>
                  <p>{responseMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;