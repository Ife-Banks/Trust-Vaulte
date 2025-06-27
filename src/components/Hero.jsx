import Nav from './Nav';
import React from 'react';

const Hero = () => {
    return (  
        <div className ='relative h-screen'>
            <div className='absolute inset-0 bg-[url("/public/BGimage.svg")] bg-cover bg-center bg-no-repeat'>
        <Nav/>
        </div>
        </div>
    );
}
 
export default Hero;