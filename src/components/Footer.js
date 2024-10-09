import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="mt-8 xl:mt-8 mx-auto w-full relative text-center bg-blue-500 text-white">
    <div className="px-4 py-6 md:py-12 ">
        <h2 className="font-bold text-3xl  leading-snug">
            Ready to get your Creativity back?<br/>Start to Explore today.
        </h2>
        <Link to="/">
        <Button href="#">Get Started</Button>
        </Link>
        <div className="mt-3 xl:mt-5">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
                <div className="px-5 py-2"><a href="#">Contact</a></div>
                <div className="px-5 py-2"><a href="#">Pricing</a></div>
                <div className="px-5 py-2"><a href="#">Privacy</a></div>
                <div className="px-5 py-2"><a href="#">Terms</a></div>
                <div className="px-5 py-2"><a href="#">Twitter</a></div>
            </nav>
            <p className="mt-3 text-base ">© 2024 FAREEN, F-G</p>
        </div>
    </div>
</footer>
    );
}

export default Footer;
