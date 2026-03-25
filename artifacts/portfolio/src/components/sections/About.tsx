import { FadeIn } from "@/components/ui/fade-in";
import { Award, Code2, GraduationCap, FolderKanban } from "lucide-react";

const stats = [
  { icon: Award, label: "أكثر من 20", title: "شهادة تقنية" },
  { icon: Code2, label: "+5 سنوات", title: "خبرة عملية" },
  { icon: GraduationCap, label: "+50 طالب", title: "تم مساعدتهم" },
  { icon: FolderKanban, label: "+37 مشروع", title: "تم تنفيذه" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                من <span className="text-primary">أنا</span>
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-semibold text-foreground">جود عبد الفتاح</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                مبرمجة ومتخصصة في تطوير المواقع والتطبيقات، أعمل على بناء حلول تقنية متكاملة تشمل البرمجة، الفحص الأمني، وتحسين الأداء. أركز على تقديم نتائج عملية، مو مجرد تنفيذ.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover-glow group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-foreground block mb-1">{stat.label}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.title}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
