import React, { useState } from 'react';
import { Menu, X, Search, LogIn, UserCheck, LogOut } from 'lucide-react';
import { CSDepartmentLogo } from './CSDepartmentLogo';

export type NavView = 'home' | 'about' | 'programs' | 'faculty' | 'admissions' | 'news' | 'portal' | 'contact';

interface Props {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenLogin,
  isLoggedIn,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { view: NavView; label: string }[] = [
    { view: 'home', label: 'Home' },
    { view: 'about', label: 'About' },
    { view: 'programs', label: 'Programs' },
    { view: 'faculty', label: 'Faculty' },
    { view: 'admissions', label: 'Admissions' },
    { view: 'news', label: 'News & Events' },
    { view: 'portal', label: 'Student Portal' },
    { view: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#EDE2D1] shadow-2xs">
      {/* Top Academic Accent Ribbon */}
      <div className="bg-[#332D27] text-[#EDE2D1] text-[11px] px-4 sm:px-8 py-1.5 flex items-center justify-between font-sans">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider uppercase text-[#B5A18A]">Govt College Women University Sialkot</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-stone-300">Empowering Women in Computing</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden md:inline font-mono text-[#EDE2D1]">Admissions Fall 2026 Open</span>
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1 text-[#EDE2D1] hover:text-[#FFFDF8] cursor-pointer"
            title="Search Portal (Ctrl+K)"
          >
            <Search className="w-3 h-3 text-[#B5A18A]" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Department Branding */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer shrink-0"
          >
            <CSDepartmentLogo size="md" showText={true} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-[#332D27]">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleLinkClick(link.view)}
                  className={`relative py-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#8A6748] font-bold' 
                      : 'text-[#332D27]/85 hover:text-[#8A6748]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A6748] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search & Student Login / Profile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#8A6748] hover:text-[#332D27] hover:bg-[#EDE2D1]/50 rounded-lg transition-colors cursor-pointer hidden sm:flex items-center justify-center"
              aria-label="Search department portal"
            >
              <Search className="w-4 h-4" />
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLinkClick('portal')}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#EDE2D1] text-[#332D27] hover:bg-[#B5A18A]/40 rounded-lg transition-colors cursor-pointer"
                  title="Open Student Dashboard"
                >
                  <UserCheck className="w-4 h-4 text-[#85836A]" />
                  <span className="hidden sm:inline">Mahnoor (CS-F23)</span>
                  <span className="sm:hidden">Portal</span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-[#8A6748] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Sign Out of Portal"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <LogIn className="w-4 h-4" />
                <span>Student Login</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFDF8] border-b border-[#EDE2D1] px-4 pt-2 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-150">
          <div className="p-2 mb-2 bg-[#F8F4EC] rounded-lg flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6748]">Department Navigation</span>
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1 text-xs text-[#332D27] hover:text-[#8A6748]"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search site</span>
            </button>
          </div>

          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handleLinkClick(link.view)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#EDE2D1] text-[#8A6748] font-bold'
                    : 'text-[#332D27] hover:bg-[#F8F4EC]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8A6748]" />}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#EDE2D1]">
            {isLoggedIn ? (
              <div className="space-y-2">
                <button
                  onClick={() => handleLinkClick('portal')}
                  className="w-full py-2 px-3 bg-[#EDE2D1] text-[#332D27] rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4 text-[#85836A]" />
                  <span>Go to Student Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-3 border border-red-200 text-red-700 hover:bg-red-50 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout from Session</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-2.5 px-4 bg-[#8A6748] text-[#FFFDF8] rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In to Student Portal</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
