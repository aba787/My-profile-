import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";

const RECEIVER_EMAIL = "shamkory930@gmail.com";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `رسالة جديدة من ${formData.name} - موقع جود عبد الفتاح`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("فشل الإرسال");
      }
    } catch {
      toast({
        title: "حدث خطأ أثناء الإرسال",
        description: "يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر البريد الإلكتروني.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold inline-block relative">
            تواصل معي
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-primary rounded-full"></div>
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn direction="up">
            <div className="glass-card p-8 rounded-3xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">تم الإرسال بنجاح!</h3>
                  <p className="text-muted-foreground">شكراً لتواصلك، سأرد عليك في أقرب وقت ممكن.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-white/10 hover:border-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال رسالة أخرى
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-purple-100 flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> الاسم
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary text-white"
                      placeholder="اكتب اسمك هنا..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-purple-100 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" /> البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary text-white text-left"
                      placeholder="example@domain.com"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-purple-100 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" /> الرسالة
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 min-h-[150px] resize-y focus-visible:ring-primary text-white"
                      placeholder="كيف يمكنني مساعدتك؟"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] group"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">جاري الإرسال...</span>
                    ) : (
                      <>
                        إرسال
                        <Send className="mr-2 w-5 h-5 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform rtl:scale-x-[-1]" />
                      </>
                    )}
                  </Button>

                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
