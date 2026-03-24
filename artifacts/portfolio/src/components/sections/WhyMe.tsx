import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "تركيز على النتائج مو الكلام",
  "تنفيذ احترافي من البداية للنهاية",
  "فهم تقني + تجاري للمشروع",
  "عقود واضحة تحفظ الحقوق",
  "دعم مستمر بعد التسليم",
  "مرونة في الدفع"
];

export function WhyMe() {
  return (
    <section className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ليش <span className="text-primary">تختارني؟</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8">
              النجاح في المشاريع التقنية لا يعتمد فقط على كتابة الكود، بل على الفهم الشامل لمتطلبات العمل وتقديم حلول تساهم في النمو الحقيقي.
            </p>
          </FadeIn>

          <FadeIn direction="left">
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-4 rounded-xl glass-card hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
