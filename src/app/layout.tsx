import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Home, Search, Heart, User, Phone, Mail, MapPin } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RealEstateApp - Find Your Dream Home",
  description: "Discover the perfect property in your favorite neighborhood. From cozy apartments to luxury homes, we have it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">RealEstateApp</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="/properties" className="text-gray-700 hover:text-blue-600 transition-colors">Properties</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Agents</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="h-5 w-5" />
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  List Property
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">RealEstateApp</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Your trusted partner in finding the perfect home. We connect buyers and sellers 
                  with the best properties in the most desirable locations.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" />
                  </a>
                </div>
              </div>

                             {/* Quick Links */}
               <div>
                 <h3 className="font-semibold mb-4">Quick Links</h3>
                 <ul className="space-y-2 text-gray-400">
                   <li><a href="/properties" className="hover:text-white transition-colors">Properties</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Agents</a></li>
                   <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                   <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                 </ul>
               </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400">
                  <p>123 Real Estate Ave</p>
                  <p>City, State 12345</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@realestateapp.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 RealEstateApp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
