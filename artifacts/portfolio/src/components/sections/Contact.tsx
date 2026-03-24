import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سأقوم بالرد عليك في أقرب وقت ممكن.",
      className: "bg-green-600 text-white border-none",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-purple-100 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> الاسم
                  </label>
                  <Input 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border-white/10 h-12 focus-visible:ring-primary text-white text-right" 
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
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
