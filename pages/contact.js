import { Typewriter } from 'react-simple-typewriter';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen p-8 text-white flex flex-col md:flex-row items-center relative">
      {/* Typewriter Effect - Positioned Below Navbar */}
      <div className="absolute top-24 text-center w-full text-xl font-semibold z-10">
        <Typewriter
          words={['Let’s Connect!', 'Have a project in mind?', 'Drop me a message!']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 animate-fadeInLeft mt-32">
        <form className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Contact Me</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 animate-fadeInRight">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Get in Touch</h2>
            <p className="mb-2">Address: 1234 Street, City, Country</p>
            <p className="mb-2">Email: 9shila@gmail.com</p>
            <p className="text-sm">
              Feel free to contact me for projects and collaborations.
            </p>
          </div>
        </div>
      </div>
    );
  }
  