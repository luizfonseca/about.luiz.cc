import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Brain, Globe } from 'lucide-react'

const passions = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Passionate about building scalable, maintainable systems with clean code principles and SOLID patterns."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Exploring the intersection of AI and software engineering to create intelligent, adaptive solutions."
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects that make a difference in the developer community."
  }
]

export function TechPassions() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {passions.map((passion) => {
        const Icon = passion.icon
        return (
          <Card key={passion.title} className="bg-card/50 backdrop-blur">
            <CardHeader>
              <Icon className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">{passion.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{passion.description}</CardDescription>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

