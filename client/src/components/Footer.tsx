export default function Footer() {
  return (
    <footer className="border-t border-primary/10 mt-20 bg-accent/30">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p className="font-medium">© 2024 MokuSetu Group G.K. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors duration-300 font-medium">Services</a>
            <a href="#vmv" className="hover:text-primary transition-colors duration-300 font-medium">Vision & Mission</a>
            <a href="#usp" className="hover:text-primary transition-colors duration-300 font-medium">Why Us</a>
            <a href="#blog" className="hover:text-primary transition-colors duration-300 font-medium">Blog</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300 font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="/privacy-policy" className="hover:text-primary transition-colors duration-300 font-medium">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-primary transition-colors duration-300 font-medium">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


