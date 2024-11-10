"use client"
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

const Header: FC = () => {
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check initial theme on mount, guard for SSR
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the theme from localStorage or default to 'light' if not set
      const savedTheme = localStorage.getItem('theme');
      const theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
      setIsDarkMode(theme === 'dark');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, []);

  // Toggle theme and update local storage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg p-4 flex justify-between items-center"
      role="banner"
      aria-label="Main Header"
    >
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
        <Link href="/" aria-label="Go to Home Page">Arisha Nawaz</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-4" role="navigation" aria-label="Main Navigation">
        <Link href="/" className="hover:text-gray-500" aria-label="Home Page">Home</Link>
        <Link href="/contact_us" className="hover:text-gray-500" aria-label="Contact Page">Contact</Link>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
};

export default Header;
