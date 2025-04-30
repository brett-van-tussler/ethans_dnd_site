import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-900 sticky top-0 z-50 shadow-lg flex items-center h-26">
      <div className="h-full flex items-center justify-center px-4">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/playerrolllogo.jpeg"
            alt="Ethan's DnD Logo"
            className="h-14 w-auto shadow-[0_0_15px_5px_rgba(107,114,128,0.5)] rounded-md"
            width={65} 
            height={65}
            priority
          />
        </Link>
      </div>
      <div className="max-w-6xl mx-4 sm:mx-6 lg:mx-8 h-16 flex items-center justify-between flex-grow">
        <Link href="/" className="hover:opacity-80 transition-opacity h-full flex items-center">
          <h1 className="text-2xl font-bold text-gray-300 hover:text-red-600 transition-colors">Ethan's DnD Master Services</h1>
        </Link>
        <nav>
          <div className="flex space-x-8 text-lg">
            <Link href="/services" className="text-gray-300 hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}