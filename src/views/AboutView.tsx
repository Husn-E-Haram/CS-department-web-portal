import React from 'react';
import { Target, Compass, BookOpen, Cpu, ShieldCheck, Award, Laptop, Users, CheckCircle2 } from 'lucide-react';
import { LAB_FACILITIES } from '../data/departmentData';
import { NavView } from '../components/Navbar';

interface Props {
  onNavigate: (view: NavView) => void;
}

export const AboutView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* ================= PAGE HEADER ================= */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Institutional Identity & Academic Legacy
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          About the Department of Computer Science
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Pioneering computational education and high-impact research for women at Government College Women University Sialkot.
        </p>
      </div>

      {/* ================= INTRODUCTION & HERO SPLIT ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6748]">
            Department Introduction
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27]">
            Empowering Women with Technical Rigor & Computational Mastery
          </h2>
          <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
            The Department of Computer Science at Government College Women University Sialkot was founded with the resolute vision of transforming young female scholars into proficient software architects, AI researchers, and technological leaders. 
          </p>
          <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
            In an era defined by rapid technological acceleration—from machine learning models and cloud virtualization to ubiquitous data networks—our academic programs provide students with timeless mathematical foundations alongside up-to-date industry practices. Our graduates serve across leading international tech firms, entrepreneurial startups, and prestigious postgraduate research institutions worldwide.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#8A6748]">
            <span className="flex items-center gap-1.5 bg-[#EDE2D1]/50 px-3 py-1.5 rounded border border-[#B5A18A]/30">
              <ShieldCheck className="w-4 h-4 text-[#85836A]" />
              NCEAC Accreditation Status
            </span>
            <span className="flex items-center gap-1.5 bg-[#EDE2D1]/50 px-3 py-1.5 rounded border border-[#B5A18A]/30">
              <Award className="w-4 h-4 text-[#85836A]" />
              Outcome-Based Education (OBE)
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-[#B5A18A]/40 shadow-md bg-[#EDE2D1]">
            <img
              src="/src/assets/images/campus_academic_hall_1791702768397.jpg"
              alt="GCWUS Campus building and academic courtyard"
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-[#FFFDF8] border-t border-[#EDE2D1] text-[11px] text-[#8A6748] italic text-center">
              GCWUS Academic Quadrangle & Computer Science Wing
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION CARDS ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-8 shadow-2xs space-y-4">
          <div className="p-3 bg-[#F8F4EC] rounded-lg w-fit">
            <Compass className="w-6 h-6 text-[#8A6748]" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#332D27]">
            Our Vision
          </h3>
          <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
            To emerge as a premier national center of computational education and research for women, recognized internationally for intellectual rigor, innovative technology solutions, ethical values, and inclusive societal empowerment.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-8 shadow-2xs space-y-4">
          <div className="p-3 bg-[#F8F4EC] rounded-lg w-fit">
            <Target className="w-6 h-6 text-[#8A6748]" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#332D27]">
            Our Mission
          </h3>
          <p className="text-sm sm:text-base text-[#332D27]/85 leading-relaxed font-sans">
            To provide high-quality education in computer science through a modern, student-centered curriculum; to foster high-impact research in emerging computing disciplines; and to instill lifelong learning, professional ethics, and entrepreneurship in female scholars.
          </p>
        </div>
      </section>

      {/* ================= PROGRAM EDUCATIONAL OBJECTIVES ================= */}
      <section className="bg-[#EDE2D1]/30 rounded-2xl p-8 lg:p-10 border border-[#EDE2D1] space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
            Outcome-Based Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
            Program Educational Objectives (PEOs)
          </h2>
          <p className="text-xs sm:text-sm text-[#332D27]/80 mt-1 max-w-2xl font-sans">
            The Department’s curriculum is structured around clear educational benchmarks that graduates demonstrate within 3 to 5 years after graduation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFDF8] p-5 rounded-xl border border-[#B5A18A]/30 space-y-2">
            <span className="text-xs font-bold text-[#8A6748] font-mono">PEO-1</span>
            <h4 className="text-base font-serif font-bold text-[#332D27]">Technical Competence</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Apply core principles of computing, mathematics, and software design to solve complex computational problems in real-world scenarios.
            </p>
          </div>

          <div className="bg-[#FFFDF8] p-5 rounded-xl border border-[#B5A18A]/30 space-y-2">
            <span className="text-xs font-bold text-[#8A6748] font-mono">PEO-2</span>
            <h4 className="text-base font-serif font-bold text-[#332D27]">Leadership & Innovation</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Exhibit effective communication, collaborative teamwork, and leadership while managing multidisciplinary technology initiatives.
            </p>
          </div>

          <div className="bg-[#FFFDF8] p-5 rounded-xl border border-[#B5A18A]/30 space-y-2">
            <span className="text-xs font-bold text-[#8A6748] font-mono">PEO-3</span>
            <h4 className="text-base font-serif font-bold text-[#332D27]">Ethical Responsibility & Growth</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Adhere to the highest standards of professional ethics, social awareness, and engage in continuous professional development and research.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TEACHING & LEARNING APPROACH ================= */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
            Pedagogy & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
            Our Teaching & Learning Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Experiential Coding',
              desc: 'Every theoretical lecture is paired with 3-hour supervised lab sessions where students code, debug, and test solutions in real time.',
              icon: Laptop
            },
            {
              title: 'Project-Based Capstone',
              desc: 'From 5th semester onwards, students build real applications including full-stack web apps, mobile systems, and AI models.',
              icon: Cpu
            },
            {
              title: 'Peer Mentoring Circles',
              desc: 'Senior student cohorts and ACM-W executive members run coding bootcamps and competitive programming practice for juniors.',
              icon: Users
            },
            {
              title: 'Industry Seminars',
              desc: 'Regular technical guest lectures by software architects and entrepreneurs from Lahore, Islamabad, and regional tech clusters.',
              icon: BookOpen
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-2.5 shadow-2xs">
                <div className="p-2.5 bg-[#F8F4EC] rounded-lg w-fit">
                  <Icon className="w-5 h-5 text-[#8A6748]" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#332D27]">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= RESEARCH & INNOVATION CLUSTERS ================= */}
      <section className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-2xl p-8 lg:p-10 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
              Scholarly Exploration
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
              Active Research Clusters
            </h2>
          </div>
          <button
            onClick={() => onNavigate('faculty')}
            className="text-xs font-bold uppercase tracking-wider text-[#8A6748] hover:underline cursor-pointer"
          >
            Meet Research Faculty →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#F8F4EC] rounded-xl border border-[#EDE2D1] space-y-2">
            <h4 className="text-base font-serif font-bold text-[#332D27]">1. AI & Natural Language Processing</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Investigating transformer architectures, low-resource Urdu NLP, biomedical text mining, and multimodal classification led by Dr. Bushra Hameed.
            </p>
          </div>

          <div className="p-5 bg-[#F8F4EC] rounded-xl border border-[#EDE2D1] space-y-2">
            <h4 className="text-base font-serif font-bold text-[#332D27]">2. Computer Vision & Medical Diagnostics</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Developing convolutional and vision-transformer models for early detection of oncological markers and autonomous image analysis led by Dr. Fatima Zahra.
            </p>
          </div>

          <div className="p-5 bg-[#F8F4EC] rounded-xl border border-[#EDE2D1] space-y-2">
            <h4 className="text-base font-serif font-bold text-[#332D27]">3. Resilient Distributed Systems</h4>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              Focusing on microservice fault tolerance, cloud container orchestration, and empirical software engineering methodologies led by Engr. Ayesha Siddiqa.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LABORATORIES & FACILITIES ================= */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
            Physical Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
            Computing Laboratories & Campus Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LAB_FACILITIES.map((lab) => (
            <div key={lab.id} className="p-6 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-4 shadow-2xs">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-serif font-bold text-[#332D27]">{lab.name}</h4>
                  <p className="text-xs text-[#8A6748] font-mono mt-0.5">{lab.capacity} · Supervisor: {lab.supervisor}</p>
                </div>
                <div className="p-2 bg-[#EDE2D1]/60 rounded-lg">
                  <Laptop className="w-5 h-5 text-[#8A6748]" />
                </div>
              </div>

              <div className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] text-xs">
                <span className="font-bold text-[#8A6748] uppercase tracking-wider block mb-1">Hardware Specification:</span>
                <span className="text-[#332D27] font-mono">{lab.specs}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
                {lab.purpose}
              </p>

              <div>
                <span className="text-[11px] font-bold text-[#8A6748] uppercase tracking-wider block mb-1.5">Key Highlights:</span>
                <div className="grid grid-cols-2 gap-1.5">
                  {lab.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-[#332D27]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#85836A] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAREER OPPORTUNITIES & CALL TO ACTION ================= */}
      <section className="bg-[#332D27] text-[#FFFDF8] p-8 sm:p-12 rounded-2xl border border-[#8A6748]/40 shadow-lg">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B5A18A]">
            Career Pathways & Future
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Launch Your Journey in Global Computer Science
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE2D1]/85 leading-relaxed font-sans">
            Whether your aspiration is to architect large-scale web services, research computational biology algorithms, or pursue doctoral studies at top global universities, our department provides the guidance, mentorship, and credentials you need.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('programs')}
              className="px-5 py-2.5 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Browse Degree Programs
            </button>
            <button
              onClick={() => onNavigate('admissions')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#FFFDF8] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply for Fall 2026 Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
