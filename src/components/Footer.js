import React from 'react'
import Button from './Button';

function Footer() {
    return (
        <footer class="mt-8 xl:mt-8 mx-auto w-full relative text-center bg-blue-500 text-white">
    <div class="px-4 py-6 md:py-12 ">
        <h2 class="font-bold text-3xl  leading-snug">
            Ready to get your Creativity back?<br/>Start to Explore today.
        </h2>
        <Button href="#">Get Started</Button>
        <div class="mt-3 xl:mt-5">
            <nav class="flex flex-wrap justify-center text-lg font-medium">
                <div class="px-5 py-2"><a href="#">Contact</a></div>
                <div class="px-5 py-2"><a href="#">Pricing</a></div>
                <div class="px-5 py-2"><a href="#">Privacy</a></div>
                <div class="px-5 py-2"><a href="#">Terms</a></div>
                <div class="px-5 py-2"><a href="#">Twitter</a></div>
            </nav>
            <p class="mt-3 text-base ">© 2024 FAREEN, F-G</p>
        </div>
    </div>
</footer>
    );
}

export default Footer;
