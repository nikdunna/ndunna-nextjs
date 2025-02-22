import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";

export default function About() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          About Me
        </h1>
        <div className="space-y-6 text-alabaster-400/80">
          <p className="text-lg">
            I'm a Computer Science student at the University of Georgia,
            passionate about building elegant solutions to complex problems.
          </p>
          <p className="text-lg">
            My journey in software development started with a curiosity about
            how things work, leading me to explore various technologies and
            frameworks.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning about the latest
            developments in tech.
          </p>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
