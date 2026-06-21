import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import { CyberCursor } from "@/components/CyberCursor";
import { Particles } from "@/components/Particles";
import { MouseGlow } from "@/components/MouseGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamindla Jeevan — Python Full Stack Developer" },
      { name: "description", content: "Premium cyberpunk portfolio of Mamindla Jeevan — Python Full Stack Developer building intelligent, scalable and modern digital experiences." },
      { property: "og:title", content: "Mamindla Jeevan — Python Full Stack Developer" },
      { property: "og:description", content: "AI-powered, futuristic portfolio. Django, FastAPI, React, Next.js, AWS." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Particles />
      <MouseGlow />
      <CyberCursor />
      <main>
        <h1 className="sr-only">Mamindla Jeevan — Python Full Stack Developer Portfolio</h1>
        <Portfolio />
      </main>
    </>
  );
}
