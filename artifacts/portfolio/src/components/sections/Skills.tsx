import { FadeIn } from "@/components/ui/fade-in";

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "React", "Node.js", 
  "Java", "C++", "C#", "PHP", "TypeScript", "MySQL", 
  "MongoDB", "Docker", "Vue", "Angular"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold inline-block relative">
            التقنيات
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-primary rounded-full"></div>
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <FadeIn 
              key={skill} 
              delay={i * 0.05} 
              direction="up"
            >
              <div className="px-6 py-3 rounded-full glass-card hover-glow cursor-default text-lg font-medium text-purple-100/90 hover:text-white transition-colors bg-white/5 hover:bg-primary/20">
                {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
