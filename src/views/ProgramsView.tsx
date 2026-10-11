import React, { useState } from 'react';
import { BookOpen, Clock, Award, GraduationCap, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ACADEMIC_PROGRAMS, Program } from '../data/departmentData';
import { NavView } from '../components/Navbar';

interface Props {
  onOpenProgramModal: (program: Program) => void;
  onNavigate: (view: NavView) => void;
  onApplyForProgram: (programId: string) => void;
}

export const ProgramsView: React.FC<Props> = ({
  onOpenProgramModal,
  onNavigate,
  onApplyForProgram,
}) => {
  const [filterType, setFilterType] = useState<'All' | 'Undergraduate' | 'Graduate'>('All');

  const filteredPrograms = ACADEMIC_PROGRAMS.filter(prog => {
    if (filterType === 'All') return true;
    return prog.degreeType === filterType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Curricular Offerings & Academic Degrees
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          Academic Programs
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Comprehensive degree programs structured according to HEC Pakistan and National Computing Education Accreditation Council (NCEAC) frameworks.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#EDE2D1] pb-4">
        <div className="flex items-center gap-2 p-1 bg-[#EDE2D1]/60 rounded-lg">
          {(['All', 'Undergraduate', 'Graduate'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filterType === type
                  ? 'bg-[#FFFDF8] text-[#332D27] shadow-xs'
                  : 'text-[#332D27]/70 hover:text-[#332D27]'
              }`}
            >
              {type === 'All' ? 'All Degrees' : `${type} Programs`}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#8A6748] font-medium flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#85836A]" />
          <span>Curricula compliant with NCEAC guidelines</span>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#8A6748] transition-all hover:shadow-xs group"
          >
            <div className="space-y-4">
              {/* Category & Badge */}
              <div className="flex items-center justify-between text-xs text-[#8A6748]">
                <span className="font-semibold uppercase tracking-wider">{prog.degreeType} Degree</span>
                <span className="font-mono bg-[#EDE2D1]/60 px-2.5 py-0.5 rounded text-[#332D27]">
                  {prog.duration} · {prog.semesters} Semesters
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-serif font-bold text-[#332D27] group-hover:text-[#8A6748] transition-colors">
                {prog.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-[#332D27]/85 leading-relaxed font-sans">
                {prog.shortDescription}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#332D27]">
                <div className="flex items-center gap-2 p-2.5 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1]">
                  <Award className="w-4 h-4 text-[#8A6748] shrink-0" />
                  <div>
                    <span className="text-[#8A6748] text-[10px] uppercase font-bold block">Credit Hours</span>
                    <span className="font-semibold">{prog.creditHours} Total CH</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1]">
                  <GraduationCap className="w-4 h-4 text-[#8A6748] shrink-0" />
                  <div>
                    <span className="text-[#8A6748] text-[10px] uppercase font-bold block">Accreditation</span>
                    <span className="font-semibold">NCEAC / HEC</span>
                  </div>
                </div>
              </div>

              {/* Eligibility Preview */}
              <div className="p-3 bg-[#EDE2D1]/40 rounded-lg border border-[#B5A18A]/20">
                <span className="text-[11px] font-bold text-[#8A6748] uppercase tracking-wider block mb-1">
                  Eligibility Criteria:
                </span>
                <p className="text-xs text-[#332D27]/80 line-clamp-2 leading-relaxed">
                  {prog.eligibility}
                </p>
              </div>

              {/* Key Features preview */}
              <div className="space-y-1.5 pt-1">
                {prog.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-[#332D27]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#85836A] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#EDE2D1] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenProgramModal(prog)}
                className="w-full sm:flex-1 py-2.5 px-4 bg-[#F8F4EC] hover:bg-[#EDE2D1] border border-[#B5A18A]/40 rounded-lg text-xs font-semibold text-[#332D27] hover:text-[#8A6748] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Full Curriculum & Roadmap</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onApplyForProgram(prog.id)}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#8A6748] hover:bg-[#725439] text-[#FFFDF8] rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Apply Online
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Curriculum Note Banner */}
      <div className="p-4 bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-xl text-xs text-[#8A6748] leading-relaxed">
        <strong>Curriculum Transparency Note:</strong> The course distributions and eligibility criteria presented on this portal are illustrative of standard HEC National Computing Education Accreditation Council (NCEAC) curricula for university demonstration. Official semester course packs and gazettes are issued upon admission by the Department Academic Committee.
      </div>
    </div>
  );
};
