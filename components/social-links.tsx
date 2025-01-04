import { Twitter, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/luizfonsecacc" },
  { icon: Linkedin, href: "https://linkedin.com/in/luizcfonseca" },
  { icon: Github, href: "https://github.com/luizfonseca" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link, i) => {
        const Icon = link.icon;
        return (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
