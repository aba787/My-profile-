const platforms = [
  "ChatGPT", "Canva", "Google Cloud", "AWS", "GitHub", 
  "Figma", "Notion", "OpenAI", "Firebase", "Stripe"
];

export function TrustBar() {
  return (
    <section className="py-16 overflow-hidden relative border-b border-white/5">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-xl font-semibold text-muted-foreground">تقنيات ومنصات أعمل عليها</h3>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Wrapper */}
        <div className="flex w-max animate-marquee space-x-12 rtl:space-x-reverse">
          {/* Double the content to create seamless loop */}
          {[...platforms, ...platforms].map((platform, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center min-w-[150px]"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-white/20 uppercase tracking-wider">
                {platform}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          تم العمل باستخدام هذه المنصات في تطوير حلول، بناء أنظمة، أو تحسين الأداء لمشاريع مختلفة.
        </p>
      </div>
    </section>
  );
}
