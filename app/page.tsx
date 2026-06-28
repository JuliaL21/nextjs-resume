export default function Home() {
  const tools = [
    { label: "Expert", text: "Adobe Illustrator (Vector Illustration, Logo Design, Iconography)" },
    { label: "Proficient", text: "Adobe Photoshop (Photo Manipulation, Mockups), Adobe InDesign (Editorial Layout, Multi-page Typography)" },
    { label: "Digital & Web", text: "Canva, Adobe Express, CapCut (Video Content), Basic Web Content Management" },
    { label: "Strategic", text: "Brand Strategy, UI/UX Principles for Social Media, Digital Ad Design" },
    { label: "Languages", text: "Portuguese (Fluent), English (Fluent), Spanish (Conversational)" },
  ];

  const experience = [
    {
      role: "Visual Identity & SEO Strategist",
      org: "Cosmic Cake Studio (Etsy)",
      date: "Nov 2025 – Present",
      bullets: [
        "Developed a comprehensive Brand Identity System, including primary/secondary logos, color palettes, and typography guidelines using Adobe Creative Suite.",
        "Designed a full suite of physical and digital brand assets, including product packaging, professional \"Thank You\" inserts, and business cards for 70+ global orders.",
        "Produced high-performing social media graphics and TikTok content, driving a total of 5,800+ shop visits through consistent visual storytelling.",
        "Managed SEO-driven visual marketing to ensure all product images and ad assets were optimized for maximum search visibility and customer conversion.",
      ],
    },
    {
      role: "Brand Specialist & PR Lead (Startup)",
      org: "Jetvoy.com",
      date: "Aug 2025 – Present",
      bullets: [
        "Directed the visual standards for a Web3 travel startup, ensuring brand-aligned messaging across all digital ad campaigns and marketing collateral.",
        "Supervised a team of 10 content creators, providing creative direction and quality control for all published visuals and graphics.",
        "Represented the brand with professional marketing materials at major industry presentations including Oracle + AMD.",
      ],
    },
    {
      role: "Audio and Visual Technician",
      org: "USF IT (Tampa, FL)",
      date: "Aug 2023 – Present",
      bullets: [
        "Manage technical AV systems and digital displays in the University's high-pressure environment.",
        "Ensure all visual assets and presentation hardware are calibrated for seamless, professional delivery to faculty and students.",
      ],
    },
  ];

  const projects = [
    { name: "SkyMedi Drone Service", text: "Created a futuristic visual identity for a humanitarian tech concept, including logistics-focused logos and professional ad mockups." },
    { name: "Editorial Layout (PCOS Power)", text: "Designed comprehensive magazine-style spreads using Canva and InDesign, balancing information with clean visual hierarchy." },
    { name: "Glow & Tell Co", text: "Developed 360-degree branding for a skincare line, spanning product packaging, event posters, and email marketing templates." },
  ];

  return (
    <main className="max-w-3xl mx-auto bg-white text-gray-800">
      <header className="bg-gray-900 text-white px-8 py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Julia Thron Lobo</h1>
        <p className="text-sm text-gray-300">Tampa, FL • jtlobowork@gmail.com</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
          <a href="https://julialobo.abacusai.app" className="text-indigo-300 hover:text-indigo-200 underline">Design Portfolio</a>
          <a href="https://linkedin.com/in/jtlobo/" className="text-indigo-300 hover:text-indigo-200 underline">LinkedIn</a>
        </div>
      </header>

      <div className="px-8 py-8">
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Visual Designer and Advertising student focused on Brand Identity, Digital Layout, and Technical Illustration.
            Experienced in creating high-impact assets for diverse industries, ranging from e-commerce brands to tech-driven logistics concepts.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Technical Design Tools</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {tools.map((t) => (
              <li key={t.label} className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold text-gray-900 min-w-[110px]">{t.label}:</span>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Design & Creative Experience</h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.org}>
                <div className="flex flex-wrap justify-between items-baseline gap-x-3">
                  <h3 className="text-base font-semibold text-gray-900">{job.role}</h3>
                  <span className="text-xs text-gray-500">{job.date}</span>
                </div>
                <p className="text-sm font-medium text-indigo-700 mb-2">{job.org}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Key Design Projects</h2>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.name}>
                <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-700">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Education</h2>
          <div className="flex flex-wrap justify-between items-baseline gap-x-3">
            <h3 className="text-base font-semibold text-gray-900">University of South Florida</h3>
            <span className="text-xs text-gray-500">Expected Dec 2026 • GPA: 3.66</span>
          </div>
          <p className="text-sm text-gray-700">B.A.S. in Integrated Public Relations & Advertising</p>
          <p className="text-sm text-gray-700">Minor in Business Analytics & Information Systems</p>
        </section>
      </div>

      <footer className="border-t border-gray-200 px-8 py-6 text-center text-xs text-gray-400">
        © 2026 Julia Thron Lobo • Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}