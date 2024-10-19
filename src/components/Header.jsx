


import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/Zyrax.svg'; 
import { navigation } from '../constants/index';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import Login from './Login';  
import Register from './Register'; 

const Header = ({ openLoginModal, openRegisterModal }) => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);   
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); 

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);   
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const toggleRegisterModal = () => {
        setIsRegisterModalOpen(!isRegisterModalOpen);
    };
    
    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop:backdrop-blur-sm"}`}>
            <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:pt-4">
                <a className="block w-[12rem] xl:mr-8 mt-2" href="/">
                    <img src={logo} width={50} height={40} alt="Zyrax" />
                </a>

                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-6">
                       
                         
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={(item.id === "5") ? (e) => { e.preventDefault(); toggleLoginModal(); } 
                                : (item.id === "4") ? (e) => { e.preventDefault(); toggleRegisterModal(); }
                                : handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
                            >
                                {item.title}
                            </a>
                        ))}
                        
                      

                    
                    </div>
                    <HamburgerMenu />
                </nav>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    {/* New account link */}
                    <a
                        href="#signup"
                        className="button hidden lg:block z-10 mr-4 text-n-1/50 transition-colors hover:text-n-1"
                        onClick={openRegisterModal}  // Open Register modal on click
                    >
                        New account
                    </a>
                    {/* Sign in button */}
                    <Button className="hidden lg:flex z-10 px-4 py-2 text-center" onClick={openLoginModal}>
                        Sign in
                    </Button>
                    <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                        <MenuSvg openNavigation={openNavigation} />
                    </Button>
                </div>
            </div>

            {/* Login Modal */}
            {isLoginModalOpen && <Login closeModal={toggleLoginModal} />}  
            
            {/* Register Modal */}
            {isRegisterModalOpen && <Register closeModal={toggleRegisterModal} />} 
        </div>
    );
};

export default Header;
