import React from 'react';

function Header() {
  return (
    <header>
      <nav className='flex h-20 bg-gray-50 items-center justify-between px-6'>
        <div className='flex items-center justify-evenly gap-4'>
            <div className="image-container">
                <img src="https://cdn2.downdetector.com/static/uploads/logo/figma2.png" alt="" className='h-14 w-14' />
            </div>
            <div className="nav-links">
                <ul className='flex gap-6 items-center'>
                    <li><a href="#" className='text-lg font-medium'>Products</a></li>
                    <li><a href="#" className='text-lg font-medium'>Solutions</a></li>
                    <li><a href="#" className='text-lg font-medium'>Community</a></li>
                    <li><a href="#" className='text-lg font-medium'>Resources</a></li>
                    <li><a href="#" className='text-lg font-medium'>Pricing</a></li>
                    <li><a href="#" className='text-lg font-medium'>Contact Sales</a></li>
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-evenly gap-5'>
            <li className='list-none text-lg font-medium'>Login</li>
            <button className='rounded-xl bg-black text-white font-medium border-2 px-6 py-2'>Get Started For Free</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
