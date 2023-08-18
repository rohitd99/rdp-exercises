import React,{useRef} from 'react';
import logo from "../logo.png";

function NavBar()
{
    const navRef = useRef(null);
    const menuBtnRef = useRef(null);

    const menuStyle = {
        color: "#000000"
    }

    function handleClick(e)
    {
        if(navRef.current.classList.contains("hidden"))
        {
            navRef.current.classList.remove("hidden");
        }else{
            navRef.current.classList.add("hidden");
        }
        // console.log(e.target.classList);
        e.target.classList.toggle("fa-bars");
        e.target.classList.toggle("fa-x");
        
    }

    return(
        <header className="flex justify-between md:mx-8 sm:mx-4 mx-2 mt-6 border-b-2 border-black">
            <div className="flex">
                <img src={logo} alt="Paynet.io's Logo" className="w-8 h-8"></img>
                <p className="text-xl font-medium">Paynet.io</p>
            </div>
            <nav className="md:static absolute top-16 md:w-fit w-full md:block flex justify-center hidden bg-white md:border-none border-solid border-black border-b-2" ref={navRef}>
                <ul className="flex md:flex-row flex-col gap-9">
                    <li><a href="/#">Fees</a></li>
                    <li><a href="/#">Careers</a></li>
                    <li><a href="/#">FAQ</a></li>
                    <li><a href="/#">Contacts</a></li>
                    <li><a href="/#">About</a></li>
                </ul>
            </nav>
            <div className="flex gap-4">
                <a href="/#" className="">Sign Up</a>
                <span className="">/</span>
                <a href="/#" className="">Log In</a>
                <div ref={menuBtnRef}>
                    <i className="fa-solid fa-bars md:hidden" style={menuStyle} onClick={(e) => handleClick(e)}></i>
                </div>
            </div>
            
        </header>
    );
}

export default NavBar;