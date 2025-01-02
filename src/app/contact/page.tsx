import React from 'react'

const Contact = () => {
  return (
    <section className="contact-form border max-w-lg mx-auto my-20 p-8 bg-gray-100 shadow-md rounded-md">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">Contact Us</h2>
        <form>
        <input type="email"placeholder="Full Name"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
            <input type="email"placeholder="Email Address"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
            <input type="text"placeholder="Phone Number"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
            <textarea placeholder="Your Message"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" rows={5} required></textarea>
            <button type="submit"className="w-full bg-red-500 hover:bg-black text-white py-2 rounded-md">Send Message</button>
        </form>
    </section>
  );
};

export default Contact

