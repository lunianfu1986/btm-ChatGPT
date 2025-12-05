// app/posts/sans-fight-mastery/page.tsx
import Image from "next/image";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
};

const posts: Post[] = [
  {
    slug: "sans-pattern-basics",
    title: "Sans Fight Basics: Learn Every Core Attack Pattern",
    excerpt:
      "A beginner-friendly breakdown of the core phases in the Sans fight – from opening slashes to final blaster waves.",
    date: "2025-01-02",
    readTime: "6 min read",
    tag: "Beginner Guide",
    image: "/images/bts-post-1.jpg",
  },
  {
    slug: "blue-soul-control",
    title: "Mastering Blue SOUL Gravity and Micro Movement",
    excerpt:
      "Learn how to move with precision while locked in blue soul gravity – the key to surviving tight bone tunnels.",
    date: "2025-01-05",
    readTime: "8 min read",
    tag: "Movement",
    image: "/images/bts-post-2.jpg",
  },
  {
    slug: "endless-mode-survival",
    title: "Endless Mode Survival: Last Longer in Bad Time Simulator",
    excerpt:
      "Understand how Endless mode scales difficulty and how to pace your focus for long sessions.",
    date: "2025-01-09",
    readTime: "7 min read",
    tag: "Endless Mode",
    image: "/images/bts-post-3.jpg",
  },
  {
    slug: "no-hit-strategies",
    title: "No-Hit Strategies for Advanced Sans Players",
    excerpt:
      "Ready to push your limits? These routes and habits are designed for no-hit or low-hit runs.",
    date: "2025-01-12",
    readTime: "9 min read",
    tag: "Advanced",
    image: "/images/bts-post-4.jpg",
  },
  {
    slug: "practice-mode-routing",
    title: "Using Practice Mode to Fix Your Weak Spots",
    excerpt:
      "Stop randomly grinding. Use practice mode to systematically fix the patterns that always kill you.",
    date: "2025-01-15",
    readTime: "5 min read",
    tag: "Practice",
    image: "/images/bts-post-5.jpg",
  },
  {
    slug: "input-devices",
    title: "Keyboard vs Controller: What’s Best for Sans Fights?",
    excerpt:
      "We compare keyboard, controller and hybrid setups so you can choose the best input for precise dodging.",
    date: "2025-01-18",
    readTime: "4 min read",
    tag: "Setup",
    image: "/images/bts-post-6.jpg",
  },
];

export default function SansFightMasteryPage() {
  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-b from-[#030b2a] via-[#02061a] to-[#010312]">
      {/* 顶部导航（与首页保持一致） */}
      <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-r from-[#1350d4] via-[#2337b7] to-[#1350d4] border-b border-bts-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-semibold tracking-tight text-lg md:text-xl hover:text-white"
            >
              Bad Time Simulator
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-base text-slate-200">
              <Link href="/games" className="hover:text-white">
                All Games
              </Link>
              <Link
                href="/posts/sans-fight-mastery"
                className="text-white font-semibold"
              >
                Sans Fight Mastery
              </Link>
              <Link
                href="/posts/papyrus-encounter"
                className="hover:text-white"
              >
                Papyrus Encounter
              </Link>
              <button className="hover:text-white">Play Deltarune</button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-[#020b27]/80 border border-bts-border/80 rounded-full px-3 py-1.5 text-base text-slate-100 min-w-[260px]">
              <span className="mr-2 opacity-70 text-lg">🔍</span>
              <input
                className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-400"
                placeholder="Search Sans guides..."
              />
            </div>
            <button className="hidden sm:inline-flex items-center text-sm px-4 py-1.5 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition">
              Log in
            </button>
            <button className="inline-flex items-center text-sm px-4 py-1.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft transition shadow-bts-soft">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-10 space-y-6 text-base">
        {/* 顶部标题区 */}
        <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-sm text-slate-300 uppercase tracking-[0.2em] mb-1">
              Guides • Sans Fight
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Sans Fight Mastery
            </h1>
            <p className="mt-2 text-base text-slate-300 max-w-2xl leading-relaxed">
              Deep-dive guides, strategies and pattern breakdowns to help you
              survive – and master – every phase of the Sans fight in Bad Time
              Simulator.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-bts-card-soft border border-bts-border/80 text-sm text-slate-200 hover:border-bts-accent hover:text-bts-accent transition"
          >
            ← Back to homepage
          </Link>
        </section>

        {/* 文章网格：两行 × 三列（共 6 篇） */}
        <section className="grid md:grid-cols-3 gap-6 mt-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-bts-card rounded-3xl border border-bts-border/80 shadow-bts-soft flex flex-col overflow-hidden"
            >
              <div className="relative w-full pt-[60%] bg-black/70 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#1b2a6f] text-[11px] font-medium text-slate-100">
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 whitespace-nowrap">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-base md:text-lg font-semibold leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>{post.date}</span>
                  <Link
                    href="#"
                    className="text-bts-accent hover:text-bts-accent-soft"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-bts-border/80 mt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">
              Bad Time Simulator
            </span>
            <span>© {new Date().getFullYear()} bad-time-simulator.com</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-slate-200">About Us</button>
            <button className="hover:text-slate-200">Contact</button>
            <button className="hover:text-slate-200">Game Guide</button>
            <button className="hover:text-slate-200">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
