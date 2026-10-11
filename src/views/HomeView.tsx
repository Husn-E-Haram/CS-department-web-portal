import React from 'react';
import { ArrowRight, BookOpen, Users, GraduationCap, Laptop, Sparkles, Calendar, ChevronRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { NavView } from '../components/Navbar';
import { ACADEMIC_PROGRAMS, NEWS_AND_EVENTS, LAB_FACILITIES, Program, NewsEvent } from '../data/departmentData';

interface Props {
  onNavigate: (view: NavView) => void;
  onOpenProgramModal: (program: Program) => void;
  onOpenEventModal: (event: NewsEvent) => void;
  onOpenLogin: () => void;
}

export const HomeView: React.FC<Props> = ({
  onNavigate,
  onOpenProgramModal,
  onOpenEventModal,
  onOpenLogin,
}) => {
  const featuredPrograms = ACADEMIC_PROGRAMS.slice(0, 3);
  const latestNews = NEWS_AND_EVENTS.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#EDE2D1]/40 border-b border-[#EDE2D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Institutional Editorial Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A6748] font-sans">
                <span>GCWUS Sialkot</span>
                <span>·</span>
                <span>Established Excellence</span>
                <span>·</span>
                <span>NCEAC Accredited</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27] leading-[1.15] text-balance">
                Department of Computer Science
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#332D27]/85 font-sans leading-relaxed max-w-2xl">
                Nurturing the next generation of women technologists, computational researchers, and software innovators. We combine mathematical rigor with cutting-edge artificial intelligence, software engineering, and experiential laboratory learning.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('programs')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer group"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#FFFDF8] border border-[#B5A18A] text-[#332D27] hover:bg-[#EDE2D1] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  About Department
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 border-t border-[#B5A18A]/30 flex flex-wrap items-center gap-6 text-xs text-[#8A6748]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#85836A]" />
                  <span>HEC Recognized Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#85836A]" />
                  <span>State-of-the-Art GPU Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#85836A]" />
                  <span>Active Industry Partnerships</span>
                </div>
              </div>
            </div>

            {/* Right Media Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#B5A18A]/40 shadow-lg bg-[#EDE2D1]">
                <img
                  src="/src/assets/images/hero_cs_department_1791702742192.jpg"
                  alt="GCWUS Computer Science Students coding in computing laboratory"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#332D27]/90 via-[#332D27]/40 to-transparent p-4 text-[#FFFDF8]">
                  <p className="text-xs font-serif italic">
                    Ada Lovelace Computing Facility · Interactive Software Architecture Session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Ribbon below Hero */}
        <div className="bg-[#EDE2D1] border-t border-[#B5A18A]/40 py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#332D27]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#8A6748] uppercase tracking-wider">Announcement:</span>
              <span>Fall 2026 Admissions are Open for BSCS & MSCS Programs</span>
            </div>
            <button
              onClick={() => onNavigate('admissions')}
              className="text-[#8A6748] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View Eligibility & Apply</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= QUICK ACCESS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {[
            { label: 'Academic Programs', desc: 'BSCS & MSCS Roadmaps', view: 'programs' as NavView, icon: BookOpen },
            { label: 'Faculty Directory', desc: 'Professors & Researchers', view: 'faculty' as NavView, icon: Users },
            { label: 'Admissions 2026', desc: 'Process & Online Form', view: 'admissions' as NavView, icon: GraduationCap },
            { label: 'Student Portal', desc: 'Timetables & Records', view: 'portal' as NavView, icon: Laptop },
            { label: 'Campus Inquiries', desc: 'Visit & Office Contact', view: 'contact' as NavView, icon: Calendar },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => onNavigate(item.view)}
                className="p-4 sm:p-5 bg-[#FFFDF8] hover:bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-xl text-left transition-all hover:border-[#8A6748] group shadow-2xs cursor-pointer"
              >
                <div className="p-2.5 bg-[#F8F4EC] group-hover:bg-[#EDE2D1] rounded-lg w-fit transition-colors mb-3">
                  <Icon className="w-5 h-5 text-[#8A6748]" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#332D27] group-hover:text-[#8A6748] transition-colors">
                  {item.label}
                </h3>
                <p className="text-[11px] text-[#8A6748] mt-0.5 line-clamp-1">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= DEPARTMENT OVERVIEW & STATS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
              Department Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#332D27]">
              Pioneering Women in Technology & Computational Research
            </h2>
            <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
              The Department of Computer Science at Government College Women University Sialkot stands as a benchmark of academic distinction in the Punjab region. Established to bridge the gender divide in computing and technology leadership, the department offers rigorous pedagogical standards, hands-on software development laboratories, and research clusters in Artificial Intelligence, Cyber Security, and Software Engineering.
            </p>
            <div className="space-y-2 pt-2">
              {[
                'Outcome-Based Education (OBE) system aligned with international computing standards',
                'Dedicated faculty with doctorates and masters in Artificial Intelligence, Vision, and Systems',
                'Active student chapters of ACM-W and IEEE Women in Engineering (WIE)',
                'Direct industry placement linkages with premier software houses across Pakistan'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#332D27]">
                  <CheckCircle2 className="w-4 h-4 text-[#85836A] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold uppercase tracking-wider text-[#8A6748] hover:text-[#725439] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Full Mission & Objectives</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Stats & Highlights (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl text-center shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#8A6748] tabular-nums">4</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#332D27] mt-1 block">Degree Roadmaps</span>
              <span className="text-[11px] text-[#8A6748]/80 mt-1 block">BSCS, MSCS, BSIT, BSSE</span>
            </div>

            <div className="p-6 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl text-center shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#8A6748] tabular-nums">150+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#332D27] mt-1 block">Lab Workstations</span>
              <span className="text-[11px] text-[#8A6748]/80 mt-1 block">Core i7, GPUs, Cisco Rigs</span>
            </div>

            <div className="p-6 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl text-center shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#8A6748] tabular-nums">100%</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#332D27] mt-1 block">Female Cohort</span>
              <span className="text-[11px] text-[#8A6748]/80 mt-1 block">Dedicated Women Campus</span>
            </div>

            <div className="p-6 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl text-center shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#8A6748] tabular-nums">15+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#332D27] mt-1 block">Years Legacy</span>
              <span className="text-[11px] text-[#8A6748]/80 mt-1 block">Historic Institutional Roots</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC PROGRAMS SPOTLIGHT ================= */}
      <section className="bg-[#EDE2D1]/30 py-16 border-y border-[#EDE2D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
                Curricular Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
                Academic Programs Offered
              </h2>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="text-xs font-bold uppercase tracking-wider text-[#8A6748] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>View All Programs Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-[#8A6748] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8A6748]">
                    <span className="font-semibold uppercase tracking-wider">{prog.degreeType}</span>
                    <span className="font-mono">{prog.duration} · {prog.creditHours} CH</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#332D27]">
                    {prog.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
                    {prog.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-[#EDE2D1] space-y-1">
                    <p className="text-[11px] font-semibold text-[#8A6748] uppercase tracking-wider">Key Eligibility:</p>
                    <p className="text-xs text-[#332D27]/80 line-clamp-2">
                      {prog.eligibility}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenProgramModal(prog)}
                    className="w-full py-2.5 px-4 bg-[#F8F4EC] hover:bg-[#EDE2D1] border border-[#B5A18A]/40 rounded-lg text-xs font-semibold text-[#332D27] hover:text-[#8A6748] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Curriculum Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPUTING FACILITIES & CAMPUS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Images Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-[#B5A18A]/40 shadow-sm bg-[#EDE2D1]">
              <img
                src="/src/assets/images/lab_computing_facility_1791702755261.jpg"
                alt="Modern computing laboratory workstations at GCWUS"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#B5A18A]/40 shadow-sm bg-[#EDE2D1]">
              <img
                src="/src/assets/images/campus_academic_hall_1791702768397.jpg"
                alt="Government College Women University Sialkot campus academic hall"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text & Labs List (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
              Advanced Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27]">
              Laboratories & Technical Learning Environments
            </h2>
            <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
              Practical computing experience lies at the core of our educational philosophy. Students work on industrial-grade equipment configured with high-speed internet, development sandboxes, and modern software toolchains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {LAB_FACILITIES.slice(0, 4).map((lab) => (
                <div key={lab.id} className="p-3.5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Laptop className="w-4 h-4 text-[#8A6748] shrink-0" />
                    <h4 className="text-xs font-bold text-[#332D27] line-clamp-1">{lab.name}</h4>
                  </div>
                  <p className="text-[11px] text-[#8A6748] font-mono">{lab.capacity} · {lab.supervisor.split('/')[0]}</p>
                  <p className="text-xs text-[#332D27]/75 mt-1 line-clamp-2">{lab.purpose}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold uppercase tracking-wider text-[#8A6748] hover:text-[#725439] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore All Facilities in About Section</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWS & UPCOMING EVENTS ================= */}
      <section className="bg-[#FFFDF8] py-16 border-y border-[#EDE2D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
                Department Dispatch
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
                Latest News & Campus Events
              </h2>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="text-xs font-bold uppercase tracking-wider text-[#8A6748] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>View Full News & Events Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F4EC] border border-[#B5A18A]/30 rounded-xl p-5 flex flex-col justify-between hover:border-[#8A6748] transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8A6748] uppercase tracking-wider">
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#332D27] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#332D27]/80 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#EDE2D1] flex items-center justify-between">
                  <span className="text-[11px] text-[#8A6748] font-medium line-clamp-1">
                    {item.venue}
                  </span>
                  <button
                    onClick={() => onOpenEventModal(item)}
                    className="text-xs font-bold text-[#8A6748] hover:text-[#332D27] cursor-pointer shrink-0"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STUDENT DASHBOARD CALLOUT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#332D27] text-[#FFFDF8] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-[#8A6748]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B5A18A]">
                <Sparkles className="w-4 h-4 text-[#85836A]" />
                <span>Interactive Student Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#FFFDF8]">
                Access the GCWUS Computer Science Student Portal
              </h2>
              <p className="text-xs sm:text-sm text-[#EDE2D1]/85 max-w-2xl leading-relaxed">
                Registered students can log in to check course enrollments, weekly laboratory timetables, submit assignment work, review examination results, and download departmental notifications.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenLogin}
                  className="px-6 py-3 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  Sign In with Demo Credentials
                </button>
                <button
                  onClick={() => onNavigate('portal')}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-[#FFFDF8] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Explore Dashboard Overview
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 font-mono text-xs">
              <p className="text-[#EDE2D1] font-bold text-center border-b border-white/10 pb-2">Demo Student Account</p>
              <div className="space-y-1.5 text-[11px] text-[#EDE2D1]/90">
                <p>Email: <span className="text-[#FFFDF8] font-bold">student@gcwus.edu.pk</span></p>
                <p>Pass: <span className="text-[#FFFDF8] font-bold">Password123</span></p>
                <p>Roll: <span className="text-[#FFFDF8]">CS-F23-042 (Mahnoor Tariq)</span></p>
              </div>
              <p className="text-[10px] text-[#B5A18A] italic pt-1">
                * Zero-configuration demo account ready for immediate exploration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
