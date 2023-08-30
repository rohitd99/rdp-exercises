import React,{useState} from 'react';
import logo from "../logo.png";
import NavList from './navlist';

let navClasses = "z-10 md:static absolute top-8 py-8 md:py-0 md:w-fit w-full md:block flex justify-center bg-white md:border-none border-solid border-black border-b-2 border-t-2";

const companyDetails =  <div className="flex">  
                            <img src={logo} alt="Paynet.io's Logo" className="w-8 h-8"></img>
                            <p className="text-xl font-medium">Paynet.io</p>
                        </div>;

const signUpLogin    =  <div className="flex gap-4">
                            <a href="/#" className="">Sign Up</a>
                            <span className="">/</span>
                            <a href="/#" className="">Log In</a>
                        </div>;

function NavBar()
{
    const [isMenuOpen,setMenu] = useState(false);
   
    function handleClick()
    {  
        setMenu(!isMenuOpen);
    }

    return(
        <header className="z-20 sticky top-0 flex justify-between md:px-8 sm:px-4 px-2 mt-6 border-b-2 border-black bg-white">
            <div className='hidden md:flex justify-between w-full'>
                {
                    companyDetails
                }
                <NavList classes={navClasses}></NavList> 
                {
                    signUpLogin
                }
            </div>
            <div className='flex md:hidden justify-between w-full'>
                {
                    companyDetails
                }
                {
                    isMenuOpen && <NavList classes={navClasses}></NavList> 
                }
                <div className='flex gap-4 items-center'>
                    {
                        signUpLogin
                    }
                    <i className={
                        !isMenuOpen ? "fa-solid fa-bars md:hidden text-black": "fa-solid fa-x md:hidden text-black"
                    } onClick={handleClick}></i>
                </div>
            </div>
        </header>
    );
}

export default NavBar;