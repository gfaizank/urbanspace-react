import React from 'react';

const Contact = () => {
    return(
        //#ffffff #1e2a38
        <div className="bg-[#1e2a38] text-white py-10">  
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <hr className="border-t my-4 ml-0" />
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
          <form className="w-full">
  <div className="flex flex-wrap -mx-2 mb-4">
    <div className="w-full lg:w-1/2 px-2 mb-4">
      <input
        className="w-full border rounded-lg py-2 px-3 placeholder-gray-400 text-black focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
        required
      />
    </div>
    <div className="w-full lg:w-1/2 px-2 mb-4">
      <input
        className="w-full border rounded-lg py-2 px-3 placeholder-gray-400 text-black focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
        required
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2 mb-4">
    <div className="w-full lg:w-1/2 px-2 mb-4">
      <input
        className="w-full border rounded-lg py-2 px-3 placeholder-gray-400 text-black focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]"
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        required
      />
    </div>
    <div className="w-full lg:w-1/2 px-2 mb-4">
      <input
        className="w-full border rounded-lg py-2 px-3 placeholder-gray-400 text-black focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        type="tel"
        required
      />
    </div>
  </div>
  <textarea
    className="w-full border rounded-lg py-2 px-3 placeholder-gray-400 text-black focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]"
    id="message"
    name="message"
    placeholder="Your Message"
    rows="5"
    required
  ></textarea>
  <div className="mt-4">
    <button className="bg-[#00df9a] hover:bg-[#00c088] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-[#00df9a] focus:border-[#00df9a]" type="submit">
      Send
    </button>
  </div>
</form>


          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:flex lg:flex-col">
            <div className="w-full mb-4">
              <div className="text-[#00df9a] text-2xl mb-2">Get in Touch</div>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:urbanspacek@gmail.com`}>urbanspacek@gmail.com</a>
                <br />
                <strong>Phone:</strong> +91 81699 43661
              </address>
            </div>
            <div className="w-full">
              <div className="text-[#00df9a] text-2xl mb-2">Map View</div>
              <div className="contact map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.290668685304!2d73.07036777433319!3d19.050953652760022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34cdd78ca7d%3A0x8a0db14092e99375!2sURBAN%20SPACE!5e0!3m2!1sen!2sin!4v1690639197854!5m2!1sen!2sin"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Contact;
