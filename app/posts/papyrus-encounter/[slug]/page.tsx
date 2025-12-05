// app/posts/papyrus-encounter/[slug]/page.tsx
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

type PageProps = {
  params: { slug: string };
};

export default function PapyrusPostPage({ params }: PageProps) {
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
            href="/posts/papyrus-encounter"
            className="text-sm text-slate-300 hover:text-bts-accent"
          >
            ← Back to Papyrus Guides
          </Link>
          <span className="text-xs text-slate-400">
            {post.date} • {post.readTime}
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
            Papyrus Guide
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

        <article className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            This article focuses on Papyrus and how his encounter teaches core
            movement and timing skills in a more forgiving context compared to
            Sans. Use this fight to build comfort with blue soul jumps and
            controlled spacing.
          </p>
          <p>
            Pay attention to how Papyrus telegraphs his attacks. Many of his
            patterns give you more time to react, which makes this fight
            perfect for newer players or for warming up before harder runs.
          </p>
          <p>
            If you are playing a Pacifist or friendly route, learning how to
            spare Papyrus and trigger unique dialogue can add a lot of charm and
            replay value to the encounter.
          </p>
          <h2>Things to Practice</h2>
          <ul>
            <li>Blue soul jump height control.</li>
            <li>Reading bone spacing before you move.</li>
            <li>Maintaining calm even when attacks speed up.</li>
            <li>Experimenting with different defensive habits.</li>
          </ul>
          <p>
            Once you feel confident against Papyrus, many of these skills will
            transfer directly into more intense fights, including Sans and
            custom Bad Time Simulator variants.
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
