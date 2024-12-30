import Logo from '../assets/Zyrax.svg'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className=" w-full md:w-1/4 mb-6">
            <div className="flex mb-4">
              <img
                src={Logo} // Replace with the correct logo path
                alt="Logo"
                className="h-15"
              />
              {/* <span className=" mt-7 text-xl font-montserrat">FITNESS</span> */}
            </div>


            <div className="space-y-5 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:support@zyrax.com"
                  className="hover:underline"
                  style={{ '--hover-color': '#5d17eb' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
                  onMouseLeave={(e) => (e.target.style.color = '')}
                >                  support@zyrax.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a
                  href="tel:345789456789"
                  className="hover:underline"
                  style={{ '--hover-color': '#5d17eb' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
                  onMouseLeave={(e) => (e.target.style.color = '')}
                >                  345789456789
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
          
              <a
                href="https://www.instagram.com/zyraxfitness/profilecard/?igsh=d2c5bXFmYjh4aTI4"
                className="text-gray-400 hover:text-blue-400"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
       
            </div>
          </div>

          {/* Links Sections */}
          <div className="w-full md:w-3/4 flex flex-wrap">
            <div className="w-1/4 mb-6">
              <ul className="space-y-2">
                <li>
                  <a href="/aboutUs" className="text-gray-400 hover:text-blue-400 text-bo">
                    About Us
                  </a>
                </li>
          
              </ul>
            </div>
            <div className="w-1/4 mb-6">
              <ul className="space-y-2">
                <li>
                  <a href="/refundPolicypage" className="text-gray-400 hover:text-blue-400 text-bo">
                  Refund Policy
                  </a>
                </li>
          
              </ul>
            </div>
            <div className="w-1/4 mb-6">
              <ul className="space-y-2">
                <li>
                  <a href="/callback_request_page" className="text-gray-400 hover:text-blue-400 text-bo">
                  Contact Us
                  </a>
                </li>
          
              </ul>
            </div>
            <div className="w-1/4 mb-6">
              <h6 className="text-lg font-semibold mb-3">TOOLS</h6>
            
            </div>
            <div className="w-1/4 mb-6">
              <h6 className="text-lg font-semibold mb-3">LEGAL</h6>
             
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400">
          © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
