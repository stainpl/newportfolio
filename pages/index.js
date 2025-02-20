// pages/index.js
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Typewriter from "../components/Typewriter";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <Preloader />
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="text-white text-4xl mb-4">
          <Typewriter
            texts={["Hi There!👋..", "I'm Stain Pilar...", "I Build Web Applications...."]}
          />
        </div>
        <FloatingIcons />
      </main>
    </div>
  );
}
