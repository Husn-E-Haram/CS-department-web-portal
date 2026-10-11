import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { CSDepartmentLogo } from './CSDepartmentLogo';
import { NavView } from './Navbar';

interface Props {
  onNavigate: (view: NavView) => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenLogin }) => {
  return (
    <footer className="bg-[#332D27] text-[#EDE2D1] border-t border-[#8A6748]/30">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Branding & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <CSDepartmentLogo size="md" showText={true} inverted={true} />
            <p className="text-xs text-[#B5A18A] leading-relaxed pt-2">
              Empowering women through world-class computational education, hands-on software engineering, artificial intelligence research, and ethical technological leadership.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#EDE2D1]">
              <span className="flex items-center gap-1.5 text-[#B5A18A]">
                <ShieldCheck className="w-4 h-4 text-[#85836A]" />
                <span>NCEAC Accredited</span>
              </span>
              <span>·</span>
              <span className="text-[#B5A18A]">HEC Recognized</span>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFFDF8] font-sans border-b border-[#8A6748]/40 pb-2">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A18A]">
              <li>
                <button 
                  onClick={() => onNavigate('programs')} 
                  className="hover:text-[#FFFDF8] transition-colors cursor-pointer text-left"
                >
                  BS Computer Science (BSCS)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programs')} 
                  className="hover:text-[#FFFDF8] transition-colors cursor-pointer text-left"
                >
                  MS Computer Science (MSCS)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programs')} 
                  className="hover:text-[#FFFDF8] transition-colors cursor-pointer text-left"
                >
                  BS Information Technology (BSIT)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programs')} 
                  className="hover:text-[#FFFDF8] transition-colors cursor-pointer text-left"
                >
                  BS Software Engineering (BSSE)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('admissions')} 
                  className="hover:text-[#FFFDF8] transition-colors cursor-pointer text-left text-[#EDE2D1] font-semibold"
                >
                  Fall 2026 Admissions Criteria →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Department Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFFDF8] font-sans border-b border-[#8A6748]/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A18A]">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FFFDF8] transition-colors cursor-pointer">
                  Department Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faculty')} className="hover:text-[#FFFDF8] transition-colors cursor-pointer">
                  Faculty Profiles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-[#FFFDF8] transition-colors cursor-pointer">
                  News & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-[#FFFDF8] transition-colors cursor-pointer">
                  Student Dashboard
                </button>
              </li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-[#FFFDF8] transition-colors cursor-pointer font-semibold text-[#EDE2D1]">
                  Demo Login Access
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FFFDF8] transition-colors cursor-pointer">
                  Campus Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Department Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFFDF8] font-sans border-b border-[#8A6748]/40 pb-2">
              Department Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#B5A18A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#85836A] shrink-0 mt-0.5" />
                <span>CS Block, Govt College Women University, Kutchehry Road, Sialkot 51310, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#85836A] shrink-0" />
                <span className="font-mono text-[#EDE2D1]">cs@gcwus.edu.pk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#85836A] shrink-0" />
                <span>+92 (52) 9250137 - Ext 124</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#85836A] shrink-0" />
                <span>Mon – Fri: 08:30 AM – 04:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Project Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#8A6748]/30 bg-[#29241F] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 rounded-lg">
          <p className="text-[11px] text-[#B5A18A] leading-relaxed text-center sm:text-left">
            <strong className="text-[#FFFDF8]">Academic Disclaimer:</strong> This portal is a Computer Science semester demonstration application developed using Google AI Studio for the Department of Computer Science at Government College Women University Sialkot (GCWUS). All faculty profiles, course roadmap previews, student records, and admission inquiry forms are for academic and demonstrative evaluation.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Ribbon */}
      <div className="bg-[#1F1B17] border-t border-[#8A6748]/20 py-4 px-4 sm:px-8 text-center text-xs text-[#B5A18A]/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Department of Computer Science · GCWUS. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Guidelines</span>
            <span>·</span>
            <span>Academic Integrity</span>
            <span>·</span>
            <span>Computing Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
