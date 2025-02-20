// pages/about.js
export default function About() {
  return (
    <div className="bg-black min-h-screen p-8 text-white pt-20 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-2xl w-full md:w-1/2 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/aPiLar.png"
            alt="big stain"
            className="w-32 h-32 rounded-full border-4 border-blue-400"
          />
        </div>
        <p className="text-center">
  <span className="text-2xl font-bold block mt-0">I'm Stain Pilar,</span>  
  <span className="text-lg font-semibold block mt-20 italic">
    A passionate web developer specializing in building high-quality web applications.  
    With expertise in React, Next.js and Tailwind CSS, I craft responsive, scalable, 
    and visual stunning digital experiences. My works reflects a seamless blend of creativity and technical precision,
     ensuring both functionality and aesthetic appeal
  </span>
</p>
        {/* Skills & Technologies Section */}
        <h2 className="mt-6 text-2xl font-semibold text-gray-600">Skills & Technologies</h2>
        <ul className="mt-3 flex flex-wrap justify-center gap-4 text-lg">
          <li className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">React.js</li>
          <li className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">Next.js</li>
          <li className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg">Tailwind CSS</li>
          <li className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">Node.js</li>
        </ul>
        {/* Social Icons */}
        <div className="mt-8 flex space-x-4 justify-center">
          <a href="https://github.com/stainpl" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/stainpilar" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://facebook.com/stainpl" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/stainspl" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
