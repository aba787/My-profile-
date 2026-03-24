import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "منصة شركة رابط مندوبين بالباعيين",
    link: "https://aba787.github.io/HSHS/",
    /* e-commerce/delivery abstract representation */
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80"
  },
  {
    title: "موقع ملعمة لغات",
    link: "https://aba787.github.io/Sanoora/",
    /* education/language abstract representation */
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80"
  },
  {
    title: "وريث موقع",
    link: "https://aba787.github.io/WAREETH/",
    /* legal/documents abstract representation */
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold inline-block relative">
            أعمالي
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-primary rounded-full"></div>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden glass-card hover-glow border-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5 rtl:-scale-x-100" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
