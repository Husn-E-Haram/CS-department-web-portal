import React, { useState, useMemo } from 'react';
import { X, Search, BookOpen, Users, Calendar, Laptop, HelpCircle, ArrowRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS, FACULTY_MEMBERS, NEWS_AND_EVENTS, LAB_FACILITIES, FAQS } from '../data/departmentData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (view: string, detailId?: string) => void;
}

export const GlobalSearchModal: React.FC<Props> = ({ isOpen, onClose, onSelectItem }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: Array<{
      id: string;
      title: string;
      snippet: string;
      category: 'Program' | 'Faculty' | 'Event' | 'Lab' | 'FAQ';
      targetView: string;
      targetId?: string;
    }> = [];

    // Search Programs
    ACADEMIC_PROGRAMS.forEach(prog => {
      if (prog.name.toLowerCase().includes(q) || prog.shortDescription.toLowerCase().includes(q) || prog.fullOverview.toLowerCase().includes(q)) {
        results.push({
          id: `prog-${prog.id}`,
          title: prog.name,
          snippet: prog.shortDescription,
          category: 'Program',
          targetView: 'programs',
          targetId: prog.id
        });
      }
    });

    // Search Faculty
    FACULTY_MEMBERS.forEach(fac => {
      if (fac.name.toLowerCase().includes(q) || fac.specialization.toLowerCase().includes(q) || fac.domain.toLowerCase().includes(q)) {
        results.push({
          id: `fac-${fac.id}`,
          title: `${fac.name} (${fac.designation})`,
          snippet: `${fac.specialization} · ${fac.office}`,
          category: 'Faculty',
          targetView: 'faculty',
          targetId: fac.id
        });
      }
    });

    // Search News & Events
    NEWS_AND_EVENTS.forEach(ev => {
      if (ev.title.toLowerCase().includes(q) || ev.excerpt.toLowerCase().includes(q) || ev.venue.toLowerCase().includes(q)) {
        results.push({
          id: `ev-${ev.id}`,
          title: ev.title,
          snippet: `${ev.date} · ${ev.venue}`,
          category: 'Event',
          targetView: 'news',
          targetId: ev.id
        });
      }
    });

    // Search Labs
    LAB_FACILITIES.forEach(lab => {
      if (lab.name.toLowerCase().includes(q) || lab.purpose.toLowerCase().includes(q) || lab.specs.toLowerCase().includes(q)) {
        results.push({
          id: `lab-${lab.id}`,
          title: lab.name,
          snippet: `${lab.capacity} · ${lab.specs}`,
          category: 'Lab',
          targetView: 'about',
          targetId: lab.id
        });
      }
    });

    // Search FAQs
    FAQS.forEach(faq => {
      if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
        results.push({
          id: `faq-${faq.id}`,
          title: faq.question,
          snippet: faq.answer,
          category: 'FAQ',
          targetView: 'admissions',
          targetId: faq.id
        });
      }
    });

    return results.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  const categoryIcons = {
    Program: <BookOpen className="w-4 h-4 text-[#8A6748]" />,
    Faculty: <Users className="w-4 h-4 text-[#85836A]" />,
    Event: <Calendar className="w-4 h-4 text-[#8A6748]" />,
    Lab: <Laptop className="w-4 h-4 text-[#85836A]" />,
    FAQ: <HelpCircle className="w-4 h-4 text-[#8A6748]" />
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#EDE2D1] p-4 flex items-center bg-[#F8F4EC]">
          <Search className="w-5 h-5 text-[#8A6748] absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, faculty, events, labs, or admissions..."
            className="w-full pl-8 pr-10 py-1.5 text-sm bg-transparent border-none text-[#332D27] placeholder-[#8A6748]/60 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#332D27]/50 hover:text-[#332D27] mr-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-[#332D27]/60 hover:text-[#332D27] bg-[#EDE2D1] rounded cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="p-3 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-[#332D27]/70 space-y-3">
              <p className="font-medium text-[#8A6748]">Quick Search Suggestions:</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {['BS Computer Science', 'Dr. Bushra Hameed', 'Hackathon 2026', 'Ada Lovelace Lab', 'Eligibility Criteria'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 bg-[#F8F4EC] hover:bg-[#EDE2D1] border border-[#EDE2D1] rounded text-[#332D27] cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#332D27]/60">
              No matching records found for "{query}". Try searching for "BSCS", "Faculty", or "Admissions".
            </div>
          ) : (
            <div className="space-y-1.5">
              {searchResults.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectItem(item.targetView, item.targetId);
                  }}
                  className="w-full p-2.5 rounded-lg hover:bg-[#F8F4EC] border border-transparent hover:border-[#EDE2D1] text-left transition-colors flex items-start gap-3 cursor-pointer group"
                >
                  <div className="p-2 bg-[#EDE2D1]/60 rounded-md shrink-0 mt-0.5">
                    {categoryIcons[item.category]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#332D27] truncate group-hover:text-[#8A6748]">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-[#8A6748] uppercase tracking-wider font-semibold shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#332D27]/70 line-clamp-1 mt-0.5">
                      {item.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#B5A18A] group-hover:text-[#8A6748] shrink-0 mt-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F8F4EC] border-t border-[#EDE2D1] px-4 py-2 flex items-center justify-between text-[11px] text-[#8A6748]">
          <span>Navigate with click</span>
          <span>Department of Computer Science · GCWUS</span>
        </div>
      </div>
    </div>
  );
};
