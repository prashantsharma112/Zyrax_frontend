
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/Zyrax.svg';
import { navigation } from '../constants/index';
import Button from '../components/subComponents/Button';
import ProfileMenu from './ProfileMenu';
import BottomNav from '../components/subComponents/BottumNav';
import ProfileIcon from '../assets/profileIcon.jpg'

const Header = ({ openLoginModal, openRegisterModal, profile}) => {
    const pathname = useLocation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const image =  profile?.additional_info?.profile_picture;

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black border-b-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
            <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:pt-4">
                <a className="block w-[12rem] xl:mr-8 mt-2" href="/">
                    <img src={logo} width={50} height={40} alt="Zyrax" />
                </a>

                <nav className="hidden lg:flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:bg-transparent">
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-6">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={(item.id === "5") ? (e) => { e.preventDefault(); setIsLoginModalOpen(true); }
                                    : (item.id === "4") ? (e) => { e.preventDefault(); setIsRegisterModalOpen(true); }
                                        : () => navigate(item.url)}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="flex items-center space-x-4">
                    {!isAuthenticated ? (
                        <>
                            <a
                                href="#signup"
                                className="button hidden lg:block z-10 mr-4 text-n-1/50 transition-colors hover:text-n-1"
                                onClick={openRegisterModal}
                            >
                                New account
                            </a>
                            <Button className="lg:flex z-10 px-4 py-2 text-center" onClick={openLoginModal}>
                                Sign in
                            </Button>
                        </>
                    ) : (
                        <div className="relative">
                            <img
                                src={image||ProfileIcon}
                                alt="Profile"
                                className="cursor-pointer w-10 h-10 rounded-full"
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-15 bg-black shadow-lg rounded-lg z-20 opacity-90">
                                    <ProfileMenu
                                        setIsAuthenticated={setIsAuthenticated}
                                        closeDropdown={closeDropdown}
                                        profile={profile}
                                    />
                                   
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="block lg:hidden">
                <BottomNav />
            </div>
        </div>
    );
};

export default Header;


