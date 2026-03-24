import { FadeIn } from "@/components/ui/fade-in";
import { Zap, MessageCircle, DollarSign, Settings } from "lucide-react";

const points = [
  { icon: Zap, text: "سرعة في التنفيذ" },
  { icon: MessageCircle, text: "تواصل مباشر بدون وسيط" },
  { icon: DollarSign, text: "تكلفة أقل مقابل نفس القيمة" },
  { icon: Settings, text: "مرونة عالية في التعديل" }
];

export function Positioning() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            الفرق بيني وبين <span className="text-primary">الشركات</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl leading-relaxed text-muted-foreground mb-12">
            الشركات الكبيرة تعتمد على فرق كبيرة وإجراءات بطيئة، وهذا يسبب تأخير وتكلفة أعلى. 
            أنا أقدم نفس الجودة (وأحيانًا أعلى) لكن بسرعة تنفيذ أكبر، تواصل مباشر، وتركيز كامل 
            على مشروعك بدون تعقيد إداري.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <point.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-foreground">{point.text}</h4>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
