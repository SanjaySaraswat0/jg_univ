"use client";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center">
                <span className="font-serif text-white text-xl">JG</span>
              </div>
              <div className="font-serif text-white text-3xl">JG University</div>
            </div>
            <p className="text-gray-500 font-light max-w-sm leading-relaxed">
              Sponsored by the ASIA Charitable Trust. Excellence in education since 1965. A New Age Tech-Driven University.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#D4AF37] mb-8 font-semibold">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li>+91 79 2630 0100</li>
              <li>admissions@jguni.in</li>
              <li className="leading-relaxed">JG Campus of Excellence,<br/>Ahmedabad, Gujarat</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-[#D4AF37] mb-8 font-semibold">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">The University</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Academics</a></li>
              <li><a href="#why" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Alumni Voices</a></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-wide">
            © {new Date().getFullYear()} JG UNIVERSITY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs tracking-wide text-gray-600">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
