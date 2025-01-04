import Image from "next/image";
import { Birds } from "@/components/birds";
import { SocialLinks } from "@/components/social-links";
import { ProjectCard } from "@/components/project-card";
import { TechPassions } from "@/components/tech-passion";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = [
    {
      title: "Proksi",
      description: "Batteries-included proxy based on Cloudflare Pingora",
      technologies: ["Rust", "Webassembly"],
      link: "https://docs.proksi.info",
    },
    {
      title: "Vigio",
      description:
        "A modern monitoring solution for your applications using AI",
      technologies: ["Go", "Next.JS", "PostgreSQL", "NATS", "K8s"],
      link: "https://vigio.io",
    },
    {
      title: "Docker Swarm Stack (DSS)",
      description: "A starter template for Docker Swarm deployments",
      technologies: ["Docker", "Grafana", "Prometheus"],
      link: "https://github.com/luizfonseca/docker-swarm-stack",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Birds />

      <main className="flex-1 container mx-auto px-4 py-8 space-y-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center space-y-8 pt-20">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary">
            <Image
              src="https://avatars.githubusercontent.com/u/249782?v=4"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Luiz Fonseca
            </h1>
            <h2 className="text-3xl font-medium text-muted-foreground">
              Fullstack Software Engineer
            </h2>
            <p className="text-md text-neutral-500 max-w-2xl">
              15+ years of experience building scalable software solutions.
            </p>
          </div>

          <Button asChild>
            <a href="https://www.linkedin.com/in/luizcfonseca">Get in touch</a>
          </Button>
        </section>

        {/* Tech Passions Section */}
        <section className="space-y-8">
          <TechPassions />
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border border-neutral-900 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="font-bold"></span>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
