// components/FloatingIcons.js
export default function FloatingIcons() {
    return (
      <>
        <div className="absolute animate-float left-10 top-20">
          <img src="/react.png" alt="React" className="w-20 h-20" />
        </div>
        <div className="absolute animate-float right-10 top-32">
          <img src="/next.png" alt="Next.js" className="w-20 h-20" />
        </div>
        <div className="absolute animate-float left-20 bottom-20">
          <img src="/node.png" alt="Node.js" className="w-20 h-20" />
        </div>
        <div className="absolute animate-float right-20 bottom-20">
          <img src="/tailwind.jpg" alt="Tailwind CSS" className="w-20 h-20" />
        </div>
      </>
    );
  }
  