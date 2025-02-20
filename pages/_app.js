// pages/_app.js
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* Navbar always rendered */}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}  // Use pathname for unique keys
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
