import Hero from "../components/Hero";
import PageWrapper from "@/components/PageWrapper";
export default function Viewer() {
  return (
    <div className="h-screen w-screen">
      <PageWrapper>
        <Hero />
      </PageWrapper>
    </div>
  );
}
