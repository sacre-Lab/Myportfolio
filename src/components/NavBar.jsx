import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => { 
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} relative`}>
            
            <div className='inner flex justify-between items-center'>
                
                {/* Logo */}
                <a className='logo' href='#hero'>
                    Sacré
                </a>

                {/* Desktop Menu */}
                <nav className='desktop hidden md:block'>
                    <ul className='flex gap-8'>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button (Desktop only) */}
                <a href='#contact' className='contact-btn group hidden md:block'>
                    <div className='inner'> 
                        <span>Contact me</span>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <div 
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 right-5 bg-black/80 backdrop-blur-md p-6 rounded-xl flex flex-col gap-5 z-50">
                    
                    {navLinks.map(({ link, name }) => (
                        <a 
                            key={name} 
                            href={link} 
                            onClick={() => setIsOpen(false)}
                            className="text-white text-lg"
                        >
                            {name}
                        </a>
                    ))}

                    <a 
                        href="#contact" 
                        className="mt-4 bg-white text-black px-4 py-2 rounded-lg text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact me
                    </a>

                </div>
            )}

        </header>
    )
}

export default NavBar