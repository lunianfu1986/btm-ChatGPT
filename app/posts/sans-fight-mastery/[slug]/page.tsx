// app/posts/sans-fight-mastery/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

type PageProps = {
  params: { slug: string };
};

export default function SansFightPostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

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
            <button className="hidden sm:inline-flex items-center text-sm px-4 py-1.5 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition">
              Log in
            </button>
            <button className="inline-flex items-center text-sm px-4 py-1.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft transition shadow-bts-soft">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* 正文 */}
      <main className="max-w-3xl mx-auto px-4 lg:px-0 py-8 lg:py-10 space-y-6 text-base">
        <div className="flex items-center justify-between gap-3 mb-2">
          <Link
            href="/posts/sans-fight-mastery"
            className="text-sm text-slate-300 hover:text-bts-accent"
          >
            ← Back to Sans Fight Mastery
          </Link>
          <span className="text-xs text-slate-400">
            {post.date} • {post.readTime}
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
            Sans Fight Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            {post.title}
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden border border-bts-border/80 bg-black/70">
          <div className="relative w-full pt-[50%]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 模拟的正文段落，你后续可以改成从 MD 文件读取 */}
        <article className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            This guide is part of the Sans Fight Mastery series for Bad Time
            Simulator. Here we break down core mechanics, show how to read
            patterns, and give you tools to survive longer in every phase.
          </p>
          <p>
            Start by focusing on consistency over speed. It is far better to
            survive the same attack 10 times in a row than to barely clear it
            once. Use Practice mode whenever possible to repeat specific
            patterns that you find difficult.
          </p>
          <p>
            Pay attention to your SOUL hitbox. You often need only tiny
            movements to avoid taking damage. Overreacting is one of the most
            common reasons players get hit, especially during fast bone
            barrages or blaster sequences.
          </p>
          <h2>Key Takeaways</h2>
          <ul>
            <li>Memorize the order of early patterns to reduce panic.</li>
            <li>Use micro-movements whenever bullets are dense.</li>
            <li>Take short breaks if your focus starts dropping.</li>
            <li>Use Endless or Practice modes as training tools.</li>
          </ul>
          <p>
            As you improve, you can combine these principles with advanced
            routing and no-hit strategies from other guides in this series.
          </p>
        </article>
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
