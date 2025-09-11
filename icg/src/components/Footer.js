import { Mail, Instagram, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#061e2a] border-t text-white p-4">
      <div className="container ml-auto max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-0 -ml-10">
          <div>
            <img
              src="/ICG 4x4 Transparent White.png"
              alt="ICG Logo"
              className="w-24 h-24 md:w-32 md:h-32 mr-0 md:mr-10 mb-2 md:mb-0"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="border-b border-white pb-2">
              <h1 className="text-xl md:text-3xl font-bold">
                Irvine Consulting Group
              </h1>
              <h2 className="text-lg md:text-xl">
                Where Talent Meets Opportunity
              </h2>
            </div>
            <p className="mt-2">© 2025 ICG</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-center justify-center -mr-6">
          <h1 className="text-xl md:text-2xl font-bold py-2">Contact Us</h1>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:irvineconsulting.grp@gmail.com"
              aria-label="Email us"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/icg.uci/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/irvineconsultinggroup/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
