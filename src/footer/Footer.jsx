


import Logo from '../assets/Zyrax.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Left Section */}
          <div className="w-full md:w-1/4 mb-6 flex flex-col items-center">
            <div className="flex mb-4 justify-center">
              <img
                src={Logo} // Replace with the correct logo path
                alt="Logo"
                className="h-15"
              />
            </div>

            <div className="space-y-5 text-gray-400 text-center">
              <div className="flex justify-center items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:support@zyrax.com"
                  className="hover:underline"
                  style={{ '--hover-color': '#5d17eb' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
                  onMouseLeave={(e) => (e.target.style.color = '')}
                >
                  support@zyrax.com
                </a>
              </div>
              <div className="flex justify-center items-center">
                <span className="mr-2">📞</span>
                <a
                  href="tel:9084252037
"
                  className="hover:underline"
                  style={{ '--hover-color': '#5d17eb' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
                  onMouseLeave={(e) => (e.target.style.color = '')}
                >
                  345789456789
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 justify-center">
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
          <div className="w-full md:w-3/4 flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 mb-6 text-center">
              <ul className="space-y-2">
                <li>
                  <a href="/aboutUs" className="text-gray-400 hover:text-blue-400 text-bo">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 text-center">
              <ul className="space-y-2">
                <li>
                  <a href="/refundPolicypage" className="text-gray-400 hover:text-blue-400 text-bo">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 mb-6 text-center">
              <h3 className="text-gray-500 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/callback_request_page"
                    className="inline-block text-white px-4 py-2 rounded-md hover:bg-[#5e57ff]"
                  >
                    Callback Request
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9084252037?text=hii%20how%20are%20you%20bro"
                    className="inline-block text-white px-4 py-2 rounded-md hover:bg-[#5e57ff]"
                  >
                    Connect on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="w-full md:w-1/4 mb-6 text-center">
              <h6 className="text-lg font-semibold mb-3">TOOLS</h6>
            </div>
            <div className="w-full md:w-1/4 mb-6 text-center">
              <h6 className="text-lg font-semibold mb-3">LEGAL</h6>
            </div> */}
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
