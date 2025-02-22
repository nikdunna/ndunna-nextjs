import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";

const posts = [
  {
    title: "Getting Started with Next.js and TypeScript",
    date: "2024-03-15",
    excerpt:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript, including best practices and common pitfalls to avoid.",
    readTime: "5 min read",
  },
  {
    title: "The Power of Tailwind CSS",
    date: "2024-03-10",
    excerpt:
      "Exploring the benefits of utility-first CSS and how Tailwind CSS can streamline your development workflow.",
    readTime: "4 min read",
  },
  {
    title: "Building Responsive Layouts",
    date: "2024-03-05",
    excerpt:
      "Learn how to create responsive layouts that work seamlessly across all devices using modern CSS techniques.",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          Blog
        </h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border-b border-fern_green-500/20 pb-8 last:border-0"
            >
              <div className="flex items-center gap-4 text-sm text-alabaster-400/60 mb-2">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-doto text-fern_green-400 mb-3 hover:text-fern_green-300 transition-colors duration-300">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-alabaster-400/80">{post.excerpt}</p>
              <a
                href="#"
                className="inline-block mt-4 text-fern_green-400 hover:text-fern_green-300 transition-colors duration-300"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
