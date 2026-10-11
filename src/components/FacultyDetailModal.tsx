import React from 'react';
import { X, Mail, MapPin, Clock, BookOpen, Award, ArrowUpRight } from 'lucide-react';
import { FacultyMember } from '../data/departmentData';

interface Props {
  faculty: FacultyMember | null;
  onClose: () => void;
  onContactFaculty: (email: string, name: string) => void;
}

export const FacultyDetailModal: React.FC<Props> = ({ faculty, onClose, onContactFaculty }) => {
  if (!faculty) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-8 bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#EDE2D1]/70 border-b border-[#B5A18A]/30 p-6 flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Academic Initials Badge */}
            <div className="w-14 h-14 rounded-full bg-[#8A6748] text-[#FFFDF8] flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-xs border-2 border-[#FFFDF8]">
              {faculty.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8A6748] uppercase tracking-wider">
                <span>{faculty.domain}</span>
                {faculty.isChairperson && (
                  <>
                    <span>·</span>
                    <span className="text-[#85836A] font-bold">Department Chair</span>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#332D27] mt-0.5">
                {faculty.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#8A6748] font-medium">
                {faculty.designation}
              </p>
            </div>
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
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Qualification:</span>
                <p className="text-[#332D27] font-semibold">{faculty.qualification}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Office:</span>
                <p className="text-[#332D27] font-semibold">{faculty.office}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Email:</span>
                <p className="text-[#332D27] font-semibold font-mono">{faculty.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Advisory Hours:</span>
                <p className="text-[#332D27] font-semibold">{faculty.advisoryHours}</p>
              </div>
            </div>
          </div>

          {/* Academic Biography */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-1.5">Biography & Academic Profile</h3>
            <p className="text-sm text-[#332D27]/90 leading-relaxed font-sans">
              {faculty.bio}
            </p>
          </div>

          {/* Research Interests */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-2">Research Clusters & Specialization</h3>
            <div className="flex flex-wrap gap-1.5">
              {faculty.researchInterests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-[#EDE2D1]/60 text-[#332D27] px-2.5 py-1 rounded border border-[#B5A18A]/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Courses Taught */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Courses Instructed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {faculty.coursesTaught.map((course, idx) => (
                <div key={idx} className="text-xs bg-[#F8F4EC] p-2 rounded border border-[#EDE2D1] text-[#332D27]">
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Publications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-2">Selected Research Publications</h3>
            <div className="space-y-2">
              {faculty.selectedPublications.map((pub, idx) => (
                <div key={idx} className="p-2.5 bg-[#F8F4EC] rounded border border-[#EDE2D1] text-xs text-[#332D27] font-serif leading-relaxed">
                  {pub}
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-[#8A6748] italic border-t border-[#EDE2D1] pt-2">
            * Note: Sample academic profile provided for demonstration purposes. Official contact directories can be verified via the Department Office.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F8F4EC] border-t border-[#EDE2D1] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onContactFaculty(faculty.email, faculty.name);
            }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Send Departmental Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
