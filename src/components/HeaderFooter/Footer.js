import React, { useState, useEffect } from 'react';

const Footer = () => {
  const words = ["Aligning", "Building", "Making", "Designing"];
  const colors = ["red", "blue", "green", "orange"]; // Array of colors
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  return (
    <footer className='bg-black text-white'>
        <div className='flex items-center justify-around my-5'>
            <div>
                <h1 className='text-7xl tracking-wide font-sans'>
                    Start 
                    <span style={{ color: colors[currentIndex] }}>{words[currentIndex]}</span> <br />
                    with Figma
                </h1>
            </div> 
            <div>
                <button className='rounded-lg px-8 py-3 border-2 bg-blue-600 text-white border-blue-500 text-xl font-semibold'>Get Started For Free</button>
            </div>   
        </div>
            
    </footer>
  );
};

export default Footer;
