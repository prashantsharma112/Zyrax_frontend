import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useLocation } from 'react-router-dom';
import logo from '../assets/Zyrax.svg';
import { navigation } from '../constants/index';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';

const Header = () => {
    const pathname = useLocation();
     const [opernNavigation, setOpenNavigation] = useState(false);
     const toggleNavigation = () => {
        if (opernNavigation) {
            setOpenNavigation(false); 
            enablePageScroll();
        }else{
            setOpenNavigation(true);   
            disablePageScroll();
        }
     };
     const handleClick = () => {
        if(!opernNavigation) return;
        enablePageScroll(); 
        setOpenNavigation(false);
     };
    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${opernNavigation ? "bg-n-8" : "bg-n-8/90 backdrop:backdrop-blur-sm" }`}>
            <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px10 max-lg:pt4">
                <a className="block w-[12rem] xl:mr-8 mt-2" href="#hero">
                    <img src={logo} width={50} height={40} alt="Zyrax" />
                </a>

                <nav className={`${opernNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-6">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                        <HamburgerMenu/>
                </nav>

                {/* Buttons - Add Flexbox for proper alignment */}
                <div className="flex items-center space-x-4">
                    {/* New account link */}
                    <a href="#signup" className="button hidden lg:block z-10 mr-4 text-n-1/50 transition-colors hover:text-n-1">
                        New account
                    </a>
                    {/* Sign in button */}
                    <Button className="hidden lg:flex z-10 px-4 py-2 text-center" href="#login">
                        Sign in
                    </Button>
                    <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                        <MenuSvg openNavigation={opernNavigation}/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
