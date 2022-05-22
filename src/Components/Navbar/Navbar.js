import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../no-image.png'
import { Transition } from "@headlessui/react";



import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const Navbar = () => {

    const [user] = useAuthState(auth)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        toast.success('Sign-Out Success.Bye Bye!!')

        signOut(auth);
    };
    console.log(user)


    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (


        <div className=' sticky top-0 z-50 shadow-sm'>
            <div className="bg-primary hidden md:block">
                <div className="flex justify-between items-center h-12 container mx-auto">
                    <div className=" text-white text-md">
                        <p>Get Free Shipping – Free 30 Day Money Back Guarantee</p>
                    </div>
                    <div className="right-icon flex text-white">
                        <Link to="https://www.facebook.com/profile.php?id=100013452185380"><BsFacebook className='ml-8 text-sm'></BsFacebook></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100013452185380"><BsTwitter className='ml-8 text-sm'></BsTwitter></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100013452185380"><BsInstagram className='ml-8 text-sm'></BsInstagram></Link>
                    </div>
                </div>
            </div>

            <nav className="bg-[#ffffff] py-4  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                              
                                <h1 className='sp-style text-rose-600'><span className='text-6xl text-lime-700'>Sp</span>  PC -MenuFecture</h1>
                            </div>
                            <div className="hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <NavLink
                                        to="/"
                                        className=" 
                                        font-bold sp-style nav-btn px-3 py-2 rounded-md text-xl "
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-xl font-bold"
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        to="/parts"
                                        className="nav-btn px-3 py-2 rounded-md text-sssssm font-bold"
                                    >
                                        Parts
                                    </NavLink>




                                    <NavLink
                                        to='/contact'
                                        className="nav-btn px-3 py-2 rounded-md text-sssssm font-bold"
                                    >
                                        Contact
                                    </NavLink>
                                    <NavLink
                                        to='/my-portfolio'
                                        className="nav-btn px-3 py-2 rounded-md text-sssssm font-bold"
                                    >
                                        My-Portfolio
                                    </NavLink>

                                    {
                                        user &&
                                        <>

                                            <NavLink className="nav-btn px-3 py-2 rounded-md text-xl font-bold" to="/dashboard">DashBoard</NavLink>
                                            <NavLink
                                        to='/my-profile'
                                        className="nav-btn px-3 py-2 rounded-md text-xl font-bold"
                                    >
                                        My Profile
                                    </NavLink>

                                        </>


                                    }
                                    
                                </div>
                                {
                                    user ?
                                        <button onClick={logout} className='text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2"'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                        :
                                        <button className='text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2"'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                                }

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {
                                user ?
                                    <button onClick={logout} className='md:ml-24 text-red-700 bg-[#0d0e0d] border-2 border-transparent font-bold hover:font-bold px-5 py-1 rounded-md'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                    :
                                    <button className='md:ml-24 text-sky-400 bg-[#141414] border-2 border-transparent font-bold hover:font-bold px-5 py-1 rounded-md'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                            }
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-400 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Home
                                </NavLink>



                                <NavLink
                                    to="/blog"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/parts"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Parts
                                </NavLink>
                                <NavLink
                                    to="/my-portfolio"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    My-Portfolio
                                </NavLink>




                                {
                                    user &&
                                    <>
                                        <NavLink className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold" to="/dashboard">DashBoard</NavLink>
                                        <NavLink
                                    to="/my-profile"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    My Profile
                                </NavLink>
                                    </>


                                }
                                <NavLink
                                    to="/contact"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Contact
                                </NavLink>
                               
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Navbar;
