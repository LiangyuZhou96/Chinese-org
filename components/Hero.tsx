import React, { useEffect, useState } from 'react'
import Hero1 from "../assets/hero1.jpg";
const Hero = () => {
    const [url, setUrl] = useState(Hero1);

    useEffect(() => {
        setUrl(Hero1);
    }, [url]);


    return (
        <div >
            <div className='z-0 mt-[-96px] w-full h-screen bg-center bg-cover bg-[#00000099] bg-blend-darken' style={{ backgroundImage: `url(${url.src})` }}>
                <div className='mx-auto w-10/12 h-full flex flex-col justify-center '>
                    <div className='py-20'></div>
                    <p className='font-bold text-6xl text-white py-4'>Bring Together</p>
                    <p className='font-bold text-7xl text-[#f26c4f] py-4'>Be Proud of Chinese Art and </p>
                    <p className='font-bold text-7xl text-[#f26c4f] pb-4'>Culture</p>
                    <p className='font-bold text-xl text-white py-4'>The 1st NFT Marketplace that we could participate, promote and govern culture together for a NATION!</p>
                    <p className=' text-md text-white py-4'>A SocialFi-driven NFTs Creating and Trading Ecosystem for Chinese Culture, Mining the Greatest Value of World-wide Chinese Collection, Together!</p>
                </div>
            </div>
        </div>
    )
}

export default Hero