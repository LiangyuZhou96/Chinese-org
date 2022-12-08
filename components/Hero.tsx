import React, { useEffect, useState } from 'react'
import Hero1 from "../assets/hero1.jpg";
const Hero = () => {
    const [url, setUrl] = useState(Hero1);
    
    useEffect(() => {
        setUrl(Hero1);
    }, [url]);
    
      
    return (
        <div >
            <div className='z-0 mt-[-96px] w-full h-screen text-white bg-center bg-cover bg-no-repeat bg-[#00000099] bg-blend-darken' style={{backgroundImage: `url(${url.src})`}}>
                <div className='  mx-auto text-center flex flex-col justify-center'>

                </div>
            </div>
        </div>
    )
}

export default Hero