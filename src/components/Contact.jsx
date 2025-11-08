// src/components/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // to display success/error messages
  const [loading, setLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Basic email validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all required fields.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      // 2️⃣ Send POST request to API
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Success:", data);
        setStatus("Form Submitted ✔️");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const err = await response.json();
        console.error("❌ API Error:", err);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Network Error:", error);
      setStatus("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-peach min-h-screen flex flex-col md:flex-row justify-between items-center px-8 py-20">
      {/* Left text */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-gray-800">
          Whether you have an idea, a question, or simply want to explore how V can work with you – we’re just a message away.
        </p>
        <p className="text-gray-800">
          Let’s catch up over coffee. Great stories always begin with a good conversation.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col gap-4 mt-10 md:mt-0 bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-md"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-md"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleChange}
          className="border p-3 rounded-md"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white py-2 rounded-md hover:bg-dark transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* ✅ Show validation / success message */}
        {status && (
          <p
            className={`mt-2 text-sm ${
              status.includes("✔️")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>

      <div className="absolute bottom-5 right-10 text-sm text-dark">
        <p>vernita@varnanfilms.co.in | +91 98736 84567</p>
      </div>
    </section>
  );
}
