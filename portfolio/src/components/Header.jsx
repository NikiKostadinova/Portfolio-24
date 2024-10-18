import { Navbar } from "flowbite-react"
// import NikiLogo2 from '../assets/NikiLogo2.png';
import LogoN from '../assets/LogoN.png';

import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar fluid={true}
        rounded={true}
        className="bg-transparent bg-gray-400 bg-opacity-50 absolute top-0 left-0 w-full z-10">
        
          <Link to="/" className='flex self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <img src={LogoN} alt="Logo" className='h-12 w-auto mr-2 ' />
          </Link>
          <div className='flex gap-1 md:order-2'>
          <Navbar.Toggle />

          </div>
      
        <Navbar.Collapse className="md:flex md:items-center md:space-x-4 ">
        <Link to='/' className="nav-link">
          <Navbar.Link active={path === '/'} as={'div'} className={`${path === '/' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
            Home
          </Navbar.Link>
        </Link>
        
        <Link to='/allposts' className="nav-link">
          <Navbar.Link active={path === '/allposts'}  as={'div'} className={`${path === '/allposts' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`} >
            Posts
          </Navbar.Link>
        </Link>
        <Link to='/forum' className="nav-link">
          <Navbar.Link active={path === '/forum'} as={'div'} className={`${path === '/forum' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
            Forum
          </Navbar.Link>
        </Link>
        <Link to='/contact-us' className="nav-link">
          <Navbar.Link active={path === '/contact-us'} as={'div'} className={`${path === '/contact-us' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
            Contact Us
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
        
      </Navbar>
    )
}
