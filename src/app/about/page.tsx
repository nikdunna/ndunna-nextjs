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
            I'm a 3rd year Computer Science student at the University of
            Georgia, passionate about building elegant solutions to complex
            problems.
          </p>
          <p className="text-lg">
            My journey in software development started with a curiosity in
            robotics, leading me to explore the worlds of VEX and FRC Robotics
            Competitions. I loved taking up the 'coder' role and began to
            explore beyond the robotics arena. Nowadays, I'm in the world of
            full-stack development and treat my projects as art.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me playing and coaching
            volleyball, building side robotics projects, or messing with my
            homelab.
          </p>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
