// components/Preloader.js
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // adjust duration as needed
    return () => clearTimeout(timer);
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
