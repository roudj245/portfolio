import { useEffect, useState } from "react";
import CursorGlow from "@/components/CursorGlow";
import Marquee from "@/components/Marquee";
import { useReveal } from "@/hooks/useReveal";
import myPic from "@/my-pic.jpg";

const profile = [
  { k: "Name", v: "Roudj Abdelghani" },
  { k: "Role", v: "Full Stack Web Developer" },
  { k: "School", v: "ESI Algiers — 2nd Year" },
  { k: "Focus", v: "LangChain & RAG with Python" },
  { k: "Status", v: "Open for Freelance & Collabs" },
];

const stacks = {
  Frontend: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  Backend: ["FastAPI", "Express.js" , "Next.js" , "Django"],
  "AI / ML": ["Python", "LangChain"],
  Languages: ["Java", "C"],
};

const projects = [
  {
    n: "01",
    title: "Restaurant Order Kiosk",
    tag: "Freelance",
    desc: "Complete frontend for a restaurant order kiosk with an active admin dashboard to manage products, orders, and kiosk configuration in real-time.",
    link: null,
  },
  {
    n: "02",
    title: "Tassyir",
    tag: "In Progress",
    desc: "School management platform designed for Algerian institutions: management of students, schedules, grades, and school-parent communication.",
    link: null,
  },
  {
    n: "03",
    title: "ESICodeHub",
    tag: "Team Lead · Backend",
    desc: "2nd-year annual project at ESI: a GitHub-like platform dedicated to the school's students. Team Lead and backend manager, API architecture, auth, and repository management.",
    link: "https://esicodehub.vercel.app/",
  },
];

const minis = [
  {
    title: "Epstimisignum Club",
    desc: "Official website of the Epstimisignum club at ESI: presentation of the team, activities, and events.",
    link: "https://epstimisignum.vercel.app",
  },
  {
    title: "Bac Bla Khl3a",
    desc: "Event website by the club to help high schoolers manage their stress before the baccalaureate exam.",
    link: "https://bacblakhl3a.vercel.app",
  },
  {
    title: "AUP4 Hackathon",
    desc: "Contribution to the official website of the AUP4 hackathon organized by the ETIC club: development of the Flashback section.",
    link: "https://aup.etic-club.net/",
  },
];

const hackathons = [
  {
    n: "01",
    title: "MicroHack",
    organizer: "Micro Club",
    desc: "Designed PortFlow, a booking and visibility solution for regulating truck access to maritime port terminals.",
    link: "https://github.com/roudj245/portflow",
  },
  {
    n: "02",
    title: "AUP4 Hackathon",
    organizer: "ETIC Club",
    desc: "Built a central digital solution for the wool supply chain, with priority on improving the collection phase.",
    link: "https://github.com/roudj245/AUP_SOLUTION",
  },
  {
    n: "03",
    title: "TC",
    organizer: "ETIC Club",
    desc: "Worked on a support-ticket intelligence solution to improve visibility, traceability, and knowledge-base search.",
    link: "https://github.com/roudj245/Solution1_TC",
  },
  {
    n: "04",
    title: "ETCODE",
    organizer: "ETC",
    desc: "Participated in a programming and problem-solving competition.",
    link: null,
  },
];

const socials = [
  {
    name: "GitHub",
    handle: "roudj245",
    href: "https://github.com/roudj245",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Roudj Abdelghani",
    href: "https://www.linkedin.com/in/roudj-abdelghani-aa3a10335/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z"/></svg>
    ),
  },
  {
    name: "Instagram",
    handle: "roudjabdelghani",
    href: "https://www.instagram.com/roudjabdelghani/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.71-2.13 1.38C1.34 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.34 20.65.93 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
    ),
  },
  {
    name: "Phone",
    handle: "+213-0553314664",
    href: "0553314664",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.07 15.07 0 01-6.59-6.59l2.2-2.21a1 1 0 00.25-1A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z"/></svg>
    ),
  },
];

const Index = () => {
  useReveal();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Algiers",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground noise">
      <CursorGlow />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="font-mono text-sm tracking-tight flex items-center gap-2">
            <img 
              src={myPic} 
              alt="Logo" 
              className="w-6 h-6 rounded-full object-cover border border-accent/30" 
            />
            Abdelghani.dev
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wider">
            <a href="#about" className="hover-line text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#stack" className="hover-line text-muted-foreground hover:text-foreground transition-colors">Stack</a>
            <a href="#work" className="hover-line text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="hover-line text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            ALGIERS <span className="text-accent">{time}</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] float" />

        <div className="container relative z-10">

          <h1 className="reveal text-[14vw] md:text-[10vw] leading-[0.9] font-bold tracking-[-0.04em] text-balance">
            <span className="flex items-center gap-4 md:gap-8 flex-wrap">
              Roudj
              <img 
                src={myPic} 
                alt="Roudj Abdelghani" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover overflow-hidden" 
              />
            </span>
            Abdelghani<span className="text-accent blink">.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl">
            <div className="md:col-span-2 reveal">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Full Stack Web Developer, currently building things at{" "}
                <span className="text-foreground">ESI</span>. I design and ship web products end-to-end —
                from clean frontends to robust backends, with a growing focus on AI & RAG
              </p>
            </div>
            <div className="reveal font-mono text-xs space-y-3 border-l border-border pl-6">
              <div><span className="text-muted-foreground">EDU</span> ESI — 2nd year</div>
              <div><span className="text-muted-foreground">SRV</span> Freelance · Collabs</div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Available now
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-6 reveal">
            <a href="#work" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">
              View Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="font-mono text-sm uppercase tracking-wider hover-line">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">01 / About</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Who.</h2>
          </div>
          <div className="md:col-span-8 reveal">
            <div className="space-y-0 border-t border-border">
              {profile.map((p) => (
                <div key={p.k} className="grid grid-cols-3 py-5 border-b border-border group hover:bg-secondary/40 transition-colors px-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-1">{p.k}</div>
                  <div className="col-span-2 text-lg md:text-xl">{p.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-muted-foreground leading-relaxed max-w-2xl">
              I love building products that feel fast, look sharp and actually solve a problem. Whether it's
              a freelance gig, a school platform or our team's open-source side project — I'm in.
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-32 border-t border-border bg-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">02 / Stack</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Tools.</h2>
            </div>
            <div className="md:col-span-8 reveal text-muted-foreground text-lg max-w-xl">
              The technologies I reach for daily — from interface to API, with a side of AI.
            </div>
          </div>

          <div className="space-y-12">
            {Object.entries(stacks).map(([cat, items]) => (
              <div key={cat} className="reveal grid md:grid-cols-12 gap-8 border-t border-border pt-8">
                <div className="md:col-span-3 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {cat}
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-3">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 border border-border font-mono text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 container">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">03 / Work</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Projects.</h2>
          </div>
          <div className="md:col-span-8 reveal text-muted-foreground text-lg max-w-xl">
            Selected projects I've shipped or I'm currently building.
          </div>
        </div>

        <div className="space-y-0 border-t border-border">
          {projects.map((p) => {
            const content = (
              <>
                <div className="md:col-span-1 font-mono text-sm text-muted-foreground">{p.n}</div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-2 font-mono text-xs uppercase tracking-wider text-muted-foreground pt-2">
                  {p.tag}
                </div>
                <div className="md:col-span-5 text-muted-foreground leading-relaxed">
                  <p>{p.desc}</p>
                  {p.link && (
                    <div className="mt-4 font-mono text-xs uppercase tracking-wider text-accent">
                      Click to open site -&gt;
                    </div>
                  )}
                </div>
              </>
            );

            if (p.link) {
              return (
                <a
                  key={p.n}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="reveal group grid md:grid-cols-12 gap-6 py-10 border-b border-border hover:bg-secondary/30 transition-colors px-2 cursor-pointer"
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={p.n}
                className="reveal group grid md:grid-cols-12 gap-6 py-10 border-b border-border hover:bg-secondary/30 transition-colors px-2"
              >
                {content}
              </article>
            );
          })}
        </div>

        {/* HACKATHONS */}
        <div className="mt-32">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">04 / Hackathons</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Challenges.</h2>
            </div>
            <div className="md:col-span-8 reveal text-muted-foreground text-lg max-w-xl">
              Hackathons and programming competitions where I worked on practical solutions under time pressure.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((h) => {
              const card = (
                <>
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-3">{h.n}</div>
                      <h3 className="text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">
                        {h.title}
                      </h3>
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground text-right">
                      {h.organizer}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                  {h.link && (
                    <div className="mt-8 font-mono text-xs text-accent truncate">
                      View GitHub solution -&gt;
                    </div>
                  )}
                </>
              );

              if (h.link) {
                return (
                  <a
                    key={h.title}
                    href={h.link}
                    target="_blank"
                    rel="noreferrer"
                    className="reveal group block border border-border p-8 hover:border-accent hover:bg-secondary/40 transition-all"
                  >
                    {card}
                  </a>
                );
              }

              return (
                <article
                  key={h.title}
                  className="reveal group border border-border p-8"
                >
                  {card}
                </article>
              );
            })}
          </div>
        </div>

        {/* MINIS */}
        <div className="mt-32">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">05 / Side</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Mini works.</h2>
            </div>
            <div className="md:col-span-8 reveal text-muted-foreground text-lg max-w-xl">
              Smaller sites & contributions for clubs and events.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {minis.map((m) => (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noreferrer"
                className="reveal group block border border-border p-8 hover:border-accent hover:bg-secondary/40 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {m.title}
                  </h3>
                  <span className="font-mono text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{m.desc}</p>
                <div className="font-mono text-xs text-muted-foreground truncate">
                  {m.link.replace("https://", "")}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 border-t border-border relative">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container relative">
          <div className="reveal font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            06 / Contact
          </div>
          <h2 className="reveal text-6xl md:text-[12vw] leading-[0.9] font-bold tracking-[-0.04em] mb-16">
            Let's
            <br />
            build<span className="text-accent">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="reveal group flex items-center justify-between border border-border p-6 hover:border-accent hover:bg-secondary/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">
                    {s.icon}
                  </span>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {s.name}
                    </div>
                    <div className="text-base">{s.handle}</div>
                  </div>
                </div>
                <span className="font-mono text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 container flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>© 2026 Roudj Abdelghani — All rights reserved.</div>
        <div>Designed & built in Algiers <span className="text-accent">●</span></div>
      </footer>
    </div>
  );
};

export default Index;
