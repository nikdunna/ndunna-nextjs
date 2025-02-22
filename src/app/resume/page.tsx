import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";

export default function Resume() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          Resume
        </h1>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-doto text-fern_green-400 mb-6">
            Education
          </h2>
          <div className="border-l-2 border-fern_green-500/20 pl-6">
            <div className="mb-6">
              <h3 className="text-xl text-alabaster-400">
                University of Georgia
              </h3>
              <p className="text-alabaster-400/60">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-alabaster-400/60">Expected Graduation: 2025</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-doto text-fern_green-400 mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="text-alabaster-400">Languages</h3>
              <ul className="text-alabaster-400/60 space-y-1">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-alabaster-400">Frameworks</h3>
              <ul className="text-alabaster-400/60 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-alabaster-400">Tools</h3>
              <ul className="text-alabaster-400/60 space-y-1">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-doto text-fern_green-400 mb-6">
            Experience
          </h2>
          <div className="border-l-2 border-fern_green-500/20 pl-6 space-y-8">
            <div>
              <h3 className="text-xl text-alabaster-400">
                Software Engineering Intern
              </h3>
              <p className="text-alabaster-400/60">
                Company Name • Summer 2023
              </p>
              <ul className="list-disc list-inside text-alabaster-400/60 mt-2 space-y-1">
                <li>
                  Developed and maintained web applications using React and
                  Node.js
                </li>
                <li>
                  Collaborated with senior developers on large-scale projects
                </li>
                <li>
                  Implemented new features and fixed bugs in existing codebase
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-alabaster-400">Research Assistant</h3>
              <p className="text-alabaster-400/60">
                University of Georgia • 2022-2023
              </p>
              <ul className="list-disc list-inside text-alabaster-400/60 mt-2 space-y-1">
                <li>Conducted research on machine learning algorithms</li>
                <li>Published findings in academic journals</li>
                <li>Presented research at conferences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 font-doto text-alabaster-400 border border-fern_green-500/40 rounded-lg hover:bg-fern_green-500/10 hover:border-fern_green-500/60 transition-all duration-300"
          >
            Download Full Resume →
          </a>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
