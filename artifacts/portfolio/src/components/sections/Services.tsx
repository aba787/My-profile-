import { FadeIn } from "@/components/ui/fade-in";
import { Code, ShieldCheck, PenTool, TrendingUp, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "التطوير والبرمجة",
    description: "تطوير مواقع احترافية، تطبيقات جوال، أنظمة مخصصة، وحلول ذكاء اصطناعي تتناسب مع احتياجاتك."
  },
  {
    icon: ShieldCheck,
    title: "الأمن السيبراني",
    description: "فحص الثغرات، اختبار الاختراق، وتأمين الأنظمة لضمان حماية بياناتك من أي هجمات خارجية."
  },
  {
    icon: PenTool,
    title: "التصميم",
    description: "هوية بصرية كاملة، تصميم واجهات المستخدم UI/UX، بالإضافة إلى شعارات ومنشورات احترافية."
  },
  {
    icon: TrendingUp,
    title: "التسويق",
    description: "وضع استراتيجيات تسويق، إدارة حملات إعلانية، وبناء العلامة التجارية (Branding) لزيادة مبيعاتك."
  },
  {
    icon: Lightbulb,
    title: "استشارات وتدريب",
    description: "استشارات تقنية لنمو مشروعك، كورسات عملية، ودعم فني مستمر لحل المشاكل التقنية."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold inline-block relative">
            خدماتي
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-primary rounded-full"></div>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn 
              key={i} 
              delay={i * 0.1}
              className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="glass-card p-8 rounded-2xl h-full hover-glow group transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
