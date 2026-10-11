import React from 'react';
import { X, CheckCircle2, BookOpen, GraduationCap, Clock, Award, ArrowRight } from 'lucide-react';
import { Program } from '../data/departmentData';

interface Props {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<Props> = ({ program, onClose, onApply }) => {
  if (!program) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#EDE2D1]/70 border-b border-[#B5A18A]/30 px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8A6748] uppercase">
              <span>{program.degreeType} Program</span>
              <span>·</span>
              <span>HEC / NCEAC Aligned</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
              {program.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#332D27]/70 hover:text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1]">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A6748]/90 font-medium">Duration</p>
                <p className="text-sm font-semibold text-[#332D27]">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A6748]/90 font-medium">Semesters</p>
                <p className="text-sm font-semibold text-[#332D27]">{program.semesters} Semesters</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A6748]/90 font-medium">Credit Hours</p>
                <p className="text-sm font-semibold text-[#332D27]">{program.creditHours} CH</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A6748]/90 font-medium">Eligibility</p>
                <p className="text-sm font-semibold text-[#332D27]">Min. 50% Marks</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8A6748] mb-2">Program Overview</h3>
            <p className="text-sm sm:text-base text-[#332D27]/90 leading-relaxed font-sans">
              {program.fullOverview}
            </p>
          </div>

          {/* Eligibility Criteria Box */}
          <div className="p-4 bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-lg">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Eligibility Criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#332D27] leading-relaxed">
              {program.eligibility}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8A6748] mb-3">Distinguishing Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#332D27]">
                  <CheckCircle2 className="w-4 h-4 text-[#85836A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Roadmap */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8A6748] mb-3">Curriculum Structure & Core Courses</h3>
            <div className="space-y-3">
              {program.curriculumHighlights.map((block, idx) => (
                <div key={idx} className="border border-[#EDE2D1] rounded-lg p-3.5 bg-[#F8F4EC]/60">
                  <p className="text-xs font-bold text-[#8A6748] uppercase tracking-wide mb-1.5">{block.semester}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {block.courses.map((course, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-xs bg-[#FFFDF8] border border-[#B5A18A]/30 px-2 py-1 rounded text-[#332D27]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Prospects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8A6748] mb-2">Career Pathways</h3>
            <div className="flex flex-wrap gap-2">
              {program.careerProspects.map((career, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-medium bg-[#EDE2D1] text-[#332D27] px-2.5 py-1 rounded-sm"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-xs text-[#8A6748] italic border-t border-[#EDE2D1] pt-3">
            * Note: {program.accreditationNote}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F8F4EC] border-t border-[#EDE2D1] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(program.id);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <span>Apply for this Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
