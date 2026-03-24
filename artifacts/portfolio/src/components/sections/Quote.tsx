import { FadeIn } from "@/components/ui/fade-in";
import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <QuoteIcon className="w-[400px] h-[400px] text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
              "القوة في التقنية مو بعدد المطورين، 
              <br className="hidden md:block" />
              <span className="text-gradient"> بل بجودة الحل وسرعة التنفيذ.</span>"
            </h2>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
