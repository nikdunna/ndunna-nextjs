import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          Contact
        </h1>
        <div className="space-y-8 text-alabaster-400/80">
          <div className="space-y-2">
            <h2 className="text-xl font-doto text-fern_green-400">
              Get in Touch
            </h2>
            <p className="text-lg">
              I'm always open to new opportunities and collaborations. Shoot me an email or connect with me on LinkedIn!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:nik.dunna@gmail.com"
              className="block text-lg hover:text-fern_green-400 transition-colors duration-300"
            >
              📧 nik.dunna@gmail.com
            </a>
            <a
              href="https://github.com/nikdunna"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-fern_green-400 transition-colors duration-300"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/ndunna"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-fern_green-400 transition-colors duration-300"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
