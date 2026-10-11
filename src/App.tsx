import React, { useState, useEffect } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProgramsView } from './views/ProgramsView';
import { FacultyView } from './views/FacultyView';
import { AdmissionsView } from './views/AdmissionsView';
import { NewsEventsView } from './views/NewsEventsView';
import { ContactView } from './views/ContactView';
import { StudentPortalView } from './views/StudentPortalView';

// Modals
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { FacultyDetailModal } from './components/FacultyDetailModal';
import { EventDetailModal } from './components/EventDetailModal';
import { LoginModal } from './components/LoginModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Data types
import { ACADEMIC_PROGRAMS, FACULTY_MEMBERS, NEWS_AND_EVENTS, Program, FacultyMember, NewsEvent } from './data/departmentData';
import { CheckCircle2, Info } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedInEmail, setLoggedInEmail] = useState<string>('');

  // Modals state
  const [activeProgramModal, setActiveProgramModal] = useState<Program | null>(null);
  const [activeFacultyModal, setActiveFacultyModal] = useState<FacultyMember | null>(null);
  const [activeEventModal, setActiveEventModal] = useState<NewsEvent | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Cross-page state transfers
  const [preSelectedProgram, setPreSelectedProgram] = useState<string>('bscs');
  const [contactPrefill, setContactPrefill] = useState<{ email: string; subject: string }>({
    email: '',
    subject: '',
  });

  // Global toast banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Keyboard shortcut for Global Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (email: string) => {
    setIsLoggedIn(true);
    setLoggedInEmail(email);
    setCurrentView('portal');
    showToast('Signed in successfully! Welcome to your student dashboard.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInEmail('');
    showToast('You have been signed out of the demo session.');
    if (currentView === 'portal') {
      setCurrentView('home');
    }
  };

  const handleApplyForProgram = (programId: string) => {
    setPreSelectedProgram(programId);
    setCurrentView('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactFaculty = (email: string, name: string) => {
    setContactPrefill({
      email,
      subject: `Inquiry for ${name} regarding Department Research`,
    });
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGlobalSearchSelect = (targetView: string, targetId?: string) => {
    if (targetView === 'programs') {
      if (targetId) {
        const p = ACADEMIC_PROGRAMS.find(item => item.id === targetId);
        if (p) setActiveProgramModal(p);
      }
      handleNavigate('programs');
    } else if (targetView === 'faculty') {
      if (targetId) {
        const f = FACULTY_MEMBERS.find(item => item.id === targetId);
        if (f) setActiveFacultyModal(f);
      }
      handleNavigate('faculty');
    } else if (targetView === 'news') {
      if (targetId) {
        const n = NEWS_AND_EVENTS.find(item => item.id === targetId);
        if (n) setActiveEventModal(n);
      }
      handleNavigate('news');
    } else if (targetView === 'about') {
      handleNavigate('about');
    } else if (targetView === 'admissions') {
      handleNavigate('admissions');
    } else {
      handleNavigate(targetView as NavView);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EC] text-[#332D27] font-sans antialiased selection:bg-[#EDE2D1] selection:text-[#332D27]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-[#332D27] text-[#FFFDF8] rounded-xl shadow-xl border border-[#8A6748]/50 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200 text-xs">
          <CheckCircle2 className="w-5 h-5 text-[#85836A] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenProgramModal={(p) => setActiveProgramModal(p)}
            onOpenEventModal={(e) => setActiveEventModal(e)}
            onOpenLogin={() => setIsLoginModalOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentView === 'programs' && (
          <ProgramsView
            onOpenProgramModal={(p) => setActiveProgramModal(p)}
            onNavigate={handleNavigate}
            onApplyForProgram={handleApplyForProgram}
          />
        )}

        {currentView === 'faculty' && (
          <FacultyView
            onOpenFacultyModal={(f) => setActiveFacultyModal(f)}
            onContactFaculty={handleContactFaculty}
          />
        )}

        {currentView === 'admissions' && (
          <AdmissionsView preSelectedProgram={preSelectedProgram} />
        )}

        {currentView === 'news' && (
          <NewsEventsView onOpenEventModal={(e) => setActiveEventModal(e)} />
        )}

        {currentView === 'contact' && (
          <ContactView
            prefilledEmail={contactPrefill.email}
            prefilledSubject={contactPrefill.subject}
          />
        )}

        {currentView === 'portal' && (
          <StudentPortalView
            isLoggedIn={isLoggedIn}
            onOpenLoginModal={() => setIsLoginModalOpen(true)}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Program Details Modal */}
      <ProgramDetailModal
        program={activeProgramModal}
        onClose={() => setActiveProgramModal(null)}
        onApply={(progId) => {
          setActiveProgramModal(null);
          handleApplyForProgram(progId);
        }}
      />

      {/* Faculty Profile Modal */}
      <FacultyDetailModal
        faculty={activeFacultyModal}
        onClose={() => setActiveFacultyModal(null)}
        onContactFaculty={(email, name) => {
          setActiveFacultyModal(null);
          handleContactFaculty(email, name);
        }}
      />

      {/* Event Details Modal */}
      <EventDetailModal
        event={activeEventModal}
        onClose={() => setActiveEventModal(null)}
      />

      {/* Login & Demo Registration Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectItem={handleGlobalSearchSelect}
      />
    </div>
  );
}
