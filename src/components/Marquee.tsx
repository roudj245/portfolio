const Marquee = () => {
  const words = ["Full Stack", "Web Developer", "ESI Algiers", "Backend", "Frontend", "AI / RAG", "Open to Work"];
  const loop = [...words, ...words];
  return (
    <div className="border-y border-border overflow-hidden py-6 bg-background">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="mx-8 text-4xl md:text-6xl font-mono uppercase tracking-tight">
            {w} <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
