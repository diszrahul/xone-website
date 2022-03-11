import Link from "next/link";
import React, { useState } from 'react';

const Navbar = () => {

  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if(mode == 'light'){
      document.querySelector('html').classList.add('dark');
      setMode('dark')
    } else {
      document.querySelector('html').classList.remove('dark');
      setMode('light')
    }
  }

  const renderMode = () => {
    if(mode == 'light'){
      return 'Dark'
    } else {
      return 'Light'
    }
  }

    return (
    <header> 
            <nav className='px-10 py-2 bg-white dark:bg-black'>
                <ul className="flex flex-row space-x-4">
                    <li className="flex-1">
                            <Link href="/"><a className='dark:text-white hover:text-indigo-200'>Home</a></Link>
                    </li>

                    <li className="flex-2">
                            <Link href="/about"><a className='dark:text-white hover:text-indigo-200'>About</a></Link>
                    </li>

                    <li className="flex-2">
                            <Link href="/blog"><a className='dark:text-white hover:text-indigo-200'>Blog</a></Link> 
                    </li>

                    <li className="flex-2">
                          <button className="dark:text-white" onClick={()=>{changeMode()}}>{renderMode()}</button>
                          
                    </li>

                </ul>
                <h1 className='text-2xl font-bold text-center dark:text-white'>XONE</h1>
            </nav>

            {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
            />
    </header>
     );
}
 
export default Navbar;