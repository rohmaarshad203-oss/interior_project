import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500">Have questions about our interior solutions? Reach out to us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Visit Our Showroom</h3>
              <p className="text-gray-600">123 Interior Street, Defense Phase 6, Karachi, Pakistan</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@interior.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-orange-500"
            ></textarea>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;