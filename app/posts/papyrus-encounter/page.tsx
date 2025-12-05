// app/posts/papyrus-encounter/page.tsx
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
    slug: "papyrus-intro-fight",
    title: "Papyrus Encounter: First-Time Fight Overview",
    excerpt:
      "Understand Papyrus’ playful attack patterns and how his fight differs from Sans and other bosses.",
    date: "2025-02-01",
    readTime: "5 min read",
    tag: "Overview",
    image: "/images/bts-papyrus-1.jpg",
  },
  {
    slug: "blue-attack-training",
    title: "Training With Papyrus’ Blue Attacks",
    excerpt:
      "Use Papyrus as a friendly training ground for blue soul jumps, spacing and timing.",
    date: "2025-02-04",
    readTime: "7 min read",
    tag: "Training",
    image: "/images/bts-papyrus-2.jpg",
  },
  {
    slug: "spare-papyrus-route",
    title: "How to Spare Papyrus and Unlock His Dialogue",
    excerpt:
      "A route-focused guide on sparing Papyrus, keeping the tone of the fight light and funny.",
    date: "2025-02-07",
    readTime: "6 min read",
    tag: "Pacifist",
    image: "/images/bts-papyrus-3.jpg",
  },
  {
    slug: "papyrus-hard-mode",
    title: "Papyrus Hard Mode: Fan-Made Challenge Variants",
    excerpt:
      "Explore community-made Papyrus encounters with denser patterns and faster bones.",
    date: "2025-02-10",
    readTime: "8 min read",
    tag: "Fan Content",
    image: "/images/bts-papyrus-4.jpg",
  },
  {
    slug: "dialogue-best-lines",
    title: "Best Papyrus Lines and Hidden Dialogue Triggers",
    excerpt:
      "Discover Papyrus’ funniest lines and lesser-known dialogue triggers in different routes.",
    date: "2025-02-13",
    readTime: "4 min read",
    tag: "Lore",
    image: "/images/bts-papyrus-5.jpg",
  },
  {
    slug: "papyrus-and-sans-synergy",
    title: "Papyrus vs Sans: Learning Both Brothers’ Styles",
    excerpt:
      "Compare how Papyrus and Sans teach different skills – and how mastering both makes you stronger.",
    date: "2025-02-16",
    readTime: "7 min read",
    tag: "Comparison",
    image: "/images/bts-papyrus-6.jpg",
  },
];

export default function PapyrusEncounterPage() {
  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-b from-[#030b2a] via-[#02061a] to-[#010312]">
      {/* 顶部导航 */}
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
                className="hover:text-white"
              >
                Sans Fight Mastery
              </Link>
              <Link
                href="/posts/papyrus-encounter"
                className="text-white font-semibold"
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
                placeholder="Search Papyrus guides..."
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
              Guides • Papyrus
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Papyrus Encounter Guides
            </h1>
            <p className="mt-2 text-base text-slate-300 max-w-2xl leading-relaxed">
              Strategy notes, Pacifist routes and fun lore moments centered
              around Papyrus – the most enthusiastic skeleton in the Underground.
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
