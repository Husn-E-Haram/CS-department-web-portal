import React, { useState } from 'react';
import { Mail, MapPin, Clock, Search, BookOpen, Award, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FACULTY_MEMBERS, FacultyMember } from '../data/departmentData';

interface Props {
  onOpenFacultyModal: (faculty: FacultyMember) => void;
  onContactFaculty: (email: string, name: string) => void;
}

export const FacultyView: React.FC<Props> = ({
  onOpenFacultyModal,
  onContactFaculty,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const domains = ['All', 'Artificial Intelligence', 'Software Engineering', 'Data Science', 'Networks & Security'];

  const filteredFaculty = FACULTY_MEMBERS.filter(member => {
    const matchesDomain = selectedDomain === 'All' || member.domain === selectedDomain;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Academic Leadership & Researchers
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          Faculty Directory
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Distinguished academicians, doctoral researchers, and software engineering mentors committed to pedagogical excellence and computational innovation.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#EDE2D1] pb-6">
        {/* Domain Filter Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap p-1 bg-[#EDE2D1]/60 rounded-lg">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedDomain === dom
                  ? 'bg-[#FFFDF8] text-[#332D27] shadow-xs'
                  : 'text-[#332D27]/70 hover:text-[#332D27]'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search faculty name or field..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A]/50 rounded-lg focus:outline-hidden focus:border-[#8A6748]"
          />
          <Search className="w-4 h-4 text-[#8A6748] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((member) => (
          <div
            key={member.id}
            className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-[#8A6748] transition-all hover:shadow-xs group"
          >
            <div className="space-y-4">
              {/* Header with Avatar Initials & Department Tag */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-14 h-14 rounded-full bg-[#EDE2D1] border border-[#B5A18A] flex items-center justify-center font-serif text-lg font-bold text-[#8A6748] shrink-0 shadow-2xs group-hover:bg-[#8A6748] group-hover:text-[#FFFDF8] transition-colors">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6748] bg-[#F8F4EC] px-2 py-0.5 rounded border border-[#EDE2D1] block w-fit ml-auto">
                    {member.domain}
                  </span>
                  {member.isChairperson && (
                    <span className="text-[10px] text-[#85836A] font-bold mt-1 block">
                      Chairperson
                    </span>
                  )}
                </div>
              </div>

              {/* Name & Title */}
              <div>
                <h3 className="text-xl font-serif font-bold text-[#332D27] group-hover:text-[#8A6748] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#8A6748] mt-0.5">
                  {member.designation}
                </p>
                <p className="text-[11px] text-[#332D27]/70 font-mono mt-0.5">
                  {member.qualification}
                </p>
              </div>

              {/* Specialization */}
              <div className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] text-xs">
                <span className="text-[#8A6748] font-bold block mb-0.5">Core Specialization:</span>
                <span className="text-[#332D27] leading-relaxed">{member.specialization}</span>
              </div>

              {/* Contact meta */}
              <div className="space-y-1.5 text-xs text-[#332D27]/80 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8A6748] shrink-0" />
                  <span className="truncate">{member.office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8A6748] shrink-0" />
                  <span className="font-mono text-[11px] truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8A6748] shrink-0" />
                  <span className="text-[11px] truncate">{member.advisoryHours}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-5 border-t border-[#EDE2D1] flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenFacultyModal(member)}
                className="text-xs font-bold text-[#8A6748] hover:text-[#332D27] cursor-pointer inline-flex items-center gap-1"
              >
                <span>View Research Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onContactFaculty(member.email, member.name)}
                className="p-1.5 text-[#8A6748] hover:text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
                title={`Send message to ${member.name}`}
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="p-12 text-center bg-[#FFFDF8] rounded-xl border border-[#EDE2D1] text-xs text-[#332D27]/70">
          No faculty members found matching your search. Please adjust the filter or search keywords.
        </div>
      )}

      {/* Illustrative Notice */}
      <div className="p-4 bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-xl text-xs text-[#8A6748] leading-relaxed">
        <strong>Academic Demonstration Notice:</strong> The faculty profiles, research publications, and advisory office hours displayed are structured sample records for academic portal evaluation. Official appointment orders and contact rosters are maintained by the Registrar Office and Department Chairperson.
      </div>
    </div>
  );
};
