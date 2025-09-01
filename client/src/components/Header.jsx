'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { getCategories } from '@/action/wp.client';
import { useEffect, useState } from 'react';
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isOffline, setIsOffline] = useState(false);
  
  const getAllCategories = async () => {
    try {
      const data = await getCategories();
      console.log(data);
      setCategories(data);
      setIsOffline(false);
    } catch (error) {
      console.error('Using mock categories:', error);
      setIsOffline(true);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  
  return (
    <header className="py-4 bg-white border-b-4" x-data="{expanded: false}">
      {isOffline && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm">
                <strong>Offline Mode:</strong> WordPress site is currently unavailable. Displaying sample content.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex">
              <Image
                width={150}
                height={180}
                className=""
                src="https://seagreen-tapir-758954.hostingersite.com/wp-content/uploads/2024/07/Screenshot_4.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
              <span x-show="!expanded" aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span x-show="expanded" aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
            {categories &&
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {category.name}
                </Link>
              ))}
          </nav>

          <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
            <Link
              href="#"
              title=""
              className="
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2
                    text-base
                    font-semibold
                    leading-7
                    text-gray-900
                    transition-all
                    duration-200
                    bg-transparent
                    border border-gray-900
                    rounded-xl
                    font-pj
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                    hover:bg-gray-900 hover:text-white
                    focus:bg-gray-900 focus:text-white
                "
              role="button"
            >
              Share Your Story
            </Link>
          </nav>
        </div>

        <nav className="hidden">
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              <a
                href="#"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Experts{' '}
              </a>

              <a
                href="#"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Community Groups{' '}
              </a>

              <a
                href="#"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Support{' '}
              </a>

              <a
                href="#"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {' '}
                Login{' '}
              </a>

              <a
                href="#"
                title=""
                className="
                        inline-flex
                        items-center
                        justify-center
                        px-5
                        py-2
                        text-base
                        font-semibold
                        leading-7
                        text-gray-900
                        transition-all
                        duration-200
                        bg-transparent
                        border border-gray-900
                        rounded-xl
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900 hover:text-white
                        focus:bg-gray-900 focus:text-white
                    "
                role="button"
              >
                Join community
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
