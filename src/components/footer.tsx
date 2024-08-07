import React from 'react';
import { Icons } from './icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-auto bg-gray-100 py-8 dark:bg-gray-800'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Icons.logo className='h-6 w-6' />
              <span className='text-md font-semibold'>Huggabug</span>
            </div>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>
              Stay up to date with my latest ramblings and epiphanies.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://linkedin/annemonnehay'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'
              >
                <Icons.linkedin className='h-6 w-6 text-gray-500 hover:text-gray-700  dark:text-gray-500 dark:hover:text-gray-300' />
              </a>
              <a
                href='https://github.com/alicefrsr'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
              >
                <Icons.github className='h-6 w-6 text-gray-500 hover:text-gray-700  dark:text-gray-500  dark:hover:text-gray-300' />
              </a>
            </div>
          </div>
          {/* LINKS */}
          <div className='space-y-4'>
            <h3 className='text-md font-semibold'>Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='mailto:alicefrsr@gmail.com'
                  className='text-gray-500 hover:text-gray-700  dark:text-gray-500 dark:hover:text-gray-300'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-services'
                  className='text-gray-500 hover:text-gray-700  dark:text-gray-500 dark:hover:text-gray-300'
                >
                  Terms of services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700 '>
          &copy; 2024 Huggabug. All right reserved.
        </div>
      </div>
    </footer>
  );
}
