import Hero from "../components/Hero";
import AnimatedBackground from "../components/AnimatedBackground";
export default function Viewer() {
  return (
    <div className="h-screen w-screen">
      <AnimatedBackground />
      <Hero />
    </div>
    
  );
}
