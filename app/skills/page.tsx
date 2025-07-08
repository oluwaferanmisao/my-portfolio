import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { category: "Mobile Development", items: ["Flutter", "Dart", "Android", "iOS"] },
  { category: "Web Development", items: ["WordPress", "HTML", "CSS", "React"] },
  { category: "Tools & Others", items: ["Git", "Firebase", "RESTful APIs", "UI/UX Design"] },
]

export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 animate-fade-in-up">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-card text-card-foreground animate-fade-in-up border border-primary/20 shadow-lg transition-all hover:shadow-primary/25 hover:border-primary/30" style={{animationDelay: `${index * 200}ms`}}>
            <CardHeader>
              <CardTitle className="text-primary">{skill.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
