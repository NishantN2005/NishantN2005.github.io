function Footer() {
  return (
    <footer className='bg-[#003364] text-white flex p-4 font-marcellus justify-between'>
      <div>
        <h1 className='text-5xl py-5'>Irvine Consulting Group</h1>
        <p>© 2025 ICG</p>
      </div>
      
      <div className='flex items-center justify-center'>
      <img
              src="/Square Logo_1_11zon.jpg"
              alt="ICG Logo"
              className="w-32 h-32 rounded-full mr-10"
            />
        <div>
            <h1 className='text-3xl py-5'>
                Contact Us: 
            </h1>
                
            <p>
                irvineconsulting.grp@gmail.com
            </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;