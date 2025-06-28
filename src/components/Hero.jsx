import Nav from './Nav';
import React from 'react';
import { motion } from 'framer-motion';
import Dmichael from "/public/image 3 (1).png";
import Wave from "/public/image 4.png";
import fly from "/public/image 5.png";
import Arg from "/public/image 6.png";
import Rw from "/public/image 2 (1).png";

const Hero = () => {
    const companies = [
        { id: 1, image: Dmichael, alt: "Dmichael" },
        { id: 2, image: fly, alt: "Fly" },
        { id: 3, image: Wave, alt: "Wave" },
        { id: 4, image: Arg, alt: "Arg" },
        { id: 5, image: Rw, alt: "Rw" }
    ];

    return (  
        <div className='relative bg-[url("/public/BGimage.svg")] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-between overflow-hidden'>
            <div className='absolute inset-0 bg-black/30 z-0'></div>
            
            <div className='relative z-10'>
                <Nav/>
                
                <main className='font-kumah flex flex-col items-center justify-between w-full px-4 sm:px-6 lg:px-8 md:w-[85%] lg:w-[70%] mx-auto gap-8 md:gap-12 lg:gap-15 py-12 md:pt-20 lg:pt-24'>
                    <motion.div 
                        className='flex flex-col items-center w-full md:w-[85%] lg:w-[74%] gap-5 sm:gap-6 md:gap-7'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='text-white text-center'>
                            <motion.h1 
                                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.2]'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Safeguard What Matters Most
                            </motion.h1>
                        </div>
                        
                        <motion.p 
                            className='text-white text-center text-sm sm:text-base md:text-lg font-normal max-w-md sm:max-w-lg md:max-w-2xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            We use a key-based encryption system held in trust by people you choose and trust. Built for security, trusted for peace of mind. Your secrets stay yours—always in your control
                        </motion.p>
                        
                        <motion.div 
                            className='flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 w-full sm:w-auto'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.button 
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className='px-5 sm:px-6 py-2 sm:py-2.5 rounded-3xl bg-[#212121] text-white text-center text-base sm:text-lg font-semibold hover:bg-[#313131] transition-all w-full sm:w-auto'
                            >
                                Start free Trial
                            </motion.button>
                            <motion.button 
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className='px-5 sm:px-6 py-2 sm:py-2.5 border border-white rounded-3xl flex justify-center items-center text-white text-center text-base sm:text-lg font-semibold transition-all w-full sm:w-auto'
                            >
                                Learn more
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <p className='text-white text-center font-kumah text-xs sm:text-sm md:text-base font-medium'>
                            Trusted by Organizations Worldwide
                        </p>
                        
                        <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl px-4'>
                            {companies.map((company) => (
                                <motion.div
                                    key={company.id}
                                    whileHover={{ 
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ 
                                        scale: 0.9,
                                        transition: { duration: 0.1 }
                                    }}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ 
                                        duration: 0.5,
                                        ease: "backOut"
                                    }}
                                    className="p-1 sm:p-2"
                                >
                                    <img 
                                        src={company.image} 
                                        alt={company.alt} 
                                        className='h-8 sm:h-10 md:h-12 w-auto object-contain'
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
 
export default Hero;