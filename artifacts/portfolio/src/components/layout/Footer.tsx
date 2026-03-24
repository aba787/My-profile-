export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/10 blur-[100px] pointer-events-none rounded-t-full"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="overflow-hidden rounded-full h-12 w-12 border-2 border-primary/40">
            <img src="/logo.jpeg" alt="آدا" className="h-full w-full object-cover" />
          </div>
          <span className="font-display font-bold text-3xl text-white">آدا</span>
        </div>
        
        <p className="text-purple-200/80 font-medium mb-8 max-w-md">
          خبيرة تقنية – أمن سيبراني – تطوير مواقع – تصميم – تسويق
        </p>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} جود عبد الفتاح. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
