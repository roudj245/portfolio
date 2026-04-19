import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-accent transition-opacity duration-300"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          opacity: hidden ? 0 : 1,
        }}
      />
      <div
        className="pointer-events-none fixed z-40 h-[500px] w-[500px] rounded-full transition-opacity duration-500"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          opacity: hidden ? 0 : 0.18,
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.6) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </>
  );
};

export default CursorGlow;
