
import { useState } from "react";
import Logo from "../assets/Zyrax.svg";
import RatingForm from "./RatingForm";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // ✅ Modal state

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {/* Left Section */}
            <div className="w-full md:w-1/4 mb-6 flex flex-col items-center">
              <div className="flex mb-4 justify-center">
                <img src={Logo} alt="Logo" className="h-15" />
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
                    href="tel:9084252037"
                    className="hover:underline"
                    style={{ '--hover-color': '#5d17eb' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--hover-color)')}
                    onMouseLeave={(e) => (e.target.style.color = '')}
                  >
                    9084252037
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
                    <a href="/aboutUs" className="text-gray-400 hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    {/* ✅ "Rate Us" as Popup Button */}
                    <button
                      onClick={openModal}
                      className="text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                      Rate Us
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 mb-6 text-center">
                <ul className="space-y-2">
                  <li>
                    <a href="/refundPolicypage" className="text-gray-400 hover:text-blue-400">
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
            </div>
          </div>

          <div className="mt-10 text-center text-gray-400">
            © 2024. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ✅ Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" rounded-lg shadow-lg p-8 w-full max-w-md relative animate-fade-in">
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖️
            </button>

            {/* Embed Rating Form */}
            <RatingForm />

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
