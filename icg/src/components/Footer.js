import { Mail, Instagram, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className='bg-[#061e2a] border-t text-white flex items-center p-4 justify-between'>
        <div className='flex items-center justify-center '>
            <div>
                <img
                    src="/ICG 4x4 Transparent White.png"
                    alt="ICG Logo"
                    className="w-32 h-32 mr-10"
                    />
            </div>
        <div>
            <div className='border-b border-white pb-2'>
                <h1 className='text-3xl font-bold'>Irvine Consulting Group</h1>
                <h1 className='text-xl'> Where Talent Meets Opportunity</h1>
            </div>
            <p className='mt-2'>© 2025 ICG</p>
        </div>
      </div>
      
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center mr-5'>
            <h1 className='text-2xl font-bold py-5'>
                Contact Us 
            </h1>
            <div className='flex items-center justify-center gap-4'>
            <a href="mailto:irvineconsulting.grp@gmail.com" aria-label="Email us">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/icg.uci/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                  
                  <Instagram className="w-8 h-8" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/irvineconsultinggroup/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </div>
              </a>
            </div>
            
        </div>
      </div>
    </footer>
  );
}
export default Footer;