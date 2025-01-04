import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
}: Project) {
  return (
    <Card className="group hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-lg">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {title} <ExternalLink className="w-3 h-3 inline" />
            </a>
          ) : (
            title
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
